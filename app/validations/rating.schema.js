const Joi = require("joi");

const ratingSchema = Joi.object({
  rating: Joi.number().min(0).max(5).required(),
});

module.exports = {
  ratingSchema,
};
