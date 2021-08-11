import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    avatar: String,
    books: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)
