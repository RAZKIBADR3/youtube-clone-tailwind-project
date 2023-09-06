import React from "react";
import Card from "./Card";

const Interface = () => {
    const topics = [
        { id:0, title:'Music' },
        { id:1, title:'Mixes' },
        { id:2, title:'CSS' },
        { id:3, title:'Javascript' },
        { id:4, title:'PHP' },
        { id:5, title:'Live' },
        { id:6, title:'Gaming' },
        { id:7, title:'Alternative Rock' },
        { id:8, title:'Hard Rock' },
        { id:9, title:'Nu-Metal' },
        { id:10, title:'Lo-fi' },
        { id:11, title:'Computers' },
        { id:11, title:'Sport' },
    ]

    const objects = [
        {id:0, thumb:'img/Thumbnail/1.jpg', title:'Beest Songs Of G R E E N D A Y🍀 G R E E N D A Y Greatest Hits Full Album', channelLogo:'img/channel/1.jpg',
        channelName:'Alternative Rock Music', time:'1:36:11', views:'571K', dateP:'4 months ago'},
        {id:1, thumb:'img/Thumbnail/2.jpg', title:'Slipknot - Snuff [OFFICIAL VIDEO] [HD]', channelLogo:'img/channel/2.jpg',
        channelName:'Slipknot', time:'6:12', views:'160M', dateP:'13 years ago'},
        {id:2, thumb:'img/Thumbnail/3.jpg', title:'How to Use Putty pscp to Copy Files to/from a Remote Server', channelLogo:'img/channel/3.jpg',
        channelName:'Tony Teaches Tech', time:'7:53', views:'120K', dateP:'2 years ago'},
        {id:3, thumb:'img/Thumbnail/4.jpg', title:'nothing but memories.', channelLogo:'img/channel/4.jpg',
        channelName:'Lost Sounds', time:'1:03:31', views:'672K', dateP:'2 months ago'},
        {id:4, thumb:'img/Thumbnail/5.jpg', title:'10 Tailwind Tricks You NEED To Know!', channelLogo:'img/channel/5.jpg',
        channelName:'Ravi - Perfect Base', time:'10:44', views:'112K', dateP:'1 months ago'},
        {id:5, thumb:'img/Thumbnail/6.jpg', title:'React Native vs Flutter - I built the same chat app with both', channelLogo:'img/channel/6.jpg',
        channelName:'Fireship', time:'10:11', views:'1.5M', dateP:'1 year ago'},
    ]

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