import React, { useEffect, useState } from "react";
import "./videosection.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const VideoSection = () => {
  const [videos, setVideos] = useState([
    // Your list of full video URLs
    {
      url: "https://www.youtube.com/watch?v=j0E9fwm_S2w",
      title:
        "Unbridled joy in the stands after winning the #IndianOilDurandCup2024! 🔥🦾",
    },
    {
      url: "https://www.youtube.com/watch?v=59nuTyw8J-0",
      title:
        "Defend Like Eze.🦾🧱Nigerian Wall of Steel Stephen Eze Return to Jamshedpur.",
    },
    {
      url: "https://www.youtube.com/watch?v=4rYh2WFKGAY",
      title:
        "First Interview Ft. Khalid Jamil, Khalid Jamil Extends His Journey with the Men of Steel.",
    },
    {
      url: "https://www.youtube.com/watch?v=d-7gRBhIb5c",
      title: "Jamshedpur Football Now Ft. Mohammed Sanan",
    },
  ]);

  const extractVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  };

  const getYoutubeThumbnail = (videoUrl) => {
    const videoId = extractVideoId(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const redirectToYoutube = (videoUrl) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="video-container">
      <div className="video-title">JFC Videos</div>
      <div className="video-tiles">
        {videos?.map((video, key) => {
          if (key < 8) {
            return (
              <div
                key={key}
                className="videodata-tiles"
                onClick={() => redirectToYoutube(video.url)}
              >
                <div className="videodata-tiles-img">
                  <LazyLoadImage
                    alt={video.title}
                    width="100%"
                    height="100%"
                    effect="blur"
                    src={getYoutubeThumbnail(video.url)}
                  />
                </div>
                <div className="videodata-tiles-data">
                  <text className="videodata-tiles-title">{video.title}</text>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default VideoSection;
