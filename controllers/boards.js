import { Board } from "../models/board.js";
import { Post } from "../models/post.js";
import { Profile } from "../models/profile.js";

export {
  index,
  create,
  show,
  categoryShow,
  deleteBoard as delete,
  edit,
  update,
  joinAndUnjoin,
  addPost,
};

// What should be in state for the index to work?
function index(req, res) {
  Board.find({})
    .populate("posts")
    .populate("members")
    .populate("admin")
    .populate("posts")
    .sort({ title: "asc" })
    .then((boards) => {
      res.json(boards);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function joinAndUnjoin(req, res) {
  Board.findById(req.params.id)
    .then((board) => {
      if (board.includes(req.user.profile)) {
        board.members.remove(req.user.profile);
      } else {
        board.members.push(req.user.profile);
      }
      board.save();
      // Front end will add the user to the state of the board's members
      return res.status(200);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function show(req, res) {
  Board.findById(req.params.id)
    .then((board) => {
      board
        .populate("posts")
        .populate("members")
        .populate("admin")
        .populate("posts")
        .execPopulate();
      res.json(board);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function addPost(res, req) {
  Board.findById(req.parms.id)
    .then((board) => {
      req.body.author = req.user.profile;
      req.body.categories = req.body.categories.split("; ");
      Post.create(req.body).then((post) => {
        Profile.findById(req.user.profile).then((profile) => {
          profile.posts.push(post._id);
          profile.save();
        });
        board.posts.push(post);
        board.save();
        // The front end will add this post to its local state for board
        res.json(post);
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function create(req, res) {
  req.body.admin = req.user.profile;
  req.body.categories = req.body.categories.split("; ");
  Board.create(req.body)
    .then((board) => {
      res.json(board);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function categoryShow(req, res) {
  Board.find({ category: req.params.category })
    .populate("posts")
    .populate("members")
    .populate("admin")
    .populate("posts")
    .sort({ title: "asc" })
    .then((boards) => {
      res.json(boards);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function deleteBoard(req, res) {
  Board.find({ _id: req.params.id }).then((board) => {
    Post.deleteMany({ _id: { $in: [board.posts] } });
  });
  Board.findOneAndDelete({ _id: req.params.id })
    .then(() => {
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function edit(req, res) {
  Board.findById(req.params.id)
    .then((post) => {
      res.json(post);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

function update(req, res) {
  req.body.categories = req.body.categories.split("; ");
  Board.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((board) => {
      res.json(board);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json(err);
    });
}

// // Helper function for helping populate everything
// function populateAll(board){
//   return board.populate('posts')
//   .populate('members')
//   .populate('admin')
//   .populate('posts').execPopulate()
// }
