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
    <div className="md:p-8 p-2 rounded-lg bg-white border mx-2 my-2 md:w-full">
      {/* <section className="border border border-red-500 p-2"> */}
        {book.imageLinks ? (
          <img
            src={`${book.imageLinks?.thumbnail}`}
            alt={`${book.title} front cover`}
            className="my-2 w-screen md:w-full lg:w-full"
          />
        ) : (
          <FaBook size={70} />
        )}
      {/* </section> */}

      <section className="p-2 text-black-500 text-center">
        {/*  <a href={`/books/${id}`}>
          <h1>{book.title}</h1>
        </a> */}

        <h1 className="font-bold text-black-500 text-xl text-center">{book.title}</h1>

        {/*  <p>
        Subtitle: {book.subtitle ? <p>Subtitle: {book.subtitle}</p> : "N/A"}
      </p> */}
        <p className="p-2">{book.subtitle && <p className="p-2">Subtitle: {book.subtitle}</p>}</p>
        <p className="p-2">Author(s): {book.authors ? book.authors.join(", ") : "N/A"}</p>
        <p className="p-2">
          Published Date: {moment(book.publishedDate).format("MMMM Do, YYYY")}
        </p>
        {/* {book.description} */}
        <p className="p-2">Description: {book.description ? book.description : "N/A"}</p>
        <Link to={`/books/${id}`}>
          <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">READ MORE</button>
        </Link>
      </section>

      <section className="my-1 p-2">
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
