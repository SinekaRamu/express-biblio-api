const Joi = require("joi")

const bookSchema = Joi.object({
    title: Joi.string().required(),
    isbn: Joi.number().required()
})

module.exports = {
    bookSchema
}