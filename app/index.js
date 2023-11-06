const dotenv = require("dotenv");
dotenv.config();

const config = require("./config");

const express = require("express");
const morgan = require("morgan");

const {errorHandler} = require("./middlewares/errorhandler.middleware")
const {notfound} = require("./middlewares/notfound.middleware")

//routers
const bookRouter = require("./routes/book.routes")
const rateRouter = require("./routes/rating.routes")

const app = express();

app.use(express.json());
app.use(morgan("dev"));

//Book router
app.use("/books", bookRouter);

//rating router
app.use("/rating", rateRouter)

//404 error
app.use(notfound);

//errorHandler
app.use(errorHandler);

//PORT
app.listen(config.appPort, () => {
  console.log(`Server running in the port ${config.appPort}`);
});
