import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Video from '../../components/Video';
import './ArticleContainer.css'

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
            <div className='article-page'>
              <div className='article-body'>
                <h1>{data.title}</h1>
                {!!data['image_url'] && (
                    <img src={data['image_url']} alt="Lesson" />
                )}
                {!!data['video_url'] && (
                    <Video videoUrl={data['video_url']} />
                )}
                <p className='description'>{data.description}</p>
                {!!data.instructions.length && React.Children.toArray(data.instructions.map((step, index) => (
                        <>
                          <div className="article-step">
                            <h3>Step {index + 1}</h3>
                            <p>{step.summary}</p>
                          </div>
                          <div className="article-part">
                            {!!step.steps.length && React.Children.toArray(step.steps.map((part, index) => (
                              <>
                                <h4>Part {index + 1}</h4>
                                <p>{part.description}</p>
                              </>
                            )))}
                          </div>
                        </>
                    )))
                }
                <h2>Resource Requirements: {data['resource_requirement'].join(', ')}</h2>
                <Link to="/">Back to homepage</Link>
              </div>
              <div className='details'>
                <h2>Hello</h2>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

export default ArticleContainer;