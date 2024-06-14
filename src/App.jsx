import React from "react";
import "./App.css";
import Instructions from "./components/Instructions.jsx";
import IntroPage from "./components/IntroPage.jsx";
import ProfileHeader from "./components/ProfileHeader";
import ProductCard from "./components/ProductCard.jsx";
// card


const ConsumerProductPage = () => {

  return (
    <>
      <div id="body-container" className="min-h-screen flex flex-col">
        <div id="top-div" className={`min-h-top flex justify-center`}>
          <ProfileHeader />
        </div>

        <div
          id="middle-div"
          className="
               flex-auto justify-items-center items-center
               grid grid-cols-1
               min-h-middle

               desktop:px-52 tablet:px-32
               tablet:grid-cols-2 desktop:grid-cols-3"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <div className="flex justify-center min-h-bottom tablet:min-h-smBottom">
          <button
            id="bottom-div"
            className="
              self-center rounded-2xl w-40 text-xs
              border-2 border-orange-400 text-orange-400 ablet:w-32 mb-3 py-4 
            "
          >
            Next >
          </button>
        </div>
      </div>
    </>
  );
};


function App() {
  return (
    <>
      <IntroPage />
      <Instructions />
      <ConsumerProductPage />
    </>
  );
}

export default App;
