import React from "react";
// import LogeedNav from "../Component/LoggedNav";
import "../Cart.css";
import bookimage from "./download.jpeg";

const Cart = () => {
  return (
    <>
      {/* <LogeedNav /> */}
      <div className="cart-page-wrapper">
        <div className="cart-page-heading">
          <h1
            className="heading"
            style={{
              // fontSize: "35",
              fontFamily:
                "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            }}
          >
            Cart Page
          </h1>
          <div className="heading-below-line"></div>
        </div>
        <div className="cart-page-subheading">
          <h2>My Shopping Bag</h2>
          <div className="cart-total-price">
            <h3>Total Price</h3>
          </div>
        </div>
        <div className="cart-page-card-wrapper">
          <div className="cart-card">
          <div className="left-content">

            <div className="img-wrapper">
              <img src={bookimage} alt="bookimage" className="book-image"></img>
            </div>
          </div>
            <div className="content-wrapper">
              <div className="card-content-top">
                <div className="content-top-left">
                  <p className="book-name">Book Name</p>
                  <p className="book-author">Author</p>
                </div>
                <div className="book-price">MRP:100</div>
              </div>
              <div className="card-content-bottom">
                <div className="quantity-group">
                  <button className="qty-button">
                    <span>+</span>
                  </button>
                  <div className="qty-count">
                    <span>1</span>
                  </div>
                  <button className="qty-button">
                    <span>-</span>
                  </button>
                </div>
                <div className="remove">Remove</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
