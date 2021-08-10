import { Profile } from "../models/profile.js"
import { Media } from '../models/media.js'

export {
  userProfile,
  index,
  friendAndUnfriend,
}

function userProfile(req, res) {
  Profile.findById(req.user.profile)
  .populate('books')
  .populate('friends')
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

