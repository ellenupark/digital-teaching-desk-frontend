import React from 'react';
import './SearchList.css';
import SearchListItem from './SearchListItem';

const SearchList = (props) => {
    return (
        <div className='search-list-container'>
            <h3>Results</h3>
            <div className="search-list-items">
                {React.Children.toArray(
                    props.content.map(item => {
                        return <SearchListItem id={item.id} image={item['image_url']} title={item.title} />
                    })
                )}
            </div>
        </div>
    );
};

export default SearchList;