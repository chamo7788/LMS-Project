import React from 'react';
import "../../../assets/css/socialMedia/addPost.css";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocationIcon from '@mui/icons-material/AddLocationAlt';
import TagIcon from '@mui/icons-material/LocalOffer';
import LiveIcon from '@mui/icons-material/LiveTv';
import postImg from '../../../assets/images/noavatar.png';

export  function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src={postImg} alt="" className="addPostPic"/>
                <input placeholder="What's on your mind..?" type="text" className="addPostInput" />
            </div>
            <hr className='postHr'/>
            <div className="addPostBotton">
                <div className="addPostOptions">
                    <div className="addPostoption">
                       <AddAPhotoIcon htmlColor='orange' className='addPhoto'/>
                       <span className='addPostOptionText'>Add Photo/Video</span>
                    </div>
                    <div className="addPostoption">
                       <LocationIcon htmlColor='red'  className='addPhoto'/>
                       <span className='addPostOptionText'>Add Location</span>
                    </div>
                    <div className="addPostoption">
                       <TagIcon htmlColor='blue'  className='addPhoto'/>
                       <span className='addPostOptionText'>Add Tag</span>
                    </div>
                    <div className="addPostoption">
                       <LiveIcon htmlColor='tomato'  className='addPhoto'/>
                       <span className='addPostOptionText'>Go Live</span>
                    </div>
                </div>
                <button className='PostButton'>Post</button>
            </div>
        </div>     
    </div>
  );
}