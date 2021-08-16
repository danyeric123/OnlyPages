import React, { Component } from 'react'
import * as bookAPI from '../../services/bookService'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import BookForm from '../../components/BookForm/BookForm'
import * as reviewsAPI from '../../services/reviewService'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import BookCard from '../../components/BookCard/BookCard'
import { FaBook } from "react-icons/fa";

//this is for when a user clicks on a book card details button
class BookDetails extends Component {
  state = {
    searchResult: {},
    reviews:[]
  }

  async componentDidMount() {
    const searchResult = await bookAPI.searchOneBook(this.props.match.params.id)
    const reviews = await reviewsAPI.getReviews(this.props.match.params.id)
    this.setState({searchResult,reviews})
    console.log(searchResult)
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
    const { searchResult,reviews } = this.state 
    return (
      <>
      {searchResult.volumeInfo?.imageLinks?
        <img
          src={searchResult.volumeInfo?.imageLinks.thumbnail}
          alt={searchResult?.volumeInfo?.title} 
        />:
        <FaBook size={70} />
      }
        <h1>{searchResult.volumeInfo?.title}</h1>
        <h3>{searchResult.volumeInfo?.authors?.join(" ,")}</h3>
        <div dangerouslySetInnerHTML={{__html:searchResult?.volumeInfo?.description}} />
        <br />
        <br />
        {searchResult?.volumeInfo?.title
            &&
          <BookForm
            book={searchResult}
            userProfile={this.props.userProfile}
            handleAddBook={this.props.handleAddBook}
          />  
        }
        {searchResult?.categories?.map(category => 
          <a key={category} href={`/books/category/${category}`}>
            <p>{category}</p>
          </a>
        )}
        {(reviews?.length > 0) &&
        <>
          <h3>Reviews:</h3>
          {reviews?.map(review =>
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
 
export default BookDetails;