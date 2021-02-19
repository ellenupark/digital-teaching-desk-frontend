import React from 'react';
import { Link } from "react-router-dom";

const SearchList = (props) => {
    return (
        <>
            {props.content.map((item, index) => {
                    return (
                        <h5 key={index}>
                            <Link to={`/${item.media_type}s/${item.id}`}>{item.title}</Link>
                            <p>Min: {item.min_group_size} Max: {item.max_group_size}</p>
                        </h5>
                    );
            })}
        </>
    );
};

export default SearchList;