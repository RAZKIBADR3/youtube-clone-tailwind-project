import React from "react";
import { PUBLIC_URL } from "../App";

const Card = ({e}) => {
    return(
        <div className="my-4 w-[410px] min-h-[35vh] border-gray-600 rounded-tr-[5%] rounded-tl-[5%]">
            <div className="thumb relative w-[410px]">
                <img src={PUBLIC_URL + e.thumb} alt="thumbnail" className="w-[410px] rounded-[5%]"/>
                <span className="bg-black font-semibold absolute right-[5px] bottom-[5px] text-white text-[13px] rounded-sm px-[5px]">{e.time}</span>
            </div>
            <div className="flex justify-around min-h-20">
                <div className="w-[12%] h-16 flex justify-center items-center">
                    <img src={e.channelLogo} alt="channel logo" className="w-[85%] rounded-full"/>
                </div>
                <div className="w-[86%] p-2">
                    <p className="text-white font-semibold leading-5">{e.title}</p>
                    <p className="text-gray-300 mt-1 font-semibold leading-5">{e.channelName}</p>
                    <p className="text-gray-300 mt-1 font-semibold">
                        <span>{e.views} views</span> • <span>{e.dateP}</span></p>
                </div>
            </div>
        </div>
    );
}

export default Card;