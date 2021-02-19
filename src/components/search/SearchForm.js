import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

const SearchForm = () => {
    const [complexity, setComplexity] = useState('')
    const [resource, setResource] = useState([])
    const [groupSize, setGroupSize] = useState('')
    const [ageRange, setAgeRange] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
  
        // this.props.submitForm(this.state)
        // this.setState({itemName: ""})
    }
  
    const handleChange = (event, update) => {
        let attribute = event.target.value
        update(attribute)
    }

    const handleCheckBoxChange = (event, setState, currentState) => {
        let attribute = event.target.name
        currentState.includes(attribute) ? setState(currentState.filter(data => data !== attribute)) : setState([...currentState, attribute])
    }

    return (
        <Form>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Complexity Level</Form.Label>
                <Form.Control onChange={(event) => handleChange(event, setComplexity)} as="select" size="sm" custom>
                    <option>Minimal Learning Curve</option>
                    <option>Moderate Learning Curve</option>
                    <option>Steep Learning Curve</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Resource Requirements</Form.Label>
                    <Form.Check 
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource)}
                        custom
                        inline
                        label="Laptop"
                        type='checkbox'
                        id={`custom-inline-checkbox-1`}
                        name='Laptop'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource)}
                        custom
                        inline
                        label="Phone"
                        type='checkbox'
                        id={`custom-inline-checkbox-2`}
                        name='Phone'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource)}
                        custom
                        inline
                        label="Headphones"
                        type='checkbox'
                        id={`custom-inline-checkbox-3`}
                        name='Headphones'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setResource, resource)}
                        custom
                        inline
                        label="Tablet"
                        type='checkbox'
                        id={`custom-inline-checkbox-4`}
                        name="Tablet"
                    />
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Group Size</Form.Label>
                <Form.Control  onChange={(event) => handleChange(event, setGroupSize)} as="select" size="sm" custom>
                    <option>1 to 2</option>
                    <option>3 to 4</option>
                    <option>5 or more</option>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                <Form.Label>Age Range</Form.Label>
                    <Form.Check 
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange)}
                        custom
                        inline
                        label="K-1"
                        type='checkbox'
                        id={`custom-inline-checkbox-1`}
                        name='K-1'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange)}
                        custom
                        inline
                        label="K-2"
                        type='checkbox'
                        id={`custom-inline-checkbox-2`}
                        name='K-2'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange)}
                        custom
                        inline
                        label="K-3"
                        type='checkbox'
                        id={`custom-inline-checkbox-3`}
                        name='K-3'
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange)}
                        custom
                        inline
                        label="K-4"
                        type='checkbox'
                        id={`custom-inline-checkbox-4`}
                        name="K-4"
                    />
                    <Form.Check
                        onChange={(event) => handleCheckBoxChange(event, setAgeRange, ageRange)}
                        custom
                        inline
                        label="K-5"
                        type='checkbox'
                        id={`custom-inline-checkbox-5`}
                        name="K-5"
                    />
            </Form.Group>
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