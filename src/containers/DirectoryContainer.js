import React, { useState, useEffect } from 'react';
import SearchForm from '../components/search/SearchForm'
import SearchList from '../components/search/SearchList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DirectoryContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/contents")
        .then((res) => res.json())
        .then((response) => {
            setData(response);
            setSearchData(response)
            setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);

    function filterData(complexity, minGroup, maxGroup, resource, age) {
        let newData;
        if (!!complexity && complexity !== 'Any') {
            newData = data.filter(content => content.complexity_level === complexity)
        } else if (complexity === 'Any') {
            newData = data
        }
        if (!!minGroup && minGroup !== 'Any') {
            newData !== undefined ? newData = newData.filter(content => parseInt(content.min_group_size) >= parseInt(minGroup)) : newData = data.filter(content => parseInt(content.min_group_size) >= parseInt(minGroup))
        } else if (minGroup === 'Any') {
            newData = data
        }
        if (!!maxGroup && maxGroup !== 'Any') {
            newData !== undefined ? newData = newData.filter(content => content.max_group_size <= maxGroup) : newData = data.filter(content => content.max_group_size <= maxGroup)
        } else if (maxGroup === 'Any') {
            newData = data
        }

        if (resource.length > 0) {
            newData !== undefined ? newData = newData.filter(content => resource.every(r=> content.resource_requirement.includes(r))) : newData = data.filter(content => resource.every(r=> content.resource_requirement.includes(r)))
        }
        if (age.length > 0) {
            newData !== undefined ? newData = newData.filter(content => age.every(r=> content.age_range.includes(r))) : newData = data.filter(content => age.every(r=> content.age_range.includes(r)))
        }
        newData !== undefined ? setSearchData(newData) : setSearchData(data)

        // switch (filterItem) {
        //     case 'complexity':
        //         value !== 'Any' ? setSearchData(data.filter(content => content.complexity_level >= value)) : setSearchData(data);
        //         break;
        //     case 'min-group-size':
        //         value !== 'Any' ? setSearchData(data.filter(content => content.min_group_size >= value)) : setSearchData(data);
        //         break;
        //     case 'max-group-size':
        //         value !== 'Any' ? setSearchData(data.filter(content => content.max_group_size <= value)) : setSearchData(data);
        //         break;
        //     case 'resource':
        //         value ? setSearchData(data.filter(content => content.resource_requirement.includes(value))) : setSearchData(data);
        //         break;
        //     case 'age':
        //         value ? setSearchData(data.filter(content => content.age_range.includes(value))) : setSearchData(data);
        //         break;
        //     default:
        //         break;
        // }
    }

    return (
        <>
            {!isLoading &&
                <Container fluid="md">
                    <Row>
                        <Col>
                            <SearchForm filterData={filterData}/>
                        </Col>
                        <Col>
                            <SearchList content={searchData} />
                        </Col>
                    </Row>
                </Container> 
            }
        </>
    );
};

export default DirectoryContainer;