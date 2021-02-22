import React, { useState, useEffect } from "react";
import BackgroundImg from '../images/vector-creator.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './HomePage.css'

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
    <div className='home-page'>
        <h2>Online Collection of Teaching Resources</h2>
    </div>
  );
};

export default HomePage;