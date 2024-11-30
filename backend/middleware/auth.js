import jwt from "jsonwebtoken";

/**
 The authUser function is middleware that checks for a token in the request headers, 
 verifies it using a JWT secret, and adds the decoded user ID to the request body. 
 If the token is valid, it calls next() to continue to the next middleware or route. 
 If the token is missing or invalid, it responds with an error message.
 */
const authUser = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not Login Again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
