import mongoose from 'mongoose'

export {
  Profile
}

const profileSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
    read: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],
    currentlyReading: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],
    wantToRead: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],
    reviews: [{type: mongoose.Schema.Types.ObjectId, ref: "Review"}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
    // authors: [{type: mongoose.Schema.Types.ObjectId, ref: "Author"}],
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model('Profile', profileSchema)
