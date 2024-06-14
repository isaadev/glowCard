import ProfileHeader from "./ProfileHeader.jsx";
import React from "react";

const ProducerPage = () => {
  return (
    <>
      <div
        id="body-container"
        className="min-h-screen flex flex-col bg-offwhite"
      >
        <div id="top-div" className={`min-h-top flex justify-center`}>
          <ProfileHeader />
        </div>

        <div
          id="middle-div"
          className="
               flex-auto justify-items-center items-center
               grid grid-cols-1
               min-h-middle
               

               desktop:px-12 tablet:px-32
               tablet:grid-cols-2 desktop:grid-cols-4"
        >
          <div
            id="instructions"
            className="flex flex-col justify-around text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-cardpad border-2 border-red-800"
          >
            <p>
              In this stage, choose what quality to produce x and how you want
              to advertise it. Goal: maximize profit.
            </p>
            <img src="ok" alt="payoffmatrix" />
          </div>

          <div
            id="producerHistory"
            className="flex flex-col justify-around text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-cardpad border-2 border-red-800"
          >
            <p>placeholder</p>
            <img src="ok" alt="payoffmatrix" />
          </div>

          <div
            id="producerQuality"
            className="flex flex-col justify-between text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-cardpad border-2 border-red-800"
          >
            <p>What quality would you like to produce?</p>
            <button className="border-2 border-red-400">Low Quality</button>
            <button className="border-2 border-red-400">High Quality</button>

            <div className="self-center">
              <img src="/public/bag.png" alt="insert img" className="object-cover w-producerImg h-producerImg"></img>
            </div>
          </div>

          <div
            id="adQuality-warrant"
            className="flex flex-col justify-around text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-cardpad border-2 border-red-800"
          >
            <p>
              In this stage, choose what quality to produce x and how you want
              to advertise it. Goal: maximize profit.
            </p>
            <img src="ok" alt="payoffmatrix" />
          </div>
        </div>

        <div className="flex justify-center min-h-bottom tablet:min-h-smBottom">
          <button
            id="bottom-div"
            className="
              self-center rounded-2xl w-40 text-xs
            bg-blue-600 text-white tablet:w-32 mb-3 py-4
            "
          >
            Next >
          </button>
        </div>
      </div>
    </>
  );
};

export default ProducerPage;
