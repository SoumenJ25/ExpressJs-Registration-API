const { body } = require("express-validator");

exports.registerValidator = [
  body("username").trim().isLength({ min: 2 }).withMessage('Username must be at least 2 characters'),
  body('email')
    .isEmail().withMessage('Invalid email address')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters')
    .matches(/\d/).withMessage('Password must contain a number')
    .matches(/[A-Z]/).withMessage('Password must contain an uppercase letter')
];
