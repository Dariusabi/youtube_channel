import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ results }) => {
    return (
        <div className="video">
            {
                results.map((video, i) => {
                    return <VideoItem key={i} video={video} />
                })   
            }
        </div>
    )
};

export default VideoList;
