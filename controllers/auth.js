import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'
import jwt from 'jsonwebtoken'

export {
  signup,
  login
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(401).json({ err: "bad credentials" })
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user)
        res.json({ token })
      } else {
        return res.status(401).json({ err: "bad credentials" })
      }
    });
  } catch (err) {
    return res.status(400).json(err)
  }
}

async function signup(req, res) {
  const profile = new Profile(req.body)
  req.body.profile = profile._id
  const user = new User(req.body)
  try {
    await user.save();
    await profile.save();

    // Return a token INSTEAD of a user!
    const token = createJWT(user)
    res.json({ token })
  
  } catch (err) {
    res.status(400).send({ err: err.errmsg })
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    { user }, // data payload
    process.env.SECRET,
    { expiresIn: "24h" }
  )
}
