import React from "react";
import "./ProductCard.css";
import { useCart} from "react-use-cart"
// import products from "./product";
// import { displayRazorpay } from "./razorpay";

function ProductCard({ imageUrl, productName }) {
  const { addItem } = useCart();
  return (
    <div className="card">
      <div className="img-div">
        <img src={imageUrl} className="card-img-top" alt={productName} />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title text-center">{productName}</h5>
        <button className="btn addtocart" onClick={addItem}>
         Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
