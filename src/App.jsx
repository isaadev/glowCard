import React from "react";
import "./App.css";
import Instructions from "./components/Instructions.jsx";
import IntroPage from "./components/IntroPage.jsx";


const ProfileHeader = () => {
  return (
    <div
      id="Profile-container"
      className="
           border-2 rounded-full
           min-h-full w-profileW self-center
           flex justify-between
           "
    >
      <div id="profile-left" className="flex items-center justify-center ml-6">
        <p>
          Round <span className="p-1.5 bg-fuchsia-600 rounded-full">4/10</span>
        </p>

        <div className="mx-4 h-6 bg-gray-400 w-px"></div>

        <p>
          &#128176; Budget{" "}
          <span className="p-1.5 bg-fuchsia-600 rounded-full">$40</span>
        </p>
      </div>

      <div id="profile-right" className="flex items-center justify-center mr-6">
        <p>
          Round <span className="p-1.5 bg-fuchsia-600 rounded-full">1</span>
        </p>

        <div className="mx-4 h-6 bg-gray-400 w-px"></div>

        <p>
          🕛 Time{" "}
          <span className="p-1.5 bg-fuchsia-600 rounded-full">00:05:00</span>
        </p>
      </div>
    </div>
  );
};

// will use grid-rows-3 for cards

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
