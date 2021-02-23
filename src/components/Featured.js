import React from 'react';
import { useHistory } from "react-router-dom";
import './Featured.css';

const Featured = (props) => {
    const history = useHistory();

    const routeChange = () =>{ 
        let path = `articles/${props.content.id}`; 
        history.push(path);
    }

    return (
        <div className='featured-container'>
            <div className='content-text' onClick={routeChange} >
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='featured-image'>
                <img src={props.content['image_url']} alt='article' />
            </div>
        </div>
    );
};

export default Featured;