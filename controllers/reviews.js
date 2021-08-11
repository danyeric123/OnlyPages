import { Review } from '../models/review'
import { Profile } from '../models/profile.js'

export { 
  create, 
  reply,
  deleteReview as delete,
  edit,
  update,
  likeAndUnlike,
}

function create(req, res) {
  req.body.author = req.user.profile
  Review.create(req.body)
      .then((review)=> {
        Profile.findById(req.user.profile)
                .then(profile=>{
                  profile.reviews.push(review._id)
                  profile.save()
                  //What am I supposed to pass here???
                  res.json(profile)
                })
      })
      .catch(err=>{
        console.log(err)
        res.json()
      })
}



function reply(req, res) {
  Review.findById(req.params.id)
      .then((review)=> {
        req.body.author = req.user.profile
        review.replies.push(req.body)
        review.save()
        .then(()=> {
          res.json(review)
        })
      })
      .catch(err=>{
        console.log(err)
        res.redirect('/reviews')
      })
}

function deleteReview(req,res){
  Profile.findById(req.params.profileId)
        .then((profile) => {
          profile.reviews.remove({_id: req.params.reviewId})
          profile.save()
          Review.findOneAndDelete({_id: req.params.reviewId})
          .then(() => {
            res.redirect(`/reviews`)
          })
        })
        .catch(err=>{
          console.log(err)
          res.redirect('/reviews')
        })
}

function edit(req, res) {
  Review.findById(req.params.id)
      .then(review => {
        res.json(review)
      })
      .catch(err=>{
        console.log(err)
        res.redirect('/reviews')
      })
}

function update(req, res) {
  req.body.categories=req.body.categories.split("; ")
  Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((review) => {
        res.redirect(`/reviews/${req.params.id}`)
      })
      .catch((err) => {
        console.log(err)
        res.redirect('/')
      })
}

function likeAndUnlike(req,res){
  Review.findById(req.params.id)
      .then(review=>{
        if(!review.likes.includes(req.user.profile._id)){
          review.likes.push(req.user.profile)
          review.save()
        }else{
          review.likes.remove({_id:req.user.profile._id})
          review.save()
        }
        res.redirect(req.headers.referer)
      })
      .catch(err=>{
        console.log(err)
        res.redirect('/reviews')
      })
}