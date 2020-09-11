import Axios from "axios";
import React from "react";

const Saved = () => {
  const [books, savedBooks] = React.useState([]);

  React.useEffect(async () => {
    Axios.get;

    // make the axios get request to '/api/books'
    // add the book to your book state
  }, []);
  return <div></div>;
};

export default Saved;
