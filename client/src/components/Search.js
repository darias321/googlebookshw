import axios from "axios";
import React from "react";

const Search = () => {
  const [books, setBooks] = React.useState([]);

  const handleSearch = async (event) => {
    var inputVal = event.target.value;

    const booksData = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputVal}`
    );
    setBooks(booksData.data.items);
  };

  const handleSave = (book) => {
    // make a post with axios to '/api/books'
    // add the book info to the post request
    axios.post("/api/books", {
      title: book.volumeInfo.title,
    });
  };
  console.log(books);
  return (
    <div>
      <div className="input-group flex-nowrap">
        <div className="input-group-prepend">
          <span className="input-group-text" id="addon-wrapping">
            @
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onKeyPress={handleSearch}
        />
      </div>
      {books.map((book) => (
        <div key={book.id}>
          {" "}
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => handleSave(book)}
          >
            Save{" "}
          </button>
          <p>{book.volumeInfo.title}</p>
          <img src={book.volumeInfo.imageLinks?.thumbnail} />{" "}
        </div>
      ))}
    </div>
  );
};

export default Search;
