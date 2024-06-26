import React from 'react';
import './Card.css'

const IntroPage = () => {
  return (
    <div
      id="intro-container"
      className="h-svh flex flex-col justify-center items-center"
    >
      <div
        id="intro-card-container"
        className="card
        rounded-3xl flex flex-col 
         p-12 justify-items-center 
        xl:w-maxintroCardW xl:h-maxintroCardH
        lg:w-maxintroCardW lg:h-maxintroCardH
        md:w-maxintroCardW md:h-maxintroCardH
        xs:w-26 xs:h-maxintroCardH m-12"
      >
        <div className="text-center">
          <p className="text-3xl text-blue-600 mb-14">Game</p>
          <p className="text-lg pt-3">Enter your Player Identifier:</p>
          <input
            type="text"
            id="player-identifier-box"
            placeholder="abc..."
            className="text-center my-6 text-xs text-gray-600
            rounded-2xl bg-white border-2 border-gray-600 p-4 w-full
            sm:w-auto sm:flex-grow"
          />
          <div>
            <button id="nextBtn" className="rounded-2xl bg-blue-600 text-white text-lg py-2 px-5 text-sellerTxt ">
              Next >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
