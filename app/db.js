const { v4: uuidv4, validate } = require("uuid");
const isValidISBN = require("./validation");
const { ratingSchema } = require("./validations/rating.schema");

const bookId = uuidv4();
const ratings = [
  
];
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
  const book = books[idx];
  const ratingIdx = ratings.findIndex((r) => r.bookId === id);
  console.log(ratingIdx);
  if(ratingIdx === -1){
    const singleBook = {...book, ratings: 0}
    return singleBook;
  }else{
    const rate = ratings[ratingIdx].rating;
    console.log(rate);
    const singleBook = {...book, ratings: rate}
    return singleBook;
  }
};

module.exports = {
  getAllBooks,
  addBook,
  addRating,
  getBook,
};
