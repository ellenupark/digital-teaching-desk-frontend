import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SearchForm = (props) => {
    const [complexity, setComplexity] = useState('')
    const [resource, setResource] = useState([])
    const [minGroupSize, setMinGroupSize] = useState('')
    const [maxGroupSize, setMaxGroupSize] = useState('')
    const [ageRange, setAgeRange] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
  
        // this.props.submitForm(this.state)
        // this.setState({itemName: ""})
    }

    const handleChange = (event, update, filterItem) => {
        let attribute = event.target.value
        filterItem === 'complexity' && props.filterData(attribute, minGroupSize, maxGroupSize, resource, ageRange)
        filterItem === 'min-group-size' && props.filterData(complexity, attribute, maxGroupSize, resource, ageRange)
        filterItem === 'max-group-size' && props.filterData(complexity, minGroupSize, attribute, resource, ageRange)
        update(attribute)
    }
  
    // const handleChange = (event, update, filterItem) => {
    //     let attribute = event.target.value
    //     props.filterData(attribute, filterItem)
    //     update(attribute)
    // }

    const handleCheckBoxChange = (event, setState, currentState, filterItem) => {
        let attribute = event.target.name
        // event.target.checked ? attribute = event.target.name : attribute = "";
        let allAttributes = currentState.includes(attribute) ? currentState.filter(data => data !== attribute) : [...currentState, attribute]
        filterItem === 'resource' && props.filterData(complexity, minGroupSize, maxGroupSize, allAttributes, ageRange)
        filterItem === 'age' && props.filterData(complexity, minGroupSize, maxGroupSize, resource, allAttributes)
        // props.filterData(attribute, filterItem)
        currentState.includes(attribute) ? setState(currentState.filter(data => data !== attribute)) : setState([...currentState, attribute])
    }

    return (
        <Form>
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
            <Button type="submit" variant="primary" size="lg">Submit</Button>{' '}
            <Button variant="secondary" size="lg">Clear</Button>
        </Form>
        // <form onSubmit={(event) => this.handleSubmit(event)}>
        //     <label>Complexity Level</label>
        //     <input type="text" onChange={(event) => handleChange(event, setComplexity)} value={complexity} name="complexity"/><br />
        //     <label>Resource Requirement</label>
        //     <input type="text" onChange={(event) => handleChange(event, setResource)} value={resource} name="resource"/><br />
        //     <label>Group Size</label>
        //     <input type="text" onChange={(event) => handleChange(event, setGroupSize)} value={groupSize} name="groupSize"/><br />
        //     <label>Age Range</label>
        //     <select id="cars" name="cars" size="4" multiple>
        //         <option value="volvo">Volvo</option>
        //         <option value="saab">Saab</option>
        //         <option value="fiat">Fiat</option>
        //         <option value="audi">Audi</option>
        //     </select>
        //     <input type="text" onChange={(event) => handleChange(event, setAgeRange)} value={ageRange} name="ageRange"/><br />
        //     <input type="submit"/>
        // </form>

    );
};

export default SearchForm;