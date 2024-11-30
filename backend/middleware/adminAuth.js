import jwt from "jsonwebtoken";

/**
 The adminAuth function is middleware in JavaScript used to verify if 
 a client request has a valid token in its headers. It checks the token against admin credentials 
 (email and password) stored in environment variables. If the token is valid, it allows 
 the request to proceed to the next middleware or route using next(). Otherwise, 
 it returns an error response indicating the user is not authorized.
 */
const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not  Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: "Not Login Again",
      });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
