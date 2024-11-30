import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  allOrder,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

/* This code snippet is setting up routes for handling different order-related functionalities in a
Node.js application using Express framework.  */
const orderRouter = express.Router();

// Admin
orderRouter.post("/list", adminAuth, allOrder);
orderRouter.post("/status", adminAuth, updateStatus);

// Payment
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);

// user
orderRouter.post("/userorders", authUser, userOrders);

//verify Payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);

export default orderRouter;
