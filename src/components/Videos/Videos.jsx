import React, { use } from 'react';
import Video from './Video';

const Videos = ({promiseVideos , activeCategory}) => {

    const fetchVideos = use(promiseVideos)
    const videos = fetchVideos.videos
    // console.log(videos);
    
    console.log(videos);
    

    const filteredVideos = activeCategory === "All" ? videos : videos.filter(video => video.category_id === activeCategory )
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
                filteredVideos.map(video => <Video key={video.video_id} video={video}></Video>)
            }
        </div>
    );
};

export default Videos;