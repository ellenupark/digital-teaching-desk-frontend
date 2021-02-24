import React from 'react';
import './SubjectList.css';
import SubjectListItem from './SubjectListItem'

const SubjectList = (props) => {
    return (
        <div className='explore-list'>
            <h2>Natural World</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => {
                        if (content.subject.includes('Natural World')) {
                            return (
                                <SubjectListItem content={content} />
                            )
                        } else {
                            return <nil />
                        }
                    })
                )}
            </div>
            <h2>Puzzles</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => {
                        if (content.subject.includes('Puzzles')) {
                            return (
                                <SubjectListItem content={content} />
                            )
                        } else {
                            return <nil />
                        }
                    })
                )}
            </div>  
            <h2>Break Time</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => {
                        if (content.subject.includes('Break Time')) {
                            return (
                                <SubjectListItem content={content} />
                            )
                        } else {
                            return <nil />
                        }
                    })
                )}
            </div>
            <h2>Coding</h2>
            <div className="subject-list-item" >
                {React.Children.toArray(
                    props.contents.map(content => {
                        if (content.subject.includes('Coding')) {
                            return (
                                <SubjectListItem content={content} />
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

export default SubjectList;