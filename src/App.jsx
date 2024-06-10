import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './App.css'


function BasicExample() {
  return (
    <Card
      className="cardd rounded-xl p-5"
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
      <Card.Body>
        <Card.Title className="product-text p-2">Item 1</Card.Title>
        <Card.Text className="seller-text p-1">Seller: Jinwoo</Card.Text>
        <Button variant="primary" className="add-to-cart-btn-text mt-2">
          (ic) Add to Cart
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
      <div>
        <BasicExample />

      </div>
    </>
  );
}

export default App
