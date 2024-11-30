import userModel from "../models/userModel.js";

/**
 The `addToCart` function is an asynchronous handler in a Node.
 js application that uses MongoDB to add items to a user's cart. 
 It takes the request (`req`) to get item details from the request body and sends a response (`res`) 
 back to the client with the result of the operation.
 */
//ผู้ใช้แอดของลงตระกร้า
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({ success: true, message: "Add to Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 The `updateCart` function updates the quantity of a specific item in a user's cart using the user ID, 
 item ID, size, and quantity provided in the request body. It processes the request (`req`), 
 performs the update, and sends a response (`res`) indicating the success or failure of the operation.
 */
//ผู้ใช้ update ของในตระกร้า
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Update Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/**
The `getUserCart` function asynchronously retrieves a user's cart data using the user ID 
from the request (`req`). It then sends the cart data back to the client in the response (`res`).
 */
//getUserCart data
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
