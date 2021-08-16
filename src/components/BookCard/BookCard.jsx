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
  let id = book.id
  book = book.volumeInfo
  book.id = id
  return (
    <>
      <a href={`/books/${book.id}`}>
        <h1>{book.title}</h1>
        <img
          src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
          alt={`${book.title} front cover`}
        />
      </a>
      {book.description}
      <p>Published Date: {moment(book.publishedDate).format("MMMM Do, YYYY")}</p>
      <BookForm
        book={book}
        userProfile={userProfile}
        handleAddBook={handleAddBook}
        handleRemoveBook={handleRemoveBook}
      />
    </>
  );
};

export default BookCard;