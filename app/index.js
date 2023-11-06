const dotenv = require("dotenv");
dotenv.config();

const config = require("./config");

const express = require("express");
const morgan = require("morgan");

const {errorHandler} = require("./middlewares/errorhandler.middleware")
const {notfound} = require("./middlewares/notfound.middleware")

const Joi = require("joi");

const {getAllBooksController, addBookController, addRatingController, 
  getBookController, updateTitleController, updateRatingController,
  getRatingController, deleteRatingController} = require("./controllers/book.controller")
const app = express();

app.use(express.json());
app.use(morgan("dev"));

//READ
app.get("/books", getAllBooksController);

//CREATE
app.post("/books", addBookController);

//CREATE rating
app.post("/books/:id/rating", addRatingController);

//READ - to get one book
app.get("/books/:id", getBookController);

//Update - the book title
app.put("/books/:id", updateTitleController); 

//DELETE - book 
app.delete("/books/:id", )

//updating rating
app.put("/books/:id/rating", updateRatingController);

//Get rating with book
app.get("/rating/:id", getRatingController);

//DELETE -rating
app.delete("/rating/:id", deleteRatingController);

//404 error
app.use(notfound);

//errorHandler
app.use(errorHandler);

//PORT
app.listen(config.appPort, () => {
  console.log(`Server running in the port ${config.appPort}`);
});
