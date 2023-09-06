
const Header = () => {
    return(
        <header className="h-[8vh] px-4 flex justify-between items-center">
            <div className="leftside h-10 w-[170px] 
                flex justify-around items-center">
                <div className="menu h-6 w-7 flex 
                    flex-col justify-evenly items-center ">
                    <span className="h-[1.5px] w-5 bg-gray-300"></span>
                    <span className="h-[1.5px] w-5 bg-gray-300"></span>
                    <span className="h-[1.5px] w-5 bg-gray-300"></span>
                </div>
                
                <img src="icon/youtube.png" alt="logo" className="mt-0.5 w-[120px]" />
            </div>

            <div className="searchBar h-[7vh] w-[45%] flex justify-evenly items-center">
                <form className="h-[6vh] w-[90%] flex items-center">
                    <input type="text" placeholder="Search" className="focus:outline-none focus:border-zinc-400 text-white rounded-l-full h-[5.5vh] w-[88%] px-4
                        bg-[#121212] border border-zinc-800"/>
                    <button type="submit" className="h-[5.5vh] w-[11%] border border-transparent rounded-r-full bg-zinc-800 flex justify-center items-center">
                        <img src="icon/search.png" alt="search" className="w-[25px]"/>
                    </button>
                </form>
                <button className="w-10 h-10 rounded-full bg-zinc-800 flex justify-center items-center">
                    <img src="icon/microphone.png" alt="microphone" className="w-[14px]" />
                </button>
            </div>

            <div className="rightSide h-10 w-[13%] flex justify-evenly items-center">
                <img src="icon/create.png" alt="video" className="w-6" />
                <img src="icon/bell.png" alt="bell" className="w-5" />
                <img src="icon/profilePic.png" alt="profile" className="w-8 rounded-full" />
            </div>
        </header>
    );
}

export default Header;