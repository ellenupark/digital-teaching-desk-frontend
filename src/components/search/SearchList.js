import React from 'react';
import { Link } from "react-router-dom";
import './SearchList.css';

const SearchList = (props) => {
    return (
        <div className='search-list-container'>
            <h3>Results</h3>
            <div className="search-list-items">
                {props.content.map((item, index) => {
                        return (
                            <h5 key={index}>
                                <Link to={`/${item.media_type}s/${item.id}`}>{item.title}</Link>
                            </h5>
                        );
                })}
            </div>
        </div>
    );
};

export default SearchList;