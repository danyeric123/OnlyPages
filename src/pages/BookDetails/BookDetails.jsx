import React, { Component } from 'react'
import * as bookAPI from '../../services/bookService'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import BookForm from '../../components/MediaForm/BookForm'
import * as reviewsAPI from '../../services/reviewService'
import ReviewCard from '../../components/ReviewCard/ReviewCard'

class MovieDetails extends Component {
  state = {
    searchResult: {},
    reviews:[]
  }

  async componentDidMount() {
    const searchResult = await bookAPI.searchOne(this.props.match.params.id)
    this.setState({searchResult})
  }

  /*
   * How might we deal with the reviews?   
   */
  handleAddReview = async review => {
    const newReview = await reviewsAPI.addReview(review)
    const reviews = [...this.state.reviews, newReview]
    this.setState({ reviews })
  }

  handleDeleteReview = async id => {
    const deletedReview = await reviewsAPI.deleteReview(id)
    const reviewIdx = this.state.reviews.findIndex(review => review._id === deletedReview._id)
    const reviews = [...this.state.reviews]
    reviews.splice(reviewIdx, 1)
    this.setState({ reviews })
  }

  render() {
    const { searchResult } = this.state 
    return (
      <>
        <h1>{searchResult.title}</h1>
        <h3>{searchResult?.description}</h3>
        
        {/* {searchResult?.title &&
          <BookForm
            media={searchResult}
            userProfile={this.props.userProfile}
            handleAddMedia={this.props.handleAddMedia}
            handleRemoveMedia={this.props.handleRemoveMedia}
          />  
        } */}
        <h4>Runtime: {searchResult?.runtime} minutes</h4>
        <h4>Budget: ${searchResult?.budget}</h4>
        <h4>Revenue: ${searchResult?.revenue}</h4>
        <h3>Genres:</h3>
        {searchResult.genres?.map(genre => 
          <a key={genre.id} href={`/search/movies/genre/${genre.id}`}>
            <p>{genre.name}</p>
          </a>
        )}
        {(searchResult.reviews?.length > 0) &&
        <>
          <h3>Reviews:</h3>
          {searchResult.reviews?.map(review =>
            <ReviewCard
              userProfile={this.props.userProfile}
              review={review}
              handleDeleteReview={this.handleDeleteReview}
              />
              )}
        </>
        }
        {/* Put reviews form here */}
      </>
    );
  }
}
 
export default MovieDetails;