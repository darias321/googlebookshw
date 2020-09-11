import Axios from "axios";
import React from "react";

const Search = () => {
  const [books, setBooks] = React.useState([]);

  const handleSearch = async (event) => {
    var inputVal = event.target.value;

    const booksData = await Axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputVal}`
    );
    setBooks(booksData.data.items);
  };

  const handleSave = (book) => {
    // make a post with axios to '/api/books'
    // add the book info to the post request
    Axios.post("/api/books", {
      title: book.volumeInfo.title,
    });

    const handleView = (book) => {
      Axios.get("/api/books", {
        title: book.volumeInfo.title,
      });
    };
  };
  console.log(books);
  return (
    <div>
      <div className="input-group flex-nowrap">
        <div className="input-group-prepend"></div>
        <input
          type="text"
          className="form-control"
          placeholder="Type book title here"
          onKeyPress={handleSearch}
        />
      </div>
      {books.map((book) => (
        <div className="card m-3" key={book.id}>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="card-body">
              <img src={book.volumeInfo.imageLinks?.thumbnail} />
              <p> Written by: {book.volumeInfo.authors} </p>
              <p> {book.volumeInfo.title}</p>

              <p> {book.volumeInfo.description} </p>
              <p>
                <p>
                  Click for more info:
                  {book.volumeInfo.previewLink}
                </p>
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => handleSave(book)}
                >
                  Save
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => handleSave(book)}
                >
                  View
                </button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
