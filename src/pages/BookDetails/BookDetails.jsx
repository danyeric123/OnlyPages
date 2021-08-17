import React, { Component } from "react";
import * as bookAPI from "../../services/bookService";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import BookForm from "../../components/BookForm/BookForm";
import * as reviewsAPI from "../../services/reviewService";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import BookCard from "../../components/BookCard/BookCard";
import { FaBook } from "react-icons/fa";

//this is for when a user clicks on a book card details button
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
    const reviews = await reviewsAPI.getReviews(this.props.match.params.id);
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
    const deletedReview = await reviewsAPI.deleteReview(id);
    const reviewIdx = this.state.reviews.findIndex(
      (review) => review._id === deletedReview._id
    );
    const reviews = [...this.state.reviews];
    reviews.splice(reviewIdx, 1);
    this.setState({ reviews });
  };

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
          <h3>Author(s): {searchResult.volumeInfo?.authors ? searchResult.volumeInfo?.authors.join(" ,") : "N/A"}</h3>
        </section>
        <section>
          <span>Description: </span>
          {searchResult.volumeInfo?.description ? 
          <div
            dangerouslySetInnerHTML={{
              __html: searchResult?.volumeInfo?.description
            }}
           /> : "N/A"}
          {searchResult.volumeInfo?.publisher && (
          <p>Publisher: {searchResult.volumeInfo?.publisher}</p>
          )}
          {searchResult.volumeInfo?.publishedDate && (
          <p>PublishedDate: {searchResult.volumeInfo?.publishedDate}</p>
          )}
          {searchResult.volumeInfo?.maturityRating && (
          <p>Maturity Rating: {searchResult.volumeInfo?.maturityRating}</p>
          )}
          {searchResult.volumeInfo?.pageCount && (
          <p>PageCount: {searchResult.volumeInfo?.pageCount}</p>
          )}
        </section>
       {/*  <section>
          *************
          <p>Categories To Search For Similar Books</p>
          <ul>
            {searchResult.volumeInfo?.categories?.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </section> */}
        <div>*************</div>
        <p>
          If you would like to add this book to your personal library, please
          first select which collection type.
        </p>
        {searchResult.volumeInfo?.title /*  */ && (
          <BookForm
            book={searchResult}
            userProfile={this.props.userProfile}
            handleAddBook={this.props.handleAddBook}
          />
        )}
        

        <div>*************</div>
        {reviews?.length > 0 && (
          <div>
            <h3>Reviews:</h3>
            {reviews?.map((review) => (
              <ReviewCard
                userProfile={this.props.userProfile}
                review={review}
                handleDeleteReview={this.handleDeleteReview}
              />
            ))}
          </div>
        )}
        {/* Put reviews form here */}
      </>
    );
  }
}

export default BookDetails;
