import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from '../components/Video';

const VideoContainer = ({ match }) => {
    const {
        params: { videoId },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    
    useEffect(() => {
        fetch(`http://localhost:3000/contents/${videoId}`)
            .then((res) => res.json())
            .then((response) => {
                setData(response);
                    setIsLoading(false);
                })
            .catch((error) => console.log(error));
    }, [videoId]);
    
    
    return (
        <>
          {!isLoading && (
            <>
              <h1>Title: {data.title}</h1>
              <h2>Description: {data.description}</h2>
              {!!data['image_url'] && (
                  <img src={data['image_url']} alt="Lesson" />
              )}
              {!!data['video_url'] && (
                  <Video videoUrl={data['video_url']} />
              )}
              {!!data.steps.length && data.steps.map((step, index) => (
                      <>
                          <h4>Step {index + 1}</h4>
                          <p>{step}</p>
                      </>
                  ))
              }
              <h2>Resource Requirements: {data['resource_requirement'].toString()}</h2>
              <Link to="/">Back to homepage</Link>
            </>
          )}
        </>
    );
};

export default VideoContainer;