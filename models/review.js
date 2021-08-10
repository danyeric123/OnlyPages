import mongoose from 'mongoose'
import { replySchema } from './reply';

export {
  Review
}

const reviewSchema = new mongoose.Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5},
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  book: {type: mongoose.Schema.Types.ObjectId, ref: "Book"},
  replies: [replySchema],
  likes:[{type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}]
}, {
  timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);