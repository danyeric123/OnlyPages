import { Review } from "../models/review.js";
import { Profile } from "../models/profile.js";
import { Book } from "../models/book.js";

export {
  index,
  create,
  reply,
  deleteReview as delete,
  edit,
  update,
  likeAndUnlike,
};

function index(req, res) {
  Book.findOne({ api_id: req.params.bookId })
    .then((book) => {
      if (book) {
        Review.find({ book: book._id })
          .populate("author")
          .populate("likes")
          .populate("replies")
          .then((reviews) => {
            if (reviews.length !== 0) {
              res.json(reviews);
            } else {
              res.json([]);
            }
          });
      } else {
        res.json([]);
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function create(req, res) {
  req.body.author = req.user.profile;
  Book.findOne({ api_id: req.body.book })
    .then((book) => {
      req.body.book = book._id;
      console.log(req.body);
      Review.create(req.body).then((review) => {
        Profile.findById(req.user.profile).then((profile) => {
          profile.reviews.push(review._id);
          profile.save();
        });
        book.reviews.push(review._id);
        review
          .populate("author")
          .populate("likes")
          .populate("replies")
          .execPopulate()
          .then((review) => res.json(review));
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function reply(req, res) {
  Review.findById(req.params.id)
    .then((review) => {
      req.body.author = req.user.profile;
      review.replies.push(req.body);
      review.save().then(() => {
        res.json(review);
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function deleteReview(req, res) {
  console.log(req.params.id);
  Profile.findById(req.user.profile)
    .then((profile) => {
      profile.reviews.remove(req.params.id);
      profile.save();
      Review.findOneAndDelete(req.params.id).then((review) => {
        res.status(200).json(review);
      });
    })
    .catch((err) => {
      return res.status(400).json(err);
    });
}

function edit(req, res) {
  Review.findById(req.params.id)
    .then((review) => {
      res.json(review);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function update(req, res) {
  req.body.categories = req.body.categories.split("; ");
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((review) => {
      res.json(review);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function likeAndUnlike(req, res) {
  Review.findById(req.params.id)
    .populate("author")
    .populate({
      path: "replies",
      populate: {
        path: "author",
      },
    })
    .then((review) => {
      if (!review.likes.includes(req.user.profile)) {
        review.likes.push(req.user.profile);
        review.save();
      } else {
        review.likes.remove(req.user.profile);
        review.save();
      }
      review
        .populate("likes")
        .execPopulate()
        .then((review) => res.json(review));
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}
