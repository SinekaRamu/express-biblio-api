const {
    getAllBooks, 
    addBook, 
    addRating, 
    getBook, 
    updateBookTitle,
    deleteBook,
    updateRating,
    getRating,
    deleteRating
} = require("../db")

const getAllBooksController = (req, res) => {
    const books = getAllBooks();
    res.send(books);
}

const addBookController = (req, res, next) => {
    if (!req.body.title || !req.body.isbn) {
      return next({ code: 400, message: "book should have title and isbn" });
    }
    const book = addBook({
      title: req.body.title,
      isbn: req.body.isbn,
    });
    return res.json(book);
}

const addRatingController = (req, res) => {
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
  }

const getBookController = (req, res, next) => {
    const book = getBook({ id: req.params.id });
    if (!book) {
      return next({
        status: 400,
        message: "Book not found",
      });
    }
    res.send(book);
  }

const updateTitleController = (req, res,next)=> {
    const book = updateBookTitle({id: req.params.id, title: req.body.title});
    if(!book){
      return next({
        status: 400,
        message: "book not found",
      })
    }
    res.send(book);
  }

const deleteBookController = (req,res,next) => {
    const book = deleteBook({id: req.params.id});
    if(!book){
      return next({
        status: 400,
        message: "book not found",
      })
    }
    res.send(book)
  }

const updateRatingController = (req, res, next) => {
    const ratingSchema = Joi.object({
      rating: Joi.number().min(0).max(5).required(),
    });
  
    const { value, error } = ratingSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details.map((d) => d.message),
      });
    }
  
    const rating = updateRating({
      rating: req.body.rating,
      bookId: req.params.id,
    });
    if(!rating){
      return next({
        status: 400,
        message: "no rating found for the book"
      })
    }
    return res.json(rating);
  }

const getRatingController = (req, res, next) => {
    const ratedBook = getRating({ id: req.params.id });
    if (!ratedBook) {
      return next({
        status: 400,
        message: "rating not found",
      });
    }
    res.send(ratedBook);
  }

const deleteRatingController = (req, res, next) => {
    const rate = deleteRating({ id: req.params.id });
    if (!rate) {
      return next({
        status: 400,
        message: "rating not found",
      });
    }
    res.send(rate);
  }
  
module.exports = {
    getAllBooksController,
    addBookController,
    addRatingController,
    getBookController,
    updateTitleController,
    deleteBookController,
    updateRatingController,
    getRatingController,
    deleteRatingController
}