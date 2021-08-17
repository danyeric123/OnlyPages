import React from "react";
import moment from "moment";
import BookForm from "../BookForm/BookForm";
import { FaBook } from "react-icons/fa";

//this is what will be rendered to the book search page as a card component
const BookCard = ({ book, userProfile, handleAddBook, handleRemoveBook }) => {
  let id = book.id;
  book = book.volumeInfo;
  book.id = id;

  return (
    <>
      <section>
   {/*      <a href={`/books/${id}`}>
          {book.imageLinks ? (
            <img
              src={`${book.imageLinks?.thumbnail}`}
              alt={`${book.title} front cover`}
            />
          ) : (
            <FaBook size={70} />
          )}
        </a> */}
        
          {book.imageLinks ? (
            <img
              src={`${book.imageLinks?.thumbnail}`}
              alt={`${book.title} front cover`}
            />
          ) : (
            <FaBook size={70} />
          )}
      
      </section>
      <section>
       {/*  <a href={`/books/${id}`}>
          <h1>{book.title}</h1>
        </a> */}
        
          <h1>{book.title}</h1>

        {/*  <p>
        Subtitle: {book.subtitle ? <p>Subtitle: {book.subtitle}</p> : "N/A"}
      </p> */}
        <p>Subtitle: {book.subtitle && <p>Subtitle: {book.subtitle}</p>}</p>
        <p>Author(s): {book.authors ? book.authors.join(", ") : "N/A"}</p>
        <p>
          Published Date: {moment(book.publishedDate).format("MMMM Do, YYYY")}
        </p>
        {/* {book.description} */}
        <p>Description: {book.description ? book.description : "N/A"}</p>
      </section>
      <section>
      <a href={`/books/${id}`}>
          <button>More Info</button>
        </a>
        <br />
        <br />
        <BookForm
          book={book}
          userProfile={userProfile}
          handleAddBook={handleAddBook}
          handleRemoveBook={handleRemoveBook}
        />
      </section>
    </>
  );
};

export default BookCard;
