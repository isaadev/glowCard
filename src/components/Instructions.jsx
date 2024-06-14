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
         flex flex-col justify-items-center
         rounded-3xl  m-14 p-12
         xl:w-maxintroCardW xl:h-maxintroCardH lg:w-maxintroCardW lg:h-maxintroCardH
         md:w-maxintroCardW md:h-maxintroCardH xs:w-26 xs:h-maxintroCardH "
      >
        <div className="text-center">
          <p className="text-3xl text-purple-600 mb-8">How to Play</p>
          <p className="text-lg pt-3">
            You will play as a <span className="text-purple-600">consumer</span>
            /producer
          </p>
          <div className="border-2 rounded-2xl border-nextbtn p-4 lg:w-80 xs:w-60 mx-auto my-6">
            <p className="text-base mb-2">Consumer</p>
            <p className="text-xs text-gray-400">
              As a consumer, you will have to purchase the highest quality
              product and try NOT to be scammed by the producer.
            </p>
          </div>
          <div className="mb-5">
            <button id="nextBtn" className="rounded-2xl border-2 border-nextbtn text-base py-2 px-5 text-sellerTxt">
              Next >
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Instructions;
