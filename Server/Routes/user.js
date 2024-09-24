import express from "express";
import User from "../Models/user.js";
const router = express.Router();
import jwt from "jsonwebtoken";

// Signup route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    const token = jwt.sign({ id: user._id, email: user.email }, "secret", {
      expiresIn: "5h",
    });
    console.log(
      "Successfully came to user route. Heres the generated token: ",
      token
    );
    res.status(201).json({ user: user.username, token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, "secret", {
      expiresIn: "5h",
    });

    res.status(201).json({ user: user.username, token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
