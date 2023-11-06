const express = require("express")
const router = express.Router();

const {
    getRatingController, 
    deleteRatingController
} = require("../controllers/book.controller")

//Get rating with book
router.get("/:id", getRatingController);

//DELETE -rating
router.delete("/:id", deleteRatingController);

module.exports = router;