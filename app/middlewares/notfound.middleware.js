const notfound = (req, res, next) => {
    next({
        status: 400,
        message: "book resource not found",
    });
}

module.exports = {notfound}