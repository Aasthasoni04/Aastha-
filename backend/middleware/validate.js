const { body, validationResult } = require("express-validator");

const validateProduct = [
  body("name").notEmpty().withMessage("Name required"),
  body("price").isNumeric().withMessage("Price must be number"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateProduct;
