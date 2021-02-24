import React from 'react';
import './SubjectList.css';
import SubjectListItem from './SubjectListItem'

const SubjectList = (props) => {
    return (
        <div className='explore-list'>
            <h2>Natural World</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => content.subject.includes('Natural World') ? <SubjectListItem content={content} /> : null)
                )}
            </div>
            <h2>Puzzles</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => content.subject.includes('Puzzles') ? <SubjectListItem content={content} /> : null)
                )}
            </div>  
            <h2>Break Time</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => content.subject.includes('Break Time') ? <SubjectListItem content={content} /> : null)
                )}
            </div>
            <h2>Coding</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => content.subject.includes('Coding') ? <SubjectListItem content={content} /> : null)
                )}
            </div>
        
        </div>
    );
};

export default SubjectList;