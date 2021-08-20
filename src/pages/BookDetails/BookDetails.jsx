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
      this.props.userProfile&&
      <div className="grid justify-items-center ">
        <hr/>
        <h1 className="font-extrabold text-3xl">Book Details</h1>
        <hr/>
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
        <section className="p-8 rounded-3xl border-4 border-opacity-60 border-blue-500">
          <h3 className="font-extrabold text-2xl" >{searchResult.volumeInfo?.title}</h3>
          {searchResult.volumeInfo?.subtitle && (
            <p>Subtitle: {searchResult.volumeInfo?.subtitle}</p>
          )}
          {/* {searchResult.volumeInfo?.subtitle ? <p>Subtitle: {searchResult.volumeInfo?.subtitle}</p> : <p></p> } */}
          <h3>
            <span className="font-bold underline">Author(s):</span>{" "}
            {searchResult.volumeInfo?.authors
              ? searchResult.volumeInfo?.authors.join(" ,")
              : "N/A"}
          </h3>
        </section>
        <section className="p-8 mx-16 my-6 rounded-3xl border-4 border-opacity-60 border-blue-500">
          <span className="font-bold underline">Description: </span>
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
        <hr/>
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

        <hr/>
        <section>
          {this.props.userProfile?.read.some(book=>book.api_id==searchResult.id)&&
          <ReviewForm book={searchResult} handleAddReview={this.handleAddReview} />
        }
      </section>
        <strong>{reviews.length == 0 && "No Reviews"}</strong>
        {(reviews?.length > 0) &&
        <section>
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
       
      </div>
    );
  }
}

export default BookDetails;
