import React from 'react';
import './SearchListItem.css'
import { useHistory } from "react-router-dom";

const SearchListItem = (props) => {
    const history = useHistory();

    const routeChange = () => { 
        let path = `articles/${props.id}`; 
        history.push(path);
    }

    return (
        <div className="search-list-item" onClick={routeChange} >
            <img src={props.image} alt='natural world' />
            <p>{props.title}</p>
        </div>
    );
};

export default SearchListItem;