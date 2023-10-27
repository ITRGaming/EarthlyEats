// CustomerDetails.js

import React, { useState } from 'react';
import './CustomerDetails.css'; // Import the external CSS file

const CustomerDetails = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., sending the data to a server or processing the order.
    // For this example, we'll just log the data to the console.
    console.log(formData);
  }

  return (
    <div className="customer-details"> {/* Apply the CSS class to the container */}
      <h2>Customer Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default CustomerDetails;
