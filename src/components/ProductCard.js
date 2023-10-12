  import React from "react";
  import "./ProductCard.css";
  import { useCart} from "react-use-cart"
  import { NotificationManager } from 'react-notifications';
  // import products from "./product";
  // import { displayRazorpay } from "./razorpay";

  function ProductCard({ productName, price, imageUrl, item }) {
    const { addItem } = useCart();

    const handleAddToCart = () => {
      addItem(item);
      // alert(productName, " added to cart");
      NotificationManager.success(`${productName} added to cart`, 'Success', 2000, { position: 'top-right' });
    }
    return (
      <div className="card">
        <div className="img-div">
          <img src={imageUrl} className="card-img-top" alt={productName} />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title text-center">{productName}</h5>
          <h5 className="card-title text-center">Rs. {price}</h5>
          <button className="btn addtocart" onClick={handleAddToCart}>
          Add to cart
          </button>   
        </div>
      </div>
    )
  }

  export default ProductCard;
