import ProfileHeader from "./ProfileHeader.jsx";
import React from "react";

const ProducerFeedback = () => {
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
              "
      >
        <div
          id="salesCard"
          className="card min-h-[500px] max-h-[500px] min-w-[350px] max-w-[350px]
          rounded-3xl bg-[#EBFF9D] text-center p-6 flex flex-col justify-around"
        >
          <div id="top-text" className="text-2xl">
            {"{"} Sales {"}"}
          </div>

          <div
            id="dotted-line"
            className="border-t border-b border-dotted border-black"
          ></div>

          <div className="">
            <div className="flex flex-row justify-between mb-7">
              <div>Products Sold:</div>
              <div>8</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>Profits Earned/lost:</div>
              <div>$50</div>
            </div>
          </div>
          <div
            id="dotted-line"
            className="border-t border-b border-dotted border-black"
          ></div>
          <div className="">
            If you <span className="underline">warranted a claim</span> for your
            product. Consumers may challenge your claim!
          </div>
          <div
            id="dotted-line"
            className="border-t border-b border-dotted border-black"
          ></div>
          <button
            className="bg-black text-[#EBFF9D] text-xs rounded-2xl p-2 py-4 self-center
            w-24"
          >
            Next
          </button>
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
            bg-blue-600 text-white tablet:w-32 my-1 py-4
            "
        >
          Next {">"}
        </button>
      </div>
    </div>
  );

}

export default ProducerFeedback