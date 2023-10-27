import React from "react";
import "./ProductCard.css";
import { useCart } from "react-use-cart";
import { NotificationManager } from "react-notifications";
// import products from "./product";
// import { displayRazorpay } from "./razorpay";

function ProductCard({ productName, price, imageUrl, item }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
    // alert(productName, " added to cart");
    NotificationManager.success(
      `${productName} added to cart`,
      "Success",
      2000
    );

    // Additional styles to set the notification container's position
    const notificationContainer = document.querySelector(
      ".notification-container"
    );
    if (notificationContainer) {
      notificationContainer.style.backgroundColor = "#fbff41";
      notificationContainer.style.color = "#000";
      notificationContainer.style.borderRadius = "5px";
      notificationContainer.style.border = "1px solid #000";
      // notificationContainer.style.padding = "1rem";
      notificationContainer.style.position = "fixed";
      notificationContainer.style.top = "20px"; // Adjust the top position as needed
      notificationContainer.style.right = "45rem"; // Adjust the right position as needed
    }
  };
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
  );
}

export default ProductCard;
