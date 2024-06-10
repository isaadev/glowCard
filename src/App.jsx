import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import cartIcon from "./cart.svg";

function BasicExample() {
  return (
    <Card
      className="card rounded-2xl p-5"
      style={{
        width: "13rem",
        height: "16rem",
      }}
    >
      <div className="top-text flex flex-row justify-between mb-5">
        <div className="warrant-status">Warranted</div>
        <div className="price place-self-end">$15</div>
      </div>
      <Card.Img variant="top" src="holder.js/100px180" className="" />
      <Card.Body className="flex flex-col items-center justify-between">
        <div>
          <Card.Title className="product-text p-2">Item 1</Card.Title>
          <Card.Text className="seller-text p-1">Seller: Jinwoo</Card.Text>
        </div>
        <Button
          variant="primary"
          className="add-to-cart-btn-text mt-2 p-3 flex items-center"
        >
          <img src={cartIcon} alt="Cart" className="cart-icon mr-2" />
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="flex items-center justify-center ">
        <BasicExample />
      </div>
    </>
  );
}

export default App;
