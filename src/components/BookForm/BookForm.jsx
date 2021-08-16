import React, { Component } from "react";
//import MenuButton from '../MenuButton/MenuButton'
//this is for what will be rendered on the book card to be pushed to a reading collection-WHERE?
class BookForm extends Component {
  state = {
    formData: {
      api_id: this.props.book.id,
      title: this.props.book.title,
      coverImage: this.props.book.imageLinks?.thumbnail, //will need to be sized consistently
      authors: this.props.book.authors,
      publish: this.props.book.publishedDate,
      categories: this.props.book.categories,
    },
    collection: ''
  };

  handleSelect=(e)=>{
    e.preventDefault();
    console.log(e.target.value)
    this.setState({collection: e.target.value})
  }

  handleAddBook = (e) => {
    e.preventDefault();
    this.props.handleAddBook(this.state.formData, this.state.collection);
  };



  render() {
    return (
      <>
      <select onChange={this.handleSelect}>
          {this.props.userProfile?.read.every(book=>book?.api_id !== this.state.formData.api_id)&&<option value="read">READ</option>}
          {this.props.userProfile?.wantToRead.every(book=>book?.api_id !== this.state.formData.api_id)&&<option value="wantToRead">WANT TO READ</option>}
          {this.props.userProfile?.currentlyReading.every(book=>book?.api_id !== this.state.formData.api_id)&&<option value="currentlyReading">
            CURRENTLY READING
          </option>}
        </select>
      
        <button onClick={this.handleAddBook}>ADD BOOK TO COLLECTION</button>
         <br />
        <br />
        
      </>
    );
  }
}

export default BookForm;
