import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

/**
 The `addProduct` function handles adding a new product by uploading images to Cloudinary 
 and saving the product data to the database. It uses the request (`req`) 
 to get the product details from the client, then sends a response (`res`) 
 back with a success or error message.
 */
// function for  add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];

    const images = [image1].filter((item) => item !== undefined);

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      image: imageUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 The `listProducts` function retrieves all products from the database and sends them back in a JSON response. 
 It uses the request (`req`) to handle any data sent from the client and the response 
 (`res`) to return the products or any errors that may occur.
 */
// function for  list product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 The `removeProduct` function deletes a product from the database. 
 It checks if the operation was successful and sends back a success message; 
 if not, it sends an error message. The `req` parameter is used to get the product ID, and the `res` 
 parameter sends the response back to the client.
 */
// function for  remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

/**
 The `singleProduct` function retrieves a product based on its ID and returns it in a JSON response. 
 The `req` parameter holds the client request details, like headers and parameters. 
 The `res` parameter sends the product data back to the client in the response.
 */
// function for  single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
