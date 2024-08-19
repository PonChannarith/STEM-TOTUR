// BookList.js
import React from "react";
import BookAllCard from "../../components/bookAllCard/BookAllCard";

const BookList = ({ books }) => {
  return (
    <section
      id="Projects"
      className="p-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5"
    >
      {books.map((book, index) => (
        <section key={index}>
          <BookAllCard book={book} />
        </section>
      ))}
    </section>
  );
};

export default BookList;
