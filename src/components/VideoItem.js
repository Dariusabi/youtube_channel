import React, {useState} from "react";

const VideoItem = ({video}) => {

    const frame = <img src={video.snippet.thumbnails.default.url}
                                              alt={video.snippet.description}/>;

    const [iframe, setIframe] = useState('');
    const handleChange = () => {
        setIframe(<iframe id="play" src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`} frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen/>)
    };

    return (
        <>
            <div className="container">
                <div id="image" onClick={handleChange}>
                    {frame}
                </div>
                <div id="title">
                    {video.snippet.title}
                </div>
                <button id="button" type="button" className="btn btn-warning">Save</button>
            </div>
            <div className="render">{iframe}</div>
        </>
    );
};

export default VideoItem;

