import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard.jsx";


const ConsumerProductPage = () => {

  return (
      <>
        <div id='body-container' className='h-svh flex flex-col'>
          <div id="top-div" className='border-2 border-red-900 h-top'>top</div>
          <div id="middle-div" className='border-2 border-red-900 flex-auto grid'>middle</div>
          <div id="bottom-div" className='border-2 border-red-900 bottom-0 w-svw h-top'>bottom</div>
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