import { Profile } from "../models/profile.js"

export {
  userProfile,
  index,
  friendAndUnfriend,
  addBook,
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .populate('posts')
  .populate('read')
  .populate('wantToRead')
  .populate('currentlyReading')
  .populate('friends')
  .populate('authors')
  .then(profile => {
    res.json(profile)
  })
}

function index(req, res) {
  Profile.find({})
  .populate('books')
  .populate('friends')
  .then((users) => {
    res.json(users)
  })
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
 * The form will give you what you need with regard to what list the book should be added to
 */
function addBook(req,res){

}

