import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'

export {
  signup
}

async function signup(req, res) {
  const profile = new Profile(req.body)
  req.body.profile = profile._id
  const user = new User(req.body)
  try {
    await user.save();
    await profile.save();

    // TODO: Send back a JWT instead of the user
    res.status(200).json(user)
  
  } catch (err) {
    res.status(400).send({ err: err.errmsg })
  }
}
