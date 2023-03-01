import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchVideos } from "../utils/VideoSlice";
import VideoCard from "./VideoCard";
import ShimmerUi from "./ShimmerUi";

const Videocontainer = () => {
  const dispatch = useDispatch();
  const { videos, loading, error } = useSelector((state) => state.videos);
  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (loading) {
    return <ShimmerUi/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="flex flex-wrap gap-5">
      {videos.map((video,i) => (
        <Link to={`/watch?v=${typeof video.id === "object" ? video.id.videoId : video.id}`} key={i}>
          <VideoCard videoInfo={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
