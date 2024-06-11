import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard.jsx";


const ConsumerProductPage = () => {

  return (
      <>
        <div id='body-container' className='h-svh flex flex-col'>
          <div id="top-div" className='border-2 border-red-900 h-top'>top</div>
          <div id="middle-div" className='border-2 border-red-900 h-middle'>middle</div>
          <div id="bottom-div" className='border-2 border-red-900 bottom-0 '>bottom</div>
        </div>
      </>
  )
}


function App() {
  return (
      <>
        <ConsumerProductPage/>
      </>
  );
}

export default App;