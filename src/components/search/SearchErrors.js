import React from 'react';
import './SearchErrors.css';

const SearchErrors = (props) => {
    return (
        <div className='error-display'>
           {React.Children.toArray(
               props.errors.map(error => <p>{error}</p>)
           )}
        </div>
    );
};

export default SearchErrors;