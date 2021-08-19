import React, { Component } from "react";
import * as bookAPI from "../../services/bookService";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import BookForm from "../../components/BookForm/BookForm";
import * as reviewsAPI from "../../services/reviewService";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import { FaBook } from "react-icons/fa";
// import { FaAngleLeft } from "react-icons/fa";
// import { FaAngleRight } from "react-icons/fa";
import moment from "moment";

class BookDetails extends Component {
  state = {
    searchResult: {},
    reviews: [],
  };

  async componentDidMount() {
    const searchResult = await bookAPI.searchOneBook(this.props.match.params.id)
    console.log(searchResult)
    let reviews = await reviewsAPI.getReviews(this.props.match.params.id)
    this.setState({searchResult,reviews})
  }

  /*
   * How might we deal with the reviews?
   */
  handleAddReview = async (review) => {
    const newReview = await reviewsAPI.addReview(review);
    const reviews = [...this.state.reviews, newReview];
    this.setState({ reviews });
  };

  handleDeleteReview = async id => {
    let deletedReview = await reviewsAPI.deleteReview(id)
    const reviews = this.state.reviews.filter(review => review._id != deletedReview._id)
    this.setState({ reviews })
  }

  render() {
    const { searchResult, reviews } = this.state;
    return (
      <>
        <div>*************</div>
        <h1>Book Details</h1>
        <div>*************</div>
        <section>
          {searchResult.volumeInfo?.imageLinks ? (
            <img
              src={searchResult.volumeInfo?.imageLinks?.thumbnail}
              alt={searchResult?.volumeInfo?.title}
            />
          ) : (
            <FaBook size={70} />
          )}
          <br />
        </section>
        <section>
          <h3>{searchResult.volumeInfo?.title}</h3>
          {searchResult.volumeInfo?.subtitle && (
            <p>Subtitle: {searchResult.volumeInfo?.subtitle}</p>
          )}
          {/* {searchResult.volumeInfo?.subtitle ? <p>Subtitle: {searchResult.volumeInfo?.subtitle}</p> : <p></p> } */}
          <h3>
            Author(s):{" "}
            {searchResult.volumeInfo?.authors
              ? searchResult.volumeInfo?.authors.join(" ,")
              : "N/A"}
          </h3>
        </section>
        <section>
          <span>Description: </span>
          {searchResult.volumeInfo?.description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: searchResult?.volumeInfo?.description,
              }}
            />
          ) : (
            "N/A"
          )}
          {searchResult.volumeInfo?.publisher && (
            <p>Publisher: {searchResult.volumeInfo?.publisher}</p>
          )}
          {searchResult.volumeInfo?.publishedDate && (
            <p>
              PublishedDate:{" "}
              {moment(searchResult.volumeInfo?.publishedDate).format(
                "MMMM Do, YYYY"
              )}
            </p>
          )}
          {searchResult.volumeInfo?.maturityRating && (
            <p>Maturity Rating: {searchResult.volumeInfo?.maturityRating}</p>
          )}
          {searchResult.volumeInfo?.pageCount && (
            <p>PageCount: {searchResult.volumeInfo?.pageCount} pages</p>
          )}
        </section>
        <div>*************</div>
        <section>
          <p>
            If you would like to add this book to your personal library, first
            select which collection type.
          </p>
          {searchResult.volumeInfo?.title /*  */ && (
            <BookForm
              book={searchResult}
              userProfile={this.props.userProfile}
              handleAddBook={this.props.handleAddBook}
            />
          )}
        </section>

        <div>*************</div>
        <div className="w-full px-4">
          {/* Put reviews form here */}
          <h3 class="font-medium tracking-tight">Review this item</h3>
          <p className="text-gray-700 text-sm py-1">Leave a review!</p>
          {/* <ReviewForm
              userProfile={this.props.userProfile}
              handleAddReview={this.handleAddReview}
              /> */}
          {this.props.userProfile?.read.some(book=>book.api_id==searchResult.id)&&
          <ReviewForm book={searchResult} handleAddReview={this.handleAddReview} />
        }
      </div>
        <strong>{reviews.length == 0 && "No Reviews"}</strong>
        {(reviews?.length > 0) &&
        <section className="flex items-center mt-1">
          <h3>Reviews:</h3>
          {reviews?.map((review) => (
            <ReviewCard
              userProfile={this.props.userProfile}
              fetchedReview={review}
              handleDeleteReview={this.handleDeleteReview}
              />
              ))}
        </section>
        }
       
      </>
    );
  }
}

export default BookDetails;
