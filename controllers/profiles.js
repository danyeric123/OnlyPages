import { Profile } from "../models/profile.js"

export {
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
    profile = populateAll(profile)
    res.json(profile)
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

// Helper function for helping populate everything
function populateAll(profile){
  profile.populate('posts')
  .populate('read')
  .populate('wantToRead')
  .populate('currentlyReading')
  .populate('friends')
  .populate('authors').execPopulate()
  return profile
}

function index(req, res) {
  Profile.find({})
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
            res.redirect(`/profiles/${profile._id}`)
          }
        })
        .catch(err=>{
          console.log(err)
          return res.status(400).json(err)
        })
}

//Update the profile given an id
function update(req, res) {
  if(req.user.profile.equals(req.params.id)){
    Profile.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((profile) => {
          profile = populateAll(profile)
          res.json(profile)
        })
        .catch(err=>{
          console.log(err)
          return res.status(400).json(err)
        })
  }else{
    let err = {error:"User not Aurthorized"}
    console.log(err)
    return res.status(400).json(err)
  }
}

//Fix this functionality to do unfriending too
function friendAndUnfriend(req, res) {
  Profile.findById(req.user.profile)
  .populate('friends')
  .then(profile=> {
    profile.friends.push(req.params.id)
    profile.save()
    .then(()=> res.json(profile))
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

}

function removeBook(req,res){

}

