import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackgroundImg from '../images/bg-6.png'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
    <Container fluid="md">
        <Row>
            <Col>
                {!isLoading &&
                    data.map((item, index) => {
                    return (
                        <h5 key={index}>
                            <Link to={`/${item.media_type}s/${item.id}`}>{item.title}</Link>
                        </h5>
                    );
                })}
            </Col>
            <Col>
                <img src={BackgroundImg} alt='Work Desk' />
            </Col>
        </Row>
    </Container>
  );
};

export default HomePage;