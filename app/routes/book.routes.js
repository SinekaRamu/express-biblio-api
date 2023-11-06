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
router.get("/", getAllBooksController);

//CREATE
router.post("/", addBookController);

//CREATE rating
router.post("/:id/rating", addRatingController);

//READ - to get one book
router.get("/:id", getBookController);

//Update - the book title
router.put("/:id", updateTitleController); 

//DELETE - book 
router.delete("/:id", )

//updating rating
router.put("/:id/rating", updateRatingController);

module.exports = router;