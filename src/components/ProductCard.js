import React from "react";
import "./ProductCard.css";
function ProductCard({ productName, imageUrl }) {
  return (
    <div className="card">
      <div className="img-div">
        <img src={imageUrl} className="card-img-top" alt={productName} />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title text-center">{productName}</h5>
        <button className="btn addtocart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
