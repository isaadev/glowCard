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
            id=""
            className="flex flex-col justify-around text-center
            min-h-producerCardH max-h-producerCardH min-w-producerCardW max-w-producerCardW 
            p-cardpad border-2 border-red-800"
          >
            <p>ur being a bitch</p>
            <img src="" alt="payoffmatrix"/>
           
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
