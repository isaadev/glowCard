import React from "react";

const ProfileHeader = () => {

  return (
      <div id='Profile-container'
           className='
           flex justify-between self-center
           border-2  rounded-full
           desktop:w-desktop tablet:w-tablet w-96

           min-h-12 desktop:min-h-top tablet:min-h-top
           text-mobile desktop:text-desktop tablet:text-tablet
           '>

        <div id='profile-left' className="flex items-center justify-center desktop:ml-6 tablet:ml-6 ml-3">
          <p>Round </p>
          <span className="ml-1 p-1 px-2 bg-fuchsia-600 rounded-full">4/10</span>

          <div className="mx-2 desktop:mx-4 h-6 bg-gray-400 w-px"></div>

          <p>Budget </p>
          <span className='ml-1 p-1 px-2 bg-fuchsia-600 rounded-full'>$40</span>
        </div>

        <div id='profile-right' className="flex items-center justify-center desktop:mr-6 tablet:mr-6 mr-3">
          <p>Round </p> <span className="ml-1 p-1 px-2  bg-fuchsia-600 rounded-full">1</span>

          <div className="mx-2 h-6 bg-gray-400 w-px"></div>

          <p>Time </p><span className='ml-1 p-1 px-2 bg-fuchsia-600 rounded-full'>00:05:00</span>
        </div>
      </div>
  )
}

export default ProfileHeader