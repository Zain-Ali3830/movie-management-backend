import { pool } from "../database/index.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
// Controller for user signup
export const signup = async (req, res) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedConfirmPassword = await bcrypt.hash(confirmPassword, 10);
    const userExists = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (userExists.rows[0]) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await pool.query(
      "INSERT INTO users (userName,email,password,confirmPassword) VALUES ($1,$2,$3,$4) RETURNING *",
      [userName, email, hashedPassword, hashedConfirmPassword]
    );
    res.json(newUser.rows[0]);
    console.log(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controller for user login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );
    console.log(user.rows[0]);
    if (!user.rows[0]) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    if (!(bcrypt.compare(password, user.rows[0].password))) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    else{
      const token=jwt.sign({ id: user.rows[0].id }, process.env.SECRET, { expiresIn: '1h' });
      res.json({ token , user: user.rows[0] });
      console.log("Login successful");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
