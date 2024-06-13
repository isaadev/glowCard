import React from 'react';
import './Card.css'

// second page - instructions
const Instructions = () => {
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
        xl:w-maxintroCardW xl:h-maxintroCardH lg:w-maxintroCardW lg:h-maxintroCardH md:w-maxintroCardW md:h-maxintroCardH xs:w-26 xs:h-maxintroCardH m-14"
      >
        <div className="text-center">
          <p className="text-xl text-purple-600 mb-8">How to Play</p>
          <p className="text-xs pt-3">
            You will play as a <span className="text-purple-600">consumer</span>
            /producer
          </p>
          <div className="border-2 rounded-2xl border-nextbtn p-4 lg:w-80 xs:w-60 mx-auto my-6">
            <p className="text-xs mb-2 text-nextbtn">Consumer</p>
            <p className="text-sellerTxt text-gray-400">
              As a consumer, you will have to purchase the highest quality
              product and try NOT to be scammed by the producer.
            </p>
          </div>
          <div className="mb-5">
            <button className="rounded-2xl border-2 bg-nextbtn text-black p-btnpad text-sellerTxt">
              Next >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Instructions;
