import mongoose from 'mongoose'

export {
  Author
}

/**
 * The API provides practically everything you need for the author; it might not
 * be so smart to store author at all on the server. In fact, how would books be
 * stored if they are on the API and not on our database?
 */

const authorSchema = new mongoose.Schema(
  {
    name: String,
    avatar: String,
    // Is the API link necessary on the backend??
    apiLink: String,
    books: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],
    followers: [{type: mongoose.Schema.Types.ObjectId, ref: "Profile"}],
  },
  {
    timestamps: true,
  }
)

const Author = mongoose.model('Author', authorSchema)
