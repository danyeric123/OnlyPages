import { Book } from "../models/book.js"
import { Profile } from "../models/profile.js"
import { User } from "../models/user.js"

export {
  userProfile,
  show,
  index,
  friendAndUnfriend,
  addBook,
  edit,
  update,
  removeBook,
}

function show(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    populateAll(profile)
    .then(profile=>res.json(profile))
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}
function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .then(profile => {
    populateAll(profile)
    .then(profile=>res.json(profile))
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

// Helper function for helping populate everything
function populateAll(profile){
  return profile.populate('posts')
  .populate('read')
  .populate('wantToRead')
  .populate('currentlyReading')
  .populate('friends')
  .populate('authors').execPopulate()
}

function index(req, res) {
  Profile.find({})
  .populate('posts')
  .populate('read')
  .populate('wantToRead')
  .populate('currentlyReading')
  .populate('friends')
  .then((users) => {
    res.json(users)
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

// Get the user profile and give them the form to edit it
function edit(req, res) {
  Profile.findById(req.params.id)
        .then(profile => {
          if(req.user.profile.equals(req.params.id)){
            res.json(profile)
          }else{
            return res.status(400)
          }
        })
        .catch(err=>{
          console.log(err)
          return res.status(400).json(err)
        })
}

//Update the profile given an id
function update(req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((profile) => {
          User.findOneAndUpdate({profile:profile._id},req.body,{new: true})
              .then(()=>{})
          populateAll(profile)
          .then(profile=>{
            res.json(profile)
          })
        })
        .catch(err=>{
          console.log(err)
          return res.status(400).json(err)
        })
}

//Fix this functionality to do unfriending too
function friendAndUnfriend(req, res) {
  Profile.findById(req.user.profile)
  .then(profile=> {
    if(profile.friends.includes(req.params.id)){
      profile.friends.remove(req.params.id)
    }else{
      profile.friends.push(req.params.id)
    }
    profile.populate("friends").execPopulate()
    profile.save()
    .then(()=> res.json(profile))
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

/**
 * One controller for all three book lists
 * 
 * You also create the book document here since the book model is only for use
 * by the profile user
 * 
 * The params.collection will give you which collection it should go to 
 * (params.id gives you which book based on api_id)
 * 
 * When you add you will need to check if the book is already in our database
 * If it isn't, then create it. Otherwise just add it
 */
function addBook(req,res){
    Book.findOne({api_id:req.body.api_id})
    .then(book=>{
      if(book){
        addToCollection(req.user.profile, book,req.params.collection,res)
      }else{
        Book.create(req.body)
        .then(book=>{
          addToCollection(req.user.profile,book,req.params.collection,res)
        })
      }
    })
    .catch(err=>{
      console.log(err)
      return res.status(400).json(err)
    })
}

function addToCollection(profile, book, collection,res){
  Profile.findById(profile)
  .then(profile=>{
    profile.read.remove(book._id)
    profile.currentlyReading.remove(book._id)
    profile.wantToRead.remove(book._id)
    profile[collection].push(book._id)
    profile.save()
    populateAll(profile)
    .then(profile=>{
      res.json(profile)
    })
  })
}

function removeBook(req,res){
  Profile.findById(req.user.profile)
  .then(profile=>{
    removeFromCollection(profile,req.body.api_id,req.params.collection,res)
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

function removeFromCollection(profile,bookId,collection,res){
  Book.findOne({api_id:bookId})
  .then(book=>{
    profile[collection].remove({_id:book._id})
    profile.save()
    populateAll(profile)
            .then(profile=>{
              res.json(profile)
            })
  })

}

