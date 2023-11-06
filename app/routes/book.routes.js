const express = require("express")
const router = express.Router();

const {
    getAllBooksController, 
    addBookController, 
    addRatingController, 
    getBookController, 
    updateTitleController, 
    updateRatingController,
    } = require("../controllers/book.controller")

//READ
router.get("/books", getAllBooksController);

//CREATE
router.post("/books", addBookController);

//CREATE rating
router.post("/books/:id/rating", addRatingController);

//READ - to get one book
app.get("/books/:id", getBookController);

//Update - the book title
router.put("/books/:id", updateTitleController); 

//DELETE - book 
router.delete("/books/:id", )

//updating rating
router.put("/books/:id/rating", updateRatingController);

module.exports = router;