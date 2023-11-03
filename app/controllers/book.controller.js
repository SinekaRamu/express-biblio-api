const { v4: uuidv4 } = require("uuid");

const bookId = uuidv4();
const rating = [
  {
    id: uuidv4(),
    ratng: 5,
    books: bookId,
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

const getAllBooksController = (req, res) => {
  res.send(books);
};

module.exports = { getAllBooksController };
