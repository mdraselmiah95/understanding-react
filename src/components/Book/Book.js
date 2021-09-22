import React from "react";
import "./Book.css";
const Book = (props) => {
  return (
    <div className="Book">
      <h2>Book name: {props.name}</h2>
      <h4>Author name: {props.author}</h4>
    </div>
  );
};

export default Book;
