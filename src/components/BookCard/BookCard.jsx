import React from "react";
import moment from "moment";
import BookForm from "../BookForm/BookForm";


//this is what will be rendered to the book search page as a card component
const BookCard = ({
  book,
  userProfile,
  handleAddBook,
  handleRemoveBook
}) => {
  return (
    <>
      <a href={`/books/${book.id}`}>
        <img
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
          alt={`${book.volumeInfo.title} front cover`}
        />
      </a>
      <a href={`/books/${book.id}`}>
        <h1>{book.volumeInfo.title}</h1>
      </a>
      {/* add ternary to only show subtitle if there is one */}
      <p>Subtitle: {book.volumeInfo.subtitle}</p>
      <p>Snippet: {book.searchInfo.textSnippet}</p>
      <p>Author(s): {book.volumeInfo.authors}</p>
      <p>Published Date: {moment(book.publishedDate).format("MMMM Do, YYYY")}</p>
      <BookForm
        book={book}
        userProfile={userProfile}
        handleAddBook={handleAddBook}
        handleRemoveBook={handleRemoveBook}
      />
      <br />
      <br />
    </>
  );
};

export default BookCard;