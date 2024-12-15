import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./CartSlice";
import "./ProductList.css"; // Import CSS file for component-specific styles

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // Get cart items from Redux store

  const products = [
    { id: 1, name: "Product A", price: 60 },
    { id: 2, name: "Product B", price: 75 },
    { id: 3, name: "Product C", price: 30 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => {
          const isDisabled = cartItems.some((item) => item.id === product.id); // Check if product is in cart
          return (
            <li key={product.id} className="product-list-item">
              <span>
                {product.name} - ${product.price}
              </span>
              <button
                className={`add-to-cart-btn ${isDisabled ? "disabled" : ""}`}
                onClick={() => handleAddToCart(product)}
                disabled={isDisabled} // Disable button if product is in cart
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductList;
