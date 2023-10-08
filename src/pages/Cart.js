import React, { useState } from 'react';

function Cart() {
  // Sample cart data (you can replace this with your actual cart data)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10.99, quantity: 2 },
    { id: 2, name: 'Item 2', price: 15.99, quantity: 1 },
    // Add more items as needed
  ]);

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button className="btn btn-light">Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right">
        <strong>Total: $XXX.XX</strong>
      </div>
    </div>
  );
}

export default Cart;
