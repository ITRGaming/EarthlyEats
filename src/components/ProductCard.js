import React, { useContext } from "react";
import "./ProductCard.css";
import { ShopContext } from "../context/shop-context";
function ProductCard({ id, productName, imageUrl }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];
  return (
    <div className="card">
      <div className="img-div">
        <img src={imageUrl} className="card-img-top" alt={productName} />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title text-center">{productName}</h5>
        <button className="btn addtocart" onClick={() => addToCart(id)}>
          Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
