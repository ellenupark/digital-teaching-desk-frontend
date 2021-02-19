import React, { useState, useEffect } from 'react';
import SearchForm from '../components/search/SearchForm'
import SearchList from '../components/search/SearchList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DirectoryContainer = () => {
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

    const filterData = () => {
        
    }

    return (
        <>
            {!isLoading &&
                <Container fluid="md">
                    <Row>
                        <Col>
                            <SearchForm />
                        </Col>
                        <Col>
                            <SearchList content={data} />
                        </Col>
                    </Row>
                </Container> 
            }
        </>
    );
};

export default DirectoryContainer;