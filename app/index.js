const dotenv = require("dotenv");
dotenv.config();

const config = require("./config");
const express = require("express");
const morgan = require("morgan");

const Joi = require("joi");
const { getAllBooks, addBook, addRating, getBook, updateBookTitle, deleteBook } = require("./db");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//READ
app.get("/books", (req, res) => {
  res.send(getAllBooks());
});

//CREATE
app.post("/books", (req, res, next) => {
  if (!req.body.title || !req.body.isbn) {
    return next({ code: 400, message: "book should have title and isbn" });
  }
  const book = addBook({
    title: req.body.title,
    isbn: req.body.isbn,
  });
  return res.json(book);
});

//CREATE rating
app.post("/books/:id/rating", (req, res) => {
  const ratingSchema = Joi.object({
    rating: Joi.number().min(0).max(5).required(),
  });

  const { value, error } = ratingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      message: error.details.map((d) => d.message),
    });
  }

  const rating = addRating({
    rating: req.body.rating,
    bookId: req.params.id,
  });
  return res.json(rating);
});

//READ - to get one book
app.get("/books/:id", (req, res, next) => {
  const book = getBook({ id: req.params.id });
  if (!book) {
    return next({
      status: 400,
      message: "Book not found",
    });
  }
  res.send(book);
});

//Update - the book title
app.put("/books/:id", (req, res,next)=> {
  const book = updateBookTitle({id: req.params.id, payload: payload});
  if(!book){
    return next({
      status: 400,
      message: "book not found",
    })
  }
  res.send(book);
})

//DELETE - book 
app.delete("/books/:id", (req,res,next) => {
  const book = deleteBook({id: req.params.id});
  if(!book){
    return next({
      status: 400,
      message: "book not found",
    })
  }
  res.send(book)
})

//errorHandler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || ["An unkown error"],
  });
});

//PORT
app.listen(config.appPort, () => {
  console.log(`Server running in the port ${config.appPort}`);
});
