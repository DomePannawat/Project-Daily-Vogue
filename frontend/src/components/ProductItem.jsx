import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="group text-gray-700 cursor-pointer rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
      to={`/product/${id}`}
    >
      <div className="overflow-hidden rounded-t-xl">
        <img
          className="group-hover:scale-110 transition-transform ease-in-out duration-300 rounded-t-xl"
          src={image[0]}
        />
      </div>
      <p className="pt-3 pb-1 text-sm ml-2">{name}</p>
      <p className="text-sm font-medium ml-2 mb-2">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
