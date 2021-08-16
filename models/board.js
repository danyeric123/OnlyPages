import mongoose from 'mongoose'

export {
  Board,
}

const Schema = mongoose.Schema

const boardSchema = new Schema({
  title: String,
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }],
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  category: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
},{
  timestamps: true
})

const Board = mongoose.model('Board', boardSchema)