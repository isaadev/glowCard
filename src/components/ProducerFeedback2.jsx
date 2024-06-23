import ProfileHeader from "./ProfileHeader.jsx";
import ProductCard from "./ProductCard.jsx";
import React from "react";

const ProducerFeedback2 = () => {
  return (
    <div
      id="body-container"
      className="h-screen w-screen flex flex-col bg-offwhite"
    >
      <div id="top-div" className={`min-h-top flex justify-center`}>
        <ProfileHeader />
      </div>

      <div
        id="middle-div"
        className="
              flex-auto justify-items-center items-center
               grid grid-cols-1
               min-h-middle overflow-auto

               desktop:px-0 tablet:px-0
               tablet:grid-cols-2 desktoplg:grid-cols-2"
      >
        <div
          id="salesCard"
          className="card min-h-[500px] max-h-[500px] min-w-[350px] max-w-[350px]
          rounded-3xl bg-[#EBFF9D] text-center p-6 flex flex-col justify-around"
        >
          <div id="top-text" className="text-2xl">
            {"{"} Producer Summary {"}"}
          </div>

          <div
            id="dotted-line"
            className="border-t border-b border-dotted border-black"
          ></div>

          <div className="">
            <div className="flex justify-between mb-7">
              <div>Products Sold:</div>
              <div>8</div>
            </div>
            <div className="flex justify-between mb-7">
              <div>Profits 💰:</div>
              <div>$50</div>
            </div>
            <div className="flex justify-between mb-7">
              <div>Brand Rating ⭐️:</div>
              <div>66%</div>
            </div>
            <div className="flex justify-between">
              <div>Challenges lost:</div>
              <div>0</div>
            </div>
          </div>
          <div
            id="dotted-line"
            className="border-t border-b border-dotted border-black"
          ></div>
          <div className="text-lg">
            <div className="flex justify-between text-xl">
              <div>Score Earned:</div>
              <div className="bg-green-400 rounded-full px-4">20</div>
            </div>
          </div>
        </div>

        <div
          id="salesCard"
          className="card min-h-[500px] max-h-[500px] min-w-[350px] max-w-[350px]
          rounded-3xl bg-[#EBFF9D] text-center p-6 flex flex-col justify-around"
        >
          <div
            id="dotted-line"
            className="border-t border-b border-dotted border-black"
          ></div>

          <div className="">
            <div className="text-xl mb-5">Would you like to switch brands?</div>
            <div className="text-xs text-center text-gray-400 mb-10">  (Switching brands will reset your .....)</div>
            <div className="flex flex-col ">
              <button
                className="bg-black text-[#EBFF9D] text-xs rounded-2xl p-2 py-4 self-center
            w-24 mb-9"
              >
                Yes
              </button>

              <button
                className="bg-black text-[#EBFF9D] text-xs rounded-2xl p-2 py-4 self-center
            w-24"
              >
                No
              </button> 
            </div>
          </div>
          <div
            id="dotted-line"
            className="border-t border-b border-dotted border-black"
          ></div>
        </div>
      </div>

      <div
        id="bottom-div"
        className="flex justify-center min-h-bottom tablet:min-h-smBottom"
      >
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
  );
};

export default ProducerFeedback2;
