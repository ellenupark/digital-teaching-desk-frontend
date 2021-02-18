import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/contents")
        .then((res) => res.json())
        .then((response) => {
            setData(response);
            setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <>
      {!isLoading &&
        data.map((item, index) => {
          return (
            <h5 key={index}>
              <Link to={`/${item.media_type}s/${index + 1}`}>{item.title}</Link>
            </h5>
          );
        })}
    </>
  );
};

export default HomePage;