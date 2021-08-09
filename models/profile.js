import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)
