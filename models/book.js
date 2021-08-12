import mongoose from 'mongoose'


export {
  Book,
}

const Schema = mongoose.Schema

// Do we need a book model?
const bookSchema = new Schema({
  title: String,
  publish: Date,
  coverImage: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  // Where should categories be?
  categories: [String],
  reviews: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }],
},{
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema)