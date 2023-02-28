import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_URL);
    const videos = await data.json();
    setVideos(videos.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.length>0?
        videos.map((video) => {
          return <Link to={"/watch?v="+video.id} key={video.id}><VideoCard videoInfo={video} /></Link> 
         
        }):null}
    </div>
  );
};

export default Videocontainer;
