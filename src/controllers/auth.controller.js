const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const userService = require("../services/user.service");

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  const existing = userService.findUserByEmail(email);
  if (existing) {
    return res.status(409).json({ message: "Email already registered" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    id: Date.now(),
    username,
    email,
    passwordHash,
    createdAt: new Date()
  };

  userService.createUser(user);

  res.status(201).json({
    message: "User registered",
    user: {
      id: user.id,
      username: user.username,
      email: user.email
    }
  });
};
