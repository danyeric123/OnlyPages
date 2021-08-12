import mongoose from 'mongoose'
import { replySchema } from './reply.js'

export {
  Post,
}

const Schema = mongoose.Schema

const postSchema = new Schema({
  text: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  },
  categories: [String],
  replies: [replySchema],
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'Profile'
  }],
},{
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)