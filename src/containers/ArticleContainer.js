import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from '../components/Video';

const ArticleContainer = ({ match }) => {
    const {
      params: { articleId },
    } = match;
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect(() => {
      fetch(`http://localhost:3000/contents/${articleId}`)
        .then((res) => res.json())
        .then((response) => {
            setData(response);
            setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, [articleId]);
  
  
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
            {!!data.instructions.length && data.instructions.map((step, index) => (
                    <div key={index}>
                        <h3>Step {index + 1}</h3>
                        <p>{step.summary}</p>
                        {!!step.steps.length && step.steps.map((part, index) => (
                            <div key={index}>
                                <h4>Part {index + 1}</h4>
                                <p>{part.description}</p>
                            </div>
                        ))}
                    </div>
                ))
            }
            <h2>Resource Requirements: {data['resource_requirement'].join(', ')}</h2>
            <Link to="/">Back to homepage</Link>
          </>
        )}
      </>
    );
  };

export default ArticleContainer;