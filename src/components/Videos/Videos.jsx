import React, { use } from 'react';
import Video from './Video';

const Videos = ({promiseVideos}) => {

    const fetchVideos = use(promiseVideos)
    const videos = fetchVideos.videos
    // console.log(videos);
    
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                videos.map(video => <Video key={video.video_id} video={video}></Video>)
            }
        </div>
    );
};

export default Videos;