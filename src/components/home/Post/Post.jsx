import React from 'react';
import '../../../assets/css/home/post.css';
import postImg from '../../../assets/images/img1.png';
import dp from '../../../assets/images/noavatar.png';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TagFacesIcon from '@mui/icons-material/TagFaces';

export function Post() {
  return (
    <div>
      <div className="post">
        <div className="postContainer">
          <div className="postTop">
            <img src={dp} alt="" className="postImage" />
            <span className="postUserName">Chamodya Ganegamage</span>
            <span className="postTime">5 mins ago</span>
          </div>
          <div className="postCenter">
            <div className="postCaption">
              Hello I am chamodya..............................................
            </div>  
              <img src={postImg} alt="" className="postedImage" />
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
                15 comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

