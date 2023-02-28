import React from "react";

const VideoCard = ({ videoInfo }) => {
  const { snippet, statistics } = videoInfo;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-3 mt-2 w-72 shadow-md  overflow-hidden">
      <img
        src={thumbnails.medium.url}
        alt={title}
        className="rounded-lg w-full object-cover"
      />
      <div className="px-4 py-2">
        <h3 className="text-lg font-medium mb-1 line-clamp-2 truncate">{title}</h3>
        <p className="text-gray-600">{channelTitle}</p>
        <p className="text-gray-600">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoCard
