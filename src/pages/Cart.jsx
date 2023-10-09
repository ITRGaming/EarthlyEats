import React, { useContext } from "react";
import  { ShopContext }  from "../context/shop-context";
import ProductCard from "../components/ProductCard";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <>
      <NavBar/>
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
        {Object.entries(cartItems).map(([id, quantity]) => {
            if (quantity !== 0) {
              const product = ProductCard.find((product) => product.id === id);
              return <CartItem data={product} />;
            }
          })}
        </div>

        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        ) : (
          <h1> Your Shopping Cart is Empty</h1>
        )}
      </div>
    </>
  );
};
