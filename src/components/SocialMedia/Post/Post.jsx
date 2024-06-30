import React, { useState } from 'react';
import '../../../assets/css/socialMedia/post.css';
import postImg1 from '../../../assets/images/img1.png';
import postImg2 from '../../../assets/images/img2.png';
import dp from '../../../assets/images/noavatar.png';
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; 
import FavoriteIcon from '@mui/icons-material/Favorite';  
import TagFacesIcon from '@mui/icons-material/TagFaces';  
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SaveIcon from '@mui/icons-material/Bookmarks';
import HideIcon from '@mui/icons-material/HideSource';
import ReportIcon from '@mui/icons-material/Report';
import ManageIcon from '@mui/icons-material/ArrowDropDownCircle';
import { PhotoGrid } from './PhotoGrid';

export function Post() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const photos = [postImg1, postImg2, postImg1, postImg2];

  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
          <img src={dp} alt="" className="postImage" />
          <span className="postUserName">Chamodya Ganegamage</span> 
          <span className="postTime">5 mins ago</span>
          <button className='topButton' onClick={handleClick}>
            <MoreVertIcon />
          </button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} className='onClick'><SaveIcon/> Save Post </MenuItem>
            <MenuItem onClick={handleClose} className='onClick'><HideIcon/> Hide Post </MenuItem>
            <MenuItem onClick={handleClose} className='onClick'><ReportIcon/> Report Post </MenuItem>
            <MenuItem onClick={handleClose} className='onClick'><ManageIcon/> Manage Your Feed </MenuItem>
          </Menu>
        </div>
        <div className="postCenter">
          <div className="postCaption">
            This is INDUSTPRO 3.0 Final Phase.
          </div>
           <PhotoGrid photos={photos} /> 
        </div>
        <div className="postActions">
          <button className="actionButton">
            <ThumbUpIcon /> Like
          </button>
          <button className="actionButton">
            <CommentIcon /> Comment
          </button>
          <button className="actionButton">
            <ShareIcon /> Share
          </button>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUpIcon htmlColor='blue' className='reactionPic' />
            <FavoriteIcon htmlColor='red' className='reactionPic'/>
            <TagFacesIcon htmlColor='yellow' className='reactionPic'/>
            <span className='likeCount'>225 people</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">
              15 comments   20 Share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

