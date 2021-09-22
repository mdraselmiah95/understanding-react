import React from 'react';

const Books = () => {
    const books=
    return (
        <div>
            {
                books.map(book=><Book name={book.name}></Book>)
            }
        </div>
    );
};

export default Books;