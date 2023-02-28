import React from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {TfiSearch} from "react-icons/tfi";
import {IoMdMic} from "react-icons/io";
import {IoIosNotificationsOutline} from "react-icons/io"
import { toggleMenu } from '../utils/Appslice';
import { useDispatch } from 'react-redux';


const Header = () => {
  const dispatch = useDispatch()
    const handleToggleMenu =()=>{
              dispatch(toggleMenu())
    }
  return (
    <div className='flex justify-center gap-7 py-5'>
        <button onClick={()=>handleToggleMenu()}>
        <AiOutlineMenu size="1.5rem" className='my-auto'></AiOutlineMenu>
        </button>
        <img  className="w-24 h-10" src='https://res.cloudinary.com/dybiiddob/image/upload/v1677557806/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo_jq0dnk.png' alt='logo'></img>
        <form className='flex justify-center w-2/3'>
            <input type="text" placeholder='Search' className='border w-[70%] ml-2 rounded-l-2xl placeholder:pl-4 placeholder:text-lg'/>
            <button className='border rounded-r-2xl px-4 bg-gray-100'><TfiSearch size="1.3rem"></TfiSearch></button>
            <IoMdMic className='ml-2 my-auto' size="1.3rem"></IoMdMic>
        </form>
        
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="w-9 h-9" ><g class="style-scope yt-icon"><path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z" class="style-scope yt-icon"></path></g></svg>
        <IoIosNotificationsOutline size="2rem"></IoIosNotificationsOutline>
        <div className='w-10 h-10 rounded-full bg-gray-100'></div>
    </div>
  )
}

export default Header