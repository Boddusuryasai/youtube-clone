import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiSearch } from "react-icons/tfi";
import { IoMdMic } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { toggleMenu } from "../utils/Appslice";
import { useDispatch ,useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { fetchAdditionalVideos } from "../utils/VideoSlice";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isVisible ,setIsVisible] = useState(false)
  const dispatch = useDispatch();
  const cachedResults = useSelector(store=>store.search)
  useEffect(() => {
     setIsVisible(true)
    const timer = setTimeout(()=>{
      if(cachedResults[searchQuery]){
        setSuggestions(cachedResults[searchQuery])  
       }
       else{
        getSearchSuggestions()
       }
   } , 200);
  

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = () => {
    fetch(YOUTUBE_SEARCH_API + searchQuery)
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data[1]);
        dispatch(cacheResults(
          {
            [searchQuery]:data[1]
          }
        ))
      });
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const handleSuggestionClick = (suggestionText) => {
    dispatch(fetchAdditionalVideos(suggestionText));
    setIsVisible(false)
     
  };
  
  return (
    <div className="flex justify-between gap-7 py-5 w-full bg-white fixed px-4">
      <button onClick={() => handleToggleMenu()}>
        <AiOutlineMenu size="1.5rem" className="my-auto"></AiOutlineMenu>
      </button>
      <img
        className="w-24 h-6 my-auto"
        src="https://res.cloudinary.com/dybiiddob/image/upload/v1677582147/youtube-logo_d0dmul.png"
        alt="logo"
      ></img>

      <form className="flex justify-center relative w-2/3" onSubmit={(e)=>{
         e.preventDefault()
         handleSuggestionClick(searchQuery)
      }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="border w-[100%]  rounded-l-3xl pl-6  placeholder:text-lg focus:outline-none"
        />
        <button className="border rounded-r-3xl px-4  bg-gray-100">
          <TfiSearch size="1.3rem"></TfiSearch>
        </button>
        <IoMdMic className="ml-2 my-auto" size="2rem" color="#262726"></IoMdMic>
        {suggestions.length > 0 &&  isVisible && (
          <div className="absolute top-full left-0 w-[90.3%] bg-white border rounded-3xl shadow-md">
            {suggestions.map((suggestion) => (
              <div
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-6 py-1 cursor-pointer hover:bg-gray-100"
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
      </form>

      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="w-9 h-9"
      >
        <g className="style-scope yt-icon">
          <path
            d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg>
      <span className="relative inline-block my-auto">
      <IoIosNotificationsOutline size="2rem" className="my-auto"></IoIosNotificationsOutline>
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">3</span>
       
      </span>
      
      <div className="w-10 h-10 rounded-full bg-gray-100"></div>
    </div>
  );
};

export default Header;
