import React, {useState, useEffect} from 'react';
import Featured from '../../components/Featured';
import FeaturedList from '../../components/FeaturedList';
import './ExploreContainer.css'

const ExploreContainer = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/contents")
        .then((res) => res.json())
        .then((response) => {
            setData(response);
            setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {!isLoading &&
                <div className='explore-container'>
                    <h2 className='featured-header'>Featured</h2>
                    <Featured content={data[Math.floor(Math.random() * data.length) + 1]} />
                    <FeaturedList contents={data} />
                </div>
            }
        </>
    );
};

export default ExploreContainer;