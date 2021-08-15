import React, { Component } from "react";
/* *********************************************** */
import * as bookAPI from "../../services/bookService";
/* *********************************************** */
import BookCard from "../../components/BookCard/BookCard";


//this is what is rendered after a book search
class BookSearch extends Component {
  state = {
    searchResults: [],
  };

  async componentDidMount() {
    const { params } = this.props.match;
      const searchResults = await bookAPI.search(params.query);
      this.setState({ searchResults: searchResults.items });
    } 


  async componentDidUpdate(prevProps) {
    const { params } = this.props.match;
    if (params.query !== prevProps.match.params.query) {
        const searchResults = await bookAPI.search(params.query);
        this.setState({ searchResults: searchResults.items});
      }
  }

  render() {
    return (
      <>
        <h1>Book Search Results</h1>
        {this.state.searchResults?.map((book) => (
          <>
            <BookCard
              book={book}
              key={book.id}
              userProfile={this.props.userProfile}
              handleAddBook={this.props.handleAddBook}
              handleRemoveBook={this.props.handleRemoveBook}
            />
          </>
        ))}
      </>
    );
  }
}


export default BookSearch;