import React, {useState} from "react";

const VideoItem = ({video}) => {

    const [iframe, setIframe] = useState(<img src={video.snippet.thumbnails.default.url}
                                              alt={video.snippet.description}/>);

    const handleChange = () => {
        setIframe(<iframe src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`} frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>)
    };

    return (
        <>
            <div className="container">
                <div id="image" onClick={handleChange}>
                    {iframe}
                </div>
                <div id="title">
                    {video.snippet.title}
                </div>
                <button id="button" type="button" className="btn btn-warning">Save</button>
            </div>
        </>
    );
};

export default VideoItem;

