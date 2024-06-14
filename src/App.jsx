import React from "react";
import "./App.css";
import Instructions from "./components/Instructions.jsx";
import IntroPage from "./components/IntroPage.jsx";
import ProfileHeader from "./components/ProfileHeader";
import ProductCard from "./components/ProductCard.jsx";
import ConsumerProductPage from "./components/ConsumerChoice.jsx";
import ProducerPage from "./components/ProducerPage.jsx";


function App() {
  return (
    <>
      {/* <IntroPage /> */}
      {/* <Instructions /> */}
      {/* <ConsumerProductPage /> */}
      <ProducerPage />
    </>
  );
}

export default App;
