import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

/**
 The `loginUser` function checks the user's email and password, and if they are correct, generates a token. 

    - `req` contains the user's login details (email and password).
    - `res` sends a response indicating whether the login was successful or not, along with any relevant messages.

If the user is found and the password matches, a success message with a token is returned. 
If not, an error message is returned indicating either "user doesn't exist" or "invalid credentials."
 */
// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 The `registerUser` function handles user registration by checking if the user already exists, 
 validating the email and password, hashing the password, and then saving the new user to the database.

    - `req` contains the user's registration details (email, password) sent in the request body.
    - `res` sends a response back to the client with either a success message and token or an error message.

If registration is successful, the response will be `{ success: true, token }`. 
If there's an error, the response will be `{ success: false, message: error.message }`.
 */
// Route for user register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //checking user already exitsts or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    //validating email format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 The `adminLogin` function checks if the provided email and password match the admin's credentials and 
 returns a token if they are correct.

    - `req` contains the email and password sent by the client for login.
    - `res` sends a response back to the client with either a success message and token if login is successful, 
        or an error message if it's not.

In short: if the admin login is successful, a token is returned; if not, an error message is sent.
 */
// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { loginUser, registerUser, adminLogin };
