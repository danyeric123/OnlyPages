import React, { Component } from 'react'
//this is for what will be rendered on the book card to be pushed to a reading collection-WHERE?
class BookForm extends Component {
  state = {
    formData: {
      api_id: this.props.book.id,
      title:  this.props.book.title,
      coverImage: this.props.book.imageLinks?.thumbnail,//will need to be sized consistently
      authors: this.props.book.authors,
      //snippet: this.props.book.searchInfo.textSnippet,
      publish: this.props.book.publishedDate,
      categories: this.props.book.categories
    }
  }

  handleAddBook = e => {
    e.preventDefault()
    this.props.handleAddBook(this.state.formData,"read")
  }

  handleRemoveBook = e => {
    e.preventDefault()
    this.props.handleRemoveBook(this.state.formData.api_id,"read")
  }

  render() { 
    return (
      <>
      {/* this is where they need to be able to add to collection, and from there they add to different reading lists?? */}
        { this.props.userProfile?.read.some(book => book.api_id === this.state.formData.api_id) &&
          <button onClick={this.handleRemoveBook}>REMOVE</button>
        }
        { !this.props.userProfile?.read.some(book => book.api_id === this.state.formData.api_id) &&
          <button onClick={this.handleAddBook}>ADD</button>
        }
      </>
    );
  }
}
 
export default BookForm;