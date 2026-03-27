import React, { use } from "react";
import Video from "./Video";
import EmptyVideo from "./EmptyVideo";

const Videos = ({ promiseVideos, activeCategory }) => {
  const fetchVideos = use(promiseVideos);
  const videos = fetchVideos.videos;
  // console.log(videos);

  console.log(videos);

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category_id === activeCategory);

  return (
    <div className=" container mx-auto min-h-[40vh] md:min-h-[50vh] lg:min-h-[60vh]">
      {filteredVideos.length === 0 ? (
        <EmptyVideo />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center px-5">
          {filteredVideos.map((video) => (
            <Video key={video.video_id} video={video}></Video>
          ))}
        </div>
      )}
    </div>
  );
};

export default Videos;
