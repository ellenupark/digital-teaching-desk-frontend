import React from 'react';
import { useHistory } from "react-router-dom";

const SubjectListItem = (props) => {
    const history = useHistory();

    const routeChange = () => { 
        let path = `articles/${props.content.id}`; 
        history.push(path);
    }

    return (
        <div className="explore-list-item" onClick={routeChange} >
            <img src={props.content['image_url']} alt='natural world' />
            <p>{props.content.title}</p>
        </div>
    );
};

export default SubjectListItem;