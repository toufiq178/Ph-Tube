import React from 'react';
import verify from"../../assets/verify.png"

const Profile = ({author}) => {

    // console.log(author);
    
    return (
        <div className="flex items-center mt-3 gap-2">
          <img
            className="w-8 h-8 rounded-full"
            src={author.profile_picture}
            alt="author"
          />
          <p className="text-sm font-medium text-gray-700">{author.profile_name}</p>

          <span className="text-blue-500 text-sm"> {author.verified && <img src={verify} alt="verified" className="" />}</span>
        </div>
    );
};

export default Profile;