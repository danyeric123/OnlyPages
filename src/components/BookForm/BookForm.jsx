import React, { Component } from 'react'
//this is for what will be rendered on the book card to be pushed to a reading collection-WHERE?
class BookForm extends Component {
  state = {
    formData: {
      id: this.props.book.id,
      title:  this.props.book.title,
      //image: this.props.book.imageLinks.thumbnail,//will need to be sized consistently
      author: this.props.book.authors,//this is in an array!
      //snippet: this.props.book.searchInfo.textSnippet,
      publishedDate: this.props.book.publishedDate
    }
  }

  handleAddBook = e => {
    e.preventDefault()
    this.props.handleAddBook(this.state.formData)
  }

  handleRemoveBook = e => {
    e.preventDefault()
    this.props.handleRemoveBook(this.state.formData.api_id)
  }

  render() { 
    return (
      <>
      {/* this is where they need to be able to add to collection, and from there they add to different reading lists?? */}
        { this.props.userProfile?.book.some(book => book.id === this.state.formData.id) &&
          <button onClick={this.handleRemoveBook}>REMOVE</button>
        }
        { !this.props.userProfile?.Book.some(book => book.id === this.state.formData.id) &&
          <button onClick={this.handleAddBook}>ADD</button>
        }
      </>
    );
  }
}
 
export default BookForm;