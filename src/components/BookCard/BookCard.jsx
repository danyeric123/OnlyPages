import React from "react";
import moment from "moment";
import BookForm from "../BookForm/BookForm";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


//this is what will be rendered to the book search page as a card component
const BookCard = ({ book, userProfile, handleAddBook, handleRemoveBook }) => {
  let id = book.id;
  book = book.volumeInfo;
  book.id = id;

  return (
    <div className="md:p-8 p-2 rounded-lg bg-white border border-green-500 mx-2 my-2 md:w-full">
      <section className="border border-purple-500 p-2">
        {book.imageLinks ? (
          <img
            src={`${book.imageLinks?.thumbnail}`}
            alt={`${book.title} front cover`}
            className=" border border-indigo-500  w-screen md:w-full lg:w-full"
          />
        ) : (
          <FaBook size={70} />
        )}
      </section>

      <section className="border border-purple-500 p-2">
        {/*  <a href={`/books/${id}`}>
          <h1>{book.title}</h1>
        </a> */}

        <h1>{book.title}</h1>

        {/*  <p>
        Subtitle: {book.subtitle ? <p>Subtitle: {book.subtitle}</p> : "N/A"}
      </p> */}
        <p>{book.subtitle && <p>Subtitle: {book.subtitle}</p>}</p>
        <p>Author(s): {book.authors ? book.authors.join(", ") : "N/A"}</p>
        <p>
          Published Date: {moment(book.publishedDate).format("MMMM Do, YYYY")}
        </p>
        {/* {book.description} */}
        <p>Description: {book.description ? book.description : "N/A"}</p>
        <Link to={`/books/${id}`}>
          <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">More Details</button>
        </Link>
      </section>
      <section className="border border-red-500 my-1">
        <BookForm
          book={book}
          userProfile={userProfile}
          handleAddBook={handleAddBook}
        />
      </section>
    </div>
  );
};

export default BookCard;
