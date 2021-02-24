import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SearchForm.css'

const SearchForm = (props) => {
    const [complexity, setComplexity] = useState('')
    const [resource, setResource] = useState([])
    const [minGroupSize, setMinGroupSize] = useState('')
    const [maxGroupSize, setMaxGroupSize] = useState('')
    const [ageRange, setAgeRange] = useState([])

    const handleChange = (event, update, filterItem) => {
        let attribute = event.target.value
        filterItem === 'complexity' && props.filterData(attribute, minGroupSize, maxGroupSize, resource, ageRange)
        filterItem === 'min-group-size' && props.filterData(complexity, attribute, maxGroupSize, resource, ageRange)
        filterItem === 'max-group-size' && props.filterData(complexity, minGroupSize, attribute, resource, ageRange)
        update(attribute)
    }

    const handleCheckBoxChange = (event, setState, currentState, filterItem) => {
        let attribute = event.target.name
        let allAttributes = currentState.includes(attribute) ? currentState.filter(data => data !== attribute) : [...currentState, attribute]
        
        filterItem === 'resource' && props.filterData(complexity, minGroupSize, maxGroupSize, allAttributes, ageRange)
        filterItem === 'age' && props.filterData(complexity, minGroupSize, maxGroupSize, resource, allAttributes)

        currentState.includes(attribute) ? setState(currentState.filter(data => data !== attribute)) : setState([...currentState, attribute])
    }

    const clearFormInputs = () => {
        document.getElementById("search-form").reset();
        setComplexity('');
        setResource([]);
        setMinGroupSize('');
        setMaxGroupSize('');
        setAgeRange([]);
        props.filterData('', '', '', [], [])
    }

    return (
        <Form id="search-form">
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Complexity Level</Form.Label>
                <Form.Control onChange={(event) => handleChange(event, setComplexity, 'complexity')} as="select" size="sm" custom>
                    <option>Any</option>
                    <option>Minimal Learning Curve</option>
                    <option>Moderate Learning Curve</option>
                    <option>Steep Learning Curve</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Resource Requirements</Form.Label><br />
                    <Form.Check 
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource, 'resource')}
                        custom
                        inline
                        label="Laptop"
                        type='checkbox'
                        id={`resource-checkbox-1`}
                        name='Laptop'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource, 'resource')}
                        custom
                        inline
                        label="Phone"
                        type='checkbox'
                        id={`resource-checkbox-2`}
                        name='Phone'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource, 'resource')}
                        custom
                        inline
                        label="Headphones"
                        type='checkbox'
                        id={`resource-checkbox-3`}
                        name='Headphones'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource, 'resource')}
                        custom
                        inline
                        label="Tablet"
                        type='checkbox'
                        id={`resource-checkbox-4`}
                        name="Tablet"
                    />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Minimum Group Size</Form.Label>
                <Form.Control  onChange={(event) => handleChange(event, setMinGroupSize, 'min-group-size')} as="select" size="sm" custom>
                    <option>Any</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Maximum Group Size</Form.Label>
                <Form.Control  onChange={(event) => handleChange(event, setMaxGroupSize, 'max-group-size')} as="select" size="sm" custom>
                    <option>Any</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Recommended Age</Form.Label><br />
                    <Form.Check 
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange, 'age')}
                        custom
                        inline
                        label="1-3"
                        type='checkbox'
                        id={`age-checkbox-1`}
                        name='1-3'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange, 'age')}
                        custom
                        inline
                        label="3-5"
                        type='checkbox'
                        id={`age-checkbox-2`}
                        name='3-5'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange, 'age')}
                        custom
                        inline
                        label="5-8"
                        type='checkbox'
                        id={`age-checkbox-3`}
                        name='5-8'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange, 'age')}
                        custom
                        inline
                        label="9-12"
                        type='checkbox'
                        id={`age-checkbox-4`}
                        name="9-12"
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange, 'age')}
                        custom
                        inline
                        label="13 and over"
                        type='checkbox'
                        id={`age-checkbox-5`}
                        name="13 and over"
                    />
            </Form.Group>
            <Button onClick={clearFormInputs} variant="secondary" size="lg">Clear</Button>
        </Form>
    );
};

export default SearchForm;