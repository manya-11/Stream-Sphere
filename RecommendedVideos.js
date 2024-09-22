import React from 'react'
import VideoCard from './VideoCard';
import "./RecommendedVideos.css";

function RecommendedVideos() {
  return (
    <div>
      <div className=" recommendedVideos">
          <h2>Recommended</h2>
          <div className= "recommendedVideos_videos">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>

          </div>
      </div>
    </div>
  )
}

export default RecommendedVideos
