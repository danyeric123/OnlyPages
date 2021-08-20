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
    const searchResult = await bookAPI.searchOneBook(
      this.props.match.params.id
    );
    console.log(searchResult);
    let reviews = await reviewsAPI.getReviews(this.props.match.params.id);
    this.setState({ searchResult, reviews });
  }

  /*
   * How might we deal with the reviews?
   */
  handleAddReview = async (review) => {
    const newReview = await reviewsAPI.addReview(review);
    const reviews = [...this.state.reviews, newReview];
    this.setState({ reviews });
  };

  handleDeleteReview = async (id) => {
    let deletedReview = await reviewsAPI.deleteReview(id);
    const reviews = this.state.reviews.filter(
      (review) => review._id != deletedReview._id
    );
    this.setState({ reviews });
  };

  render() {
    const { searchResult, reviews } = this.state;
    return (
      <>
        <h1 className="font-bold text-black-500 text-3xl text-center">
          Book Details
        </h1>
        <div className="md:p-8 p-2 h-90 border-transparent bg-blue-100 shadow-xl mx-2 my-2 w-full ">
          {searchResult.volumeInfo?.imageLinks ? (
            <img
              src={searchResult.volumeInfo?.imageLinks?.thumbnail}
              alt={searchResult?.volumeInfo?.title}
              className="flex justify-center card__media  w-screen md:w-full object-contain h-60 w-full"
            />
          ) : (
            <FaBook
              size={70}
              className="flex justify-center card__media  w-screen md:w-full object-contain h-60 w-full"
            />
          )}
          <section>
            <h3 className="p-1">{searchResult.volumeInfo?.title}</h3>
            {searchResult.volumeInfo?.subtitle && (
              <p className="p-1">
                Subtitle: {searchResult.volumeInfo?.subtitle}
              </p>
            )}
            {/* {searchResult.volumeInfo?.subtitle ? <p>Subtitle: {searchResult.volumeInfo?.subtitle}</p> : <p></p> } */}
            <h3 className="p-1">
              Author(s):{" "}
              {searchResult.volumeInfo?.authors
                ? searchResult.volumeInfo?.authors.join(" ,")
                : "N/A"}
            </h3>
          </section>
          <section>
            <span className="p-1">Description: </span>
            {searchResult.volumeInfo?.description ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: searchResult?.volumeInfo?.description,
                }}
                className="p-2 my-2 object-contain overflow-auto h-48 border border-black-600"
              />
            ) : (
              "N/A"
            )}
            {searchResult.volumeInfo?.publisher && (
              <p className="p-1">
                Publisher: {searchResult.volumeInfo?.publisher}
              </p>
            )}
            {searchResult.volumeInfo?.publishedDate && (
              <p className="p-1">
                PublishedDate:{" "}
                {moment(searchResult.volumeInfo?.publishedDate).format(
                  "MMMM Do, YYYY"
                )}
              </p>
            )}
            {searchResult.volumeInfo?.maturityRating && (
              <p className="p-1">
                Maturity Rating: {searchResult.volumeInfo?.maturityRating}
              </p>
            )}
            {searchResult.volumeInfo?.pageCount && (
              <p className="p-1">
                PageCount: {searchResult.volumeInfo?.pageCount} pages
              </p>
            )}
          </section>
          <section className="my-3 px-2">
            {searchResult.volumeInfo?.title /*  */ && (
              <BookForm
                book={searchResult}
                userProfile={this.props.userProfile}
                handleAddBook={this.props.handleAddBook}
              />
            )}
          </section>
        </div>
        <div className="md:p-8 p-2 h-90 border-transparent shadow-xl mx-2 my-2 w-full">
          {this.props.userProfile?.read.some(
            (book) => book.api_id == searchResult.id
          ) && (
            <ReviewForm
              book={searchResult}
              handleAddReview={this.handleAddReview}
            />
          )}
        </div>

        {/* <div className="md:p-8 p-2 h-90 border-transparent bg-blue-100 shadow-xl mx-2 my-2 w-full"> */}

        <h1 className="font-bold text-black-500 text-3xl text-center">Reviews</h1>
          <strong>{reviews.length == 0 && "No Reviews"}</strong>

          {reviews?.length > 0 && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {reviews?.map((review) => (
                <ReviewCard
                userProfile={this.props.userProfile}
                fetchedReview={review}
                handleDeleteReview={this.handleDeleteReview}
                />
                ))}
            </section>
          )}

      </>
    );
  }
}

export default BookDetails;
