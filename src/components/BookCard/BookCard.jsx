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
  // console.log(book)
  return (
    <>
      <a href={`/books/${id}`}>
        <img
          src={`http://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
          alt={`${book.title} front cover`}
        />
      </a>
      <a href={`/books/${id}`}>
        <h1>{book.title}</h1>
      </a>
      {book.subtitle && <p>Subtitle: {book.subtitle}</p>}
      <p>Author(s): {book.authors}</p>
      <p>Published Date: {moment(book.publishedDate).format("MMMM Do, YYYY")}</p>
      {book.description}
      <br />
        <br />
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