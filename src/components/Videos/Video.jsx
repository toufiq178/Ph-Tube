import React from "react";
import Profile from "./Profile";

const Video = ({ video }) => {


    // const authors = video.authors

    // const author = authors.map(author => )


  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white ">
      <img
        className="w-full h-52 object-cover"
        src={video.thumbnail}
        alt="UI UX"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 leading-snug">
          {video.title}
        </h2>

        {
            video.authors.map((author , index) => <Profile key={index} author={author}></Profile>)
        }

        <p className="text-sm text-gray-500 mt-2">{video.others.views}</p>
      </div>
    </div>
  );
};

export default Video;
