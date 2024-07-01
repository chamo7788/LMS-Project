import React, { useState } from 'react';
import "../../../assets/css/socialMedia/post.css";
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
  const [likes, setLikes] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [feels, setFeels] = useState(0);
  const [shares, setShares] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [reactions, setReactions] = useState({
    like: false,
    heart: false,
    feel: false,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLikeClick = () => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      like: !prevReactions.like,
    }));
    setLikes((prevLikes) => (reactions.like ? prevLikes - 1 : prevLikes + 1));
  };

  const handleReactionClick = (reaction) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [reaction]: !prevReactions[reaction],
    }));

    if (reaction === 'heart') {
      setHearts((prevHearts) => (reactions.heart ? prevHearts - 1 : prevHearts + 1));
    } else if (reaction === 'feel') {
      setFeels((prevFeels) => (reactions.feel ? prevFeels - 1 : prevFeels + 1));
    }
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (commentText.trim() !== '') {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  const toggleCommentForm = () => {
    setShowCommentForm((prevShowCommentForm) => !prevShowCommentForm);
  };

  const handleShareClick = () => {
    setShares(prevShares => prevShares + 1);
    alert('Please share this post!');
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
        <div className="postBottom">
          <div className="postBottomLeft">
            {reactions.like && <ThumbUpIcon htmlColor='blue' className='reactionPic' />}
            {reactions.heart && <FavoriteIcon htmlColor='red' className='reactionPic'/>}
            {reactions.feel && <TagFacesIcon htmlColor='yellow' className='reactionPic'/>}
            <span className='likeCount'>{likes} Like </span>
            <span className='reactionCount'>{hearts} Heart </span>
            <span className='reactionCount'>{feels} Feel </span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">
              {comments.length} Comment   {shares} Share
            </span>
          </div>
        </div>
        <div className="postActions">
          <button className="actionButton" onClick={handleLikeClick}>
            <ThumbUpIcon color={reactions.like ? 'primary' : 'inherit'} /> Like
          </button>
          <button className="actionButton" onClick={() => handleReactionClick('heart')}>
            <FavoriteIcon color={reactions.heart ? 'error' : 'inherit'} /> Heart
          </button>
          <button className="actionButton" onClick={() => handleReactionClick('feel')}>
            <TagFacesIcon color={reactions.feel ? 'warning' : 'inherit'} /> Feel
          </button>
          <button className="actionButton" onClick={toggleCommentForm}>
            <CommentIcon /> Comment
          </button>
          <button className="actionButton" onClick={handleShareClick}>
            <ShareIcon /> Share
          </button>
        </div>
        {showCommentForm && (
          <div className="postComments">
            <div className="commentsList">
              {comments.map((comment, index) => (
                <div key={index} className="comment">
                  <img src={dp} alt="" className="commentImage" />
                  <div className="commentText">{comment}</div>
                </div>
              ))}
            </div>
            <form className="commentForm" onSubmit={handleCommentSubmit}>
              <input 
                type="text" 
                placeholder="Write a comment..." 
                value={commentText} 
                onChange={handleCommentChange} 
                className="commentInput"
              />
              <button type="submit" className="commentButton"> Send </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}