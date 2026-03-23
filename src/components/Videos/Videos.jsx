import React, { use } from 'react';

const Videos = ({promiseVideos}) => {

    const fetchVideos = use(promiseVideos)
    const videos = fetchVideos.videos
    console.log(videos);
    
    
    return (
        <div>
            
        </div>
    );
};

export default Videos;