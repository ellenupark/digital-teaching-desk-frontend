import React from 'react';
import './FeaturedList.css';
import FeaturedListItem from './FeaturedListItem'

const FeaturedList = (props) => {
    return (
        <div className='explore-list'>
            <h2>Natural World</h2>
            <div className="natural-world list-item" >
                {React.Children.toArray(
                    props.contents.map(content => {
                        if (content.subject.includes('Natural World')) {
                            return (
                                <FeaturedListItem content={content} />
                            )
                        } else {
                            return <nil />
                        }
                    })
                )}
            </div>
        </div>
    );
};

export default FeaturedList;