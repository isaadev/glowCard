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
               

               desktop:px-1 tablet:px-32
               tablet:grid-cols-2 desktop:grid-cols-4"
        >
          <div
            id="instructions"
            className="card flex flex-col justify-around text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-cardpad
            rounded-3xl p-3"
          >
            <p>
              In this stage, choose what quality to produce x and how you want
              to advertise it. Goal: maximize{" "}
              <span className="text-green-600">profit</span>.
            </p>
            <img src="ok" alt="payoffmatrix" />
          </div>

          <div
            id="producerHistory"
            className="card flex flex-col justify-around text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-10 rounded-3xl"
          >
            <p>placeholder</p>
          </div>

          <div
            id="producerQuality"
            className="card flex flex-col justify-between text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-10 rounded-3xl"
          >
            <p>
              What quality would you like to{" "}
              <span className="text-blue-600">produce</span>?
            </p>
            <button className="bg-blue-600 text-white text-sm p-3 rounded-2xl">
              Low Quality (cost: <span className="text-green-300">$3</span>)
            </button>
            <button className="bg-blue-600 text-white text-sm p-3 rounded-2xl">
              High Quality (cost: <span className="text-green-300">$5</span>)
            </button>

            <div className="self-center">
              <img
                src="/public/bag.png"
                alt="insert img"
                className="object-cover w-producerImg h-producerImg"
              ></img>
            </div>
          </div>

          <div
            id="adQuality-warrant"
            className="card flex flex-col justify-between text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-10 rounded-3xl"
          >
            <p>
              What quality would you like to{" "}
              <span className="text-blue-600">advertise</span>?
            </p>
            <div className="flex flex-row justify-around">
              <button className="bg-blue-600 text-white p-3 text-xs rounded-2xl max-w-28">
                Low Quality (cost: <span className="text-green-300">$3</span>)
              </button>
              <button className="bg-blue-600 text-white p-3 text-xs rounded-2xl max-w-28">
                High Quality (cost: <span className="text-green-300">$5</span>)
              </button>
            </div>
            <hr className="w-56 self-center"></hr>
            <p>Would you like to warrant this product?</p>
            <div className="flex flex-row justify-around">
              <button className="bg-blue-600 text-white p-2 text-sm rounded-2xl w-28 max-w-28">
                Yes
              </button>
              <button className="bg-blue-600 text-white p-2 text-sm rounded-2xl w-28 max-w-28">
                No
              </button>
            </div>

            <div className="self-center">
              <img
                src="/public/bag.png"
                alt="insert img"
                className="object-cover w-producerImg h-producerImg"
              ></img>
            </div>
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
