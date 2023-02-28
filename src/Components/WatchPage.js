import React ,{ useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';

import { toggleMenu } from '../utils/Appslice'
const WatchPage = () => {
    const  dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"))
    useEffect(()=>{
         dispatch(toggleMenu())
    },[])
  return (
    <div className='px-6'>
          <iframe width="800" height="400" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default WatchPage