const { v4: uuidv4} = require("uuid");
const isValidISBN = require("./validation");

const ratings = [];
const books = [
  {
    id: 1234,
    title: "Storywallah",
    isbn: "0143445774",
  },
  {
    id: uuidv4(),
    title: "The Gold Crew",
    isbn: "0446512028",
  },
];

//get all books in the api
const getAllBooks = () => books;

//Adding new book
const addBook = ({ title, isbn }) => {
  const id = uuidv4();
  if (isValidISBN(isbn)) {
    const book = {
      id,
      title,
      isbn,
    };
    books.push(book);
    return book;
  } else return null;
};

//add rating for the book
const addRating = ({ rating, bookId }) => {
  const rateId = uuidv4();
  const ratingIdx = ratings.findIndex((r) => r.book == bookId);
  if (ratingIdx != -1) return null;
  const bookRating = {
    rateId,
    rating,
    book: bookId,
  };
  ratings.push(bookRating);
  return bookRating;
};

//get a single book with rating
const getBook = ({ id }) => {
  const idx = books.findIndex((b) => b.id == id);
  if (idx === -1) {
    return null;
  }
  const book = books[idx];
  const ratingIdx = ratings.findIndex((r) => r.book == id);
  if (ratingIdx === -1) {
    let singleBook = { ...book, rating: 0 };
    return singleBook;
  } else {
    const rate = ratings[ratingIdx].rating;
    let singleBook = { ...book, rating: rate };
    return singleBook;
  }
};

//updating book title
const updateBookTitle = ({ id, title }) => {
  const idx = books.findIndex((b) => b.id == id);
  if (idx == -1) {
    return null;
  }

  title && (books[idx]["title"] = title);
  return books[idx];
};

//deleting the movie
const deleteBook = ({ id }) => {
  const idx = books.findIndex((b) => b.id == id);
  if (idx === -1) {
    return null;
  }
  const book = books[idx];
  books.splice(idx, 1);
  return book;
};

//updating single book with rating
const updateRating = ({ bookId, rating }) => {
  const idx = ratings.findIndex((r) => r.book == bookId);
  if (idx == -1) {
    return null;
  }

  rating && (ratings[idx]["rating"] = rating);
  return ratings[idx];
};
//read rating with corresponding book
const getRating = ({ id }) => {
  const idx = ratings.findIndex((r) => r.rateId == id);
  if (idx == -1) return null;
  const rate = ratings[idx];
  const bookId = ratings[idx]["book"];
  const bookIdx = books.findIndex((b) => b.id == bookId);
  let ratedBook = { ...rate, book: books[bookIdx] };
  return ratedBook;
};
//Deleting the rating
const deleteRating = ({ id }) => {
  const idx = ratings.findIndex((r) => r.rateId == id);
  if (idx == -1) return null;
  const deleteRate = ratings[idx];
  ratings.splice(idx, 1);
  return deleteRate;
};

module.exports = {
  getAllBooks,
  addBook,
  addRating,
  getBook,
  updateBookTitle,
  deleteBook,
  updateRating,
  getRating,
  deleteRating
};
