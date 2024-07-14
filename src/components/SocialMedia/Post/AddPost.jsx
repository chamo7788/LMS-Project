import React, { useState } from 'react';
import "../../../assets/css/socialMedia/addPost.css";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocationIcon from '@mui/icons-material/AddLocationAlt';
import TagIcon from '@mui/icons-material/LocalOffer';
import postImg from '../../../assets/images/5142.jpg';
import CreatePost from '../Post/CreatePost';

export function AddPost() {
  const [showCreatePost, setShowCreatePost] = useState(false);

  const handleAddPostInputClick = () => {
    setShowCreatePost(true);
  };

  const handleCloseCreatePost = () => {
    setShowCreatePost(false);
  };

  return (
    <div className='addPost'>
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src={postImg} alt="" className="addPostPic"/>
          <span className="addPostInput" onClick={handleAddPostInputClick}> What's on your mind?</span>
        </div>
        <hr className='postHr'/>
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption1">
              <AddAPhotoIcon htmlColor='orange' className='addPhoto'/>
              <span className='addPostOptionText'>Add Photo/Video</span>
            </div>
            <div className="addPostOption2">
              <LocationIcon htmlColor='red' className='addPhoto'/>
              <span className='addPostOptionText'>Add Location</span>
            </div>
            <div className="addPostOption3">
              <TagIcon htmlColor='blue' className='addPhoto'/>
              <span className='addPostOptionText'>Add Tag</span>
            </div>
          </div>
        </div>
      </div>     
      {showCreatePost && <CreatePost onClose={handleCloseCreatePost} />}
    </div> 
  );
}
