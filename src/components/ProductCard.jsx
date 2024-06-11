import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ProductCard.css"
import cartIcon from "../cart.svg";

const ProductCard = (props) => {
  return (
      <Card
          className="card rounded-2xl p-5"
          style={{
            minWidth: "13rem",
            minHeight: "16rem",
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
              className="add-to-cart-btn-text mt-2 p-4 flex items-center"
          >
            <img src={cartIcon} alt="Cart" className="cart-icon mr-2" />
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
  )
}

export default ProductCard;