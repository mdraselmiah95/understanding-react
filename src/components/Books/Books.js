import React from "react";
import Book from "../Book/Book";

const Books = (props) => {
  const books = props.books;
  return (
    <div>
      {books.map((book) => (
        <Book key={book.name} name={book.name} author={book.author}></Book>
      ))}
    </div>
  );
};

/* 
1. JSX
2. Component
3. Props
4. Event handle
5. State
6. UseEffect


*/

export default Books;
