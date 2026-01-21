const Joi = require("joi");

const listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null).optional(),
  }).required()
});

// Changed to match your flat form: xyz and reviewcomment
const reviewSchema = Joi.object({
  rating: Joi.number().required().min(1).max(5),           // rating field
  reviewcomment: Joi.string().required(),                // comment field
}).required();

module.exports = { listingSchema, reviewSchema };