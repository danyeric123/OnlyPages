import { Board } from '../models/board.js'
import { Profile } from '../models/profile.js'

export { 
  index, 
  create, 
  show, 
  categoryShow,
  deleteBoard as delete,
  edit,
  update,
}

function index(req, res) {
  Board.find({})
  .populate('posts')
  .populate('members')
  .populate('admin')
  .populate('posts')
  .sort({title: "asc"})
  .then((boards) => {
    res.json(boards)
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

function show(req,res){

}

function create(req,res){
  req.body.admin = req.user.profile
  req.body.categories=req.body.categories.split("; ")
  Board.create(req.body)
      .then((board)=> {
        res.json(board)
      })
      .catch(err=>{
        console.log(err)
        return res.status(400).json(err)
      })
}

function categoryShow(req,res){
  Board.find({category: req.params.category})
  .populate('posts')
  .populate('members')
  .populate('admin')
  .populate('posts')
  .sort({title: "asc"})
  .then((boards) => {
    res.json(boards)
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

function deleteBoard(req,res){
  Board.findOneAndDelete({_id:req.params.boardId})
  .then(()=>{
    res.status(200)
  })
  .catch(err=>{
    console.log(err)
    return res.status(400).json(err)
  })
}

function edit(req,res){
  Board.findById(req.params.id)
      .then(post => {
        res.json(post)
      })
      .catch(err=>{
        console.log(err)
        return res.status(400).json(err)
      })
}

function update(req, res) {
  req.body.categories=req.body.categories.split("; ")
  Board.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((board) => {
        res.json(board)
      })
      .catch((err) => {
        console.log(err)
        return res.status(400).json(err)
      })
}

// // Helper function for helping populate everything
// function populateAll(board){
//   return board.populate('posts')
//   .populate('members')
//   .populate('admin')
//   .populate('posts').execPopulate()
// }