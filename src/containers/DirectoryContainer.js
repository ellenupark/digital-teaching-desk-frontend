import React, { useState, useEffect } from 'react';
import SearchForm from '../components/search/SearchForm'
import SearchList from '../components/search/SearchList'
import SearchErrors from '../components/search/SearchErrors'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DirectoryContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);
    const [errors, setErrors] = useState([])


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
        errors.length > 0 && setErrors([])
        parseInt(minGroup) > parseInt(maxGroup) ? setErrors(['Maximum group size must be larger than minimum group size.']) : setSearchData(data.filter(content => {
            let complexityFilter = content.complexity_level === complexity || content.complexity_level === 'Any' || complexity === 'Any' || complexity === ""
            let minGroupFilter = parseInt(content.min_group_size) <= parseInt(minGroup) || content.min_group_size === 'Any' || minGroup === "" || minGroup === 'Any'
            let maxGroupFilter = parseInt(content.max_group_size) <= parseInt(maxGroup) || content.max_group_size === 'Any' || maxGroup === "" || maxGroup === 'Any'
            let resourceFilter = resource.every(r => resource.length > 0 ? content.resource_requirement.includes(r) : r)
            let ageFilter = age.every(a => age.length > 0 ? content.age_range.includes(a) : a)
            return complexityFilter && minGroupFilter && maxGroupFilter && resourceFilter && ageFilter;
        }))
        

        // let newData;
        // if (!!complexity && complexity !== 'Any') {
        //     newData = data.filter(content => content.complexity_level === complexity)
        // } else if (complexity === 'Any') {
        //     newData = data
        // }
        // if (!!minGroup && minGroup !== 'Any') {
        //     if (newData !== undefined) {
        //         newData = newData.filter(content => {
        //             if (content.min_group_size === 'Any') {
        //                 return content
        //             } else {
        //                 return parseInt(content.min_group_size) >= parseInt(minGroup)
        //             }
        //         })
        //     } else {
        //         newData = data.filter(content => {
        //             if (content.min_group_size === 'Any') {
        //                 return content
        //             } else {
        //                 return parseInt(content.min_group_size) >= parseInt(minGroup)
        //             }
        //         })
        //     }
        // } else if (minGroup === 'Any') {
        //     newData = data
        // }
        // if (!!maxGroup && maxGroup !== 'Any') {
        //     if (newData !== undefined) {
        //         newData = newData.filter(content => {
        //             if (content.max_group_size === 'Any') {
        //                 return content
        //             } else {
        //                 return parseInt(content.max_group_size) <= parseInt(maxGroup)
        //             }
        //         })
        //     } else {
        //         newData = data.filter(content => {
        //             if (content.max_group_size === 'Any') {
        //                 return content
        //             } else {
        //                 return parseInt(content.maxGroup) <= parseInt(maxGroup)
        //             }
        //         })
        //     }
        // } else if (maxGroup === 'Any') {
        //     newData = data
        // }

        // if (resource.length > 0) {
        //     newData !== undefined ? newData = newData.filter(content => resource.every(r=> content.resource_requirement.includes(r))) : newData = data.filter(content => resource.every(r=> content.resource_requirement.includes(r)))
        // }
        // if (age.length > 0) {
        //     newData !== undefined ? newData = newData.filter(content => age.every(r=> content.age_range.includes(r))) : newData = data.filter(content => age.every(r=> content.age_range.includes(r)))
        // }
        // newData !== undefined ? setSearchData(newData) : setSearchData(data)
    }

    return (
        <>
            {!isLoading &&
                <Container fluid="md">
                    <Row>
                        <Col>
                            <SearchForm filterData={filterData}/>
                            {errors.length > 0 && <SearchErrors errors={errors} />}
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