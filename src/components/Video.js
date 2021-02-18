import React from 'react'
import ReactPlayer from 'react-player'

const Video = (props) => {
    return (
        <>    
            <ReactPlayer 
                url={props.videoUrl} 
                playing={false}
                controls={true}
            />
        </>
    )
}

export default Video;