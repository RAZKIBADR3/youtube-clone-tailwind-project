import React from "react";
import Card from "./Card";
import { objects } from "../data/objects";
import { topics } from "../data/topics";

const Interface = () => {
    return(
        <div className="w-[85%] min-h-[92vh] p-3">
            <div className="topics h-12 px-2 w-[100%] flex items-center">
                <span className="cursor-pointer mx-[6px] px-3 py-[6px] rounded-md bg-zinc-100">All</span>
                {topics.map(e=>
                    <span key={e.id} className="hover:bg-zinc-600 hover:0.5s cursor-pointer mx-[6px] px-3 py-[5px] rounded-md bg-zinc-800 text-white">{e.title}</span>
                )}
                <svg className="cursor-pointer w-5 h-5 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
            <div className="cards mt-2 h-fit flex flex-wrap justify-evenly">
                {objects.map(e=>
                    <Card key={e.id} e={e} />
                )}
            </div>
        </div>
    )
}

export default Interface;