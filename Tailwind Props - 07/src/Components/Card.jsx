import React from "react";
import { SlOptions } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { MdInsertComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

function Card( {username, postImage, logo="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s200x200&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_eui2=AeHPM6NAIMaFOUu2pko-i_8-Wt9TLzuBU1Ba31MvO4FTUDLkS26nr7zAGqt0TnF_WR2cgUsk52U9WPphXNQEX6q6&_nc_ohc=Bi2ci65_RAYQ7kNvgGtqdI8&_nc_zt=24&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AP14w_SmDQWQ3Ee1gXsmvYS&oh=00_AYBH9MdSnsdIOa2e170_AgjHxciv6rJZH6cbGv2aObeUpA&oe=674B433A"} ) {
  
  return (

    <div className="flex justify-center items-center">
      <div className="bg-[#CECCC8] w-[400px] p-4 rounded-lg shadow-lg shadow-gray-500/50">
        <div className="flex justify-between items-center cursor-pointer hover:opacity-80 transition-opacity duration-200">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Hamas Logo"
              className="h-[60px] w-[60px] rounded-full border-2 border-gray-300"
            />
            <div>
              <h3 className="text-lg font-semibold">{username}</h3>
              <span className="text-sm text-gray-600">30 min ago</span>
            </div>
          </div>
          <SlOptions />
        </div>
        <p className="mt-4 mb-4 text-gray-700 leading-relaxed">Hamas is a Palestinian armed group and political movement in the Gaza Strip. On 7 October 2023 it attacked Israel, killing about 1,200 people and taking more than 250 hostages.</p>

        <img src={postImage} alt="Post Image" className="post-photo" />

        <div className="flex justify-around items-center py-3 border-t border-gray-300 mt-4">
          <FcLike className="h-[30px] w-[30px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
          <MdInsertComment className="h-[30px] w-[30px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
          <IoIosShareAlt className="h-[30px] w-[30px] hover:scale-110 transition-transform duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Card