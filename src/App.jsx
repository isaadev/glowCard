import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard.jsx";


// card
const Card = () => {
  return (
    <div
      className="
    card rounded-3xl
    flex flex-col justify-between
    min-h-cardHeight max-h-cardHeight min-w-cardwidth p-cardpad
     "
    >
      <div id="top-text" className="flex flex-row justify-between text-topTxt">
        <div id="warrant-status" className="">
          Warranted
        </div>
        <div id="productPrice" className="">
          $15
        </div>
      </div>
      <img src="" />
      <div id="product-info" className="items-center text-center">
        <div id="productName" className="p-0.5 text-prodTxt">
          Leather Bag
        </div>
        <div id="sellerName" className="p-0.5 text-sellerTxt">
          Seller: Satoru
        </div>
        <button
          id="addCart"
          className="rounded-2xl border-2 border-nextbtn p-btnpad text-btnTxt"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

const ProfileHeader = () => {

  return (
      <div id='Profile-container'
           className='
           border-2 rounded-full
           min-h-full w-profileW self-center
           flex justify-between
           '>

        <div id='profile-left' className="flex items-center justify-center ml-6">
          <p>Round <span className="p-1.5 bg-fuchsia-600 rounded-full">4/10</span></p>

          <div className="mx-4 h-6 bg-gray-400 w-px"></div>

          <p>&#128176; Budget <span className='p-1.5 bg-fuchsia-600 rounded-full'>$40</span></p>
        </div>

        <div id='profile-right' className="flex items-center justify-center mr-6">
          <p>Round <span className="p-1.5 bg-fuchsia-600 rounded-full">1</span></p>

          <div className="mx-4 h-6 bg-gray-400 w-px"></div>

          <p>🕛 Time <span className='p-1.5 bg-fuchsia-600 rounded-full'>00:05:00</span></p>
        </div>
      </div>
  )
}

// will use grid-rows-3 for cards

const ConsumerProductPage = () => {

  const redBorder = 'border-2 border-red-900'
  return (
      <>
        <div id='body-container' className='h-svh flex flex-col'>
          <div id="top-div" className={`min-h-top flex justify-center`}>
            <ProfileHeader />
          </div>
          <div id="middle-div" className='flex-auto min-h-middle grid grid-cols-3 grid-rows-2 justify-items-center items-center px-72'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <button id="bottom-div"
                  className='self-center rounded-2xl
                  bottom-0 w-40 min-h-bottom
                  bg-nextbtn text-black'>Next</button>
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