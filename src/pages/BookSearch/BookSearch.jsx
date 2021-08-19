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
      const searchResults = await bookAPI.searchAllBooks(params.query);
      this.setState({ searchResults: searchResults.items});
    } 


  async componentDidUpdate(prevProps) {
    const { params } = this.props.match;
    if (params.query !== prevProps.match.params.query) {
        const searchResults = await bookAPI.searchAllBooks(params.query);
        this.setState({ searchResults: searchResults.items});
      }
  }

  render() {
    return (
      <>
        <h1 className="font-bold text-black-500 text-xl text-center">Book Search Results</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {this.state.searchResults?.map((book) => (
          <>
            <BookCard
              book={book}
              key={book.id}
              userProfile={this.props.userProfile}
              handleAddBook={this.props.handleAddBook}
            />
          </>
        ))}
      </div>
      </>
    );
  }
}


export default BookSearch;