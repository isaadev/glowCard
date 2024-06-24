import ProfileHeader from "./ProfileHeader.jsx";
import React from "react";

const ConsumerFeedback2 = () => {

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
               grid grid-cols-4
               min-h-middle overflow-auto

               desktop:px-0 tablet:px-0
              "
        >
          <div
              id="ProductCard"
              className="
                card rounded-3xl
                flex flex-col justify-around
                min-h-[550px] min-w-[370px] p-cardpad
                my-5 desktop:my-3 table:my-3">

            <div id="top-text" className="flex flex-row justify-between text-topTxt">
              <div id="warrant-status" className="text-sm p-1 px-2 rounded-full bg-blue-600 text-white">
                Warranted
              </div>
              <div id="productPrice" className="text-base text-blue-600">
                $10
              </div>
            </div>

            <img src="/bag.png" className="object-fit w-[150px] h-[150px] self-center"/>

            <div id="product-info" className="items-center text-center">
              <div id="productName" className="text-base mb-2">
                Leather Bag
              </div>

              <div id="sellerName" className="text-sm mb-2">
                <span className="text-gray-500">Seller:</span> <span className="text-blue-600">Satoru</span>
              </div>

              <div id='brand-info' className='px-5'>
                <span className='flex justify-between mb-2'><p>Real Quality:</p><p>Low/High</p></span>
                <span className='flex justify-between'><p>Brand Rating:</p><p>69%</p></span>
              </div>
            </div>

            <div
                id="dotted-line"
                className="self-center border-t border-b border-dotted border-black w-[300px]"
            ></div>

            <div id='results-challenge' className='px-5'>
              <span className='flex justify-between mb-2'><p>Challenge:</p><p>Successful</p></span>
              <span className='flex justify-between'><p>Score earned:</p><p>20</p></span>
            </div>
          </div>

          <div
              id="ProductCard"
              className="
                card rounded-3xl
                flex flex-col justify-around
                min-h-[550px] min-w-[370px] p-cardpad
                my-5 desktop:my-3 table:my-3">

            <div id="top-text" className="flex flex-row justify-between text-topTxt">
              <div id="warrant-status" className="text-sm p-1 px-2 rounded-full text-white">
              </div>
              <div id="productPrice" className="text-base text-blue-600">
                $10
              </div>
            </div>

            <img src="/bag.png" className="object-fit w-[150px] h-[150px] self-center" alt=''/>

            <div id="product-info" className="items-center text-center">
              <div id="productName" className="text-base mb-2">
                Leather Bag
              </div>
              <div id="sellerName" className="text-sm mb-2">
                <span className="text-gray-500">Seller:</span> <span className="text-blue-600">Satoru</span>
              </div>
              <div id='brand-info' className='px-5'>
                <span className='flex justify-between mb-2'><p>Real Quality:</p><p>Low/High</p></span>

                <span className='flex justify-between'><p>Brand Rating:</p><p>69%</p></span>
              </div>
            </div>

            <div
                id="dotted-line"
                className="self-center border-t border-b border-dotted border-black w-[300px]"
            ></div>

            <div id='results-no-challenge' className='px-5'>
              <span className='flex justify-between'><p>Score earned:</p><p>20</p></span>
            </div>
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
            bg-blue-600 text-white tablet:w-32 my-2 py-4
            "
          >
            Next {">"}
          </button>
        </div>
      </div>
  )
}

export default ConsumerFeedback2