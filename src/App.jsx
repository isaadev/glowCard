import React from "react";
import "./App.css";
import Instructions from "./components/Instructions.jsx";
import IntroPage from "./components/IntroPage.jsx";


const ConsumerProductPage = () => {
  const redBorder = "border-2 border-red-900";
  return (
    <>
      <div id="body-container" className="h-svh flex flex-col">
        <div id="top-div" className={`min-h-top flex justify-center`}>
          <ProfileHeader />
        </div>
        <div
          id="middle-div"
          className="flex-auto min-h-middle grid grid-cols-3 grid-rows-2 justify-items-center items-center"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button
          id="bottom-div"
          className="self-center rounded-2xl
                  bottom-0 w-40 min-h-bottom
                  bg-nextbtn text-black"
        >
          Next
        </button>
      </div>
    </>
  );
};


function App() {
  return (
    <>
      {/* <ConsumerProductPage/> */}
      {/* <IntroPage /> */}

      <Instructions />
    </>
  );
}

export default App;
