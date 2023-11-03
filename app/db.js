const { v4: uuidv4, validate } = require("uuid");
const isValidISBN = require("./validation");
const { ratingSchema } = require("./validations/rating.schema");

const bookId = uuidv4();
const ratings = [
  {
    id: uuidv4(),
    ratng: 5,
    bookId: bookId,
  },
];
const books = [
  {
    id: uuidv4(),
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
  const bookId = uuidv4();
  if (isValidISBN(isbn)) {
    const book = {
      bookId,
      title,
      isbn,
    };
    books.push(book);
    return book;
  } else console.log("Invalid ");
};

//add rating for the book
const addRating = ({ rating, bookId }) => {
  const rateId = uuidv4();

  const bookRating = {
    rateId,
    rating,
    bookId,
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
  const bookRating = ratings.filter((r) => r.bookId === id);
  console.log(bookRating);
  const book = books[idx];
  return book;
};

module.exports = {
  getAllBooks,
  addBook,
  addRating,
  getBook,
};
