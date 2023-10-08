import React from 'react';
import '../components/ProductCard.css';
function ProductCard({ productName, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={productName} />
      <div className="card-body text-center">
        <h5 className="card-title text-center">{productName}</h5>
        <button className="btn addtocart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
