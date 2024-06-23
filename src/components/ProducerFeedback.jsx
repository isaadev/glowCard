import ProfileHeader from "./ProfileHeader.jsx";
import ProductCard from "./ProductCard.jsx";
import React from "react";

const ProducerFeedback = () => {
  return (
      <div
          id="body-container"
          className="h-screen w-screen flex flex-col bg-offwhite"
      >
        <div id="top-div" className={`min-h-top flex justify-center`}>
          <ProfileHeader/>
        </div>

        <div
            id="middle-div"
            className="
              flex-auto justify-items-center items-center
               grid grid-cols-1
               min-h-middle overflow-auto

               desktop:px-0 tablet:px-0
               tablet:grid-cols-2 desktoplg:grid-cols-4"
        >

        </div>

        <div id="bottom-div" className="flex justify-center min-h-bottom tablet:min-h-smBottom">
          <button
              id="bottom-div"
              className="
              self-center rounded-2xl w-40 text-xs
            bg-blue-600 text-white tablet:w-32 mb-3 py-4
            "
          >
            Next {">"}
          </button>
        </div>
      </div>
  )

}

export default ProducerFeedback