import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./App.css";
import cartIcon from "./cart.svg";
import ProductCard from "./components/ProductCard";

function BasicExample() {
  return (
      <>
        <ProductCard/>
      </>

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
        <div className="profile-container max-w-64 border-2 rounded-2xl position-fixed top-0">
          Test
        </div>

        <div className="flex items-center justify-center ">
          <BasicExample/>
        </div>
      </>
  );
}

export default App;
