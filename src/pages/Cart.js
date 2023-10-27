import React from "react";
import "./Cart.css"
import { useCart } from "react-use-cart";
import NavBar from "../components/NavBar";
import NavBarseller from "../components/NavBarseller";
import { useAuth } from "../components/AuthContext";
import { displayRazorpay } from "../components/razorpay";

const Cart = () => {
  const { sellerIsLoggedIn } = useAuth();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return(<> {sellerIsLoggedIn ? <NavBarseller /> : <NavBar />}
  <h1 className="cartisempty">Your cart is feeling empty and sad 😢</h1>
  <h4 className="anothertext">But you can cheer it up by <span className="span"> adding some of our fabulous products</span> to it 💃</h4>
  <img  src="https://media.giphy.com/media/uZ7wLTpoMbtikW2wUY/giphy.gif" alt="emptycart" className="emptycartgif"/>
  </>
  )
  
   const buynow =() => {
    displayRazorpay(cartTotal);
    // console.log(cartTotal)
  }
  return (
    <>
      {sellerIsLoggedIn ? <NavBarseller /> : <NavBar />}
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5>
              Cart ({totalUniqueItems}) total Items: ({totalItems})
            </h5>
            <table className="table table-light table-hover m-0">
              <tbody>
                {items.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <img src={item.imageUrl} style={{ height: "6rem" }} alt={item.productName}/>
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.price}</td>
                      <td>Quantity ({item.quantity})</td>
                      <td>
                        <button
                          className="countHandler btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span> </span>
                        <button
                          className="countHandler btn-info ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <span> </span>
                        <button className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}>
                          Remove Item
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-auto ms-auto">
            <h2>Total Price: Rs. {cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>Clear Cart</button>
            <button className="btn btn-primary m-2" onClick={buynow} >Buy Now </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
