import React, { useEffect, useState } from "react";
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
        videos.map((video, i) => {
          return  <VideoCard videoInfo={video} key={video.id}/>
         
        }):null}
    </div>
  );
};

export default Videocontainer;
