import React, { useState } from 'react';
import "../../../assets/css/socialMedia/createPost.css";
import dp from '../../../assets/images/5142.jpg';
import CloseIcon from '@mui/icons-material/Close';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LocationIcon from '@mui/icons-material/AddLocationAlt';
import TagIcon from '@mui/icons-material/LocalOffer';
import CollectionsIcon from '@mui/icons-material/Collections';
import TagFacesIcon from '@mui/icons-material/TagFaces';  

function CreatePost({ onClose }) {
  const [posted, setPosted] = useState(false);
  const [showPrivacyOptions, setShowPrivacyOptions] = useState(false);
  const [selectedPrivacy, setSelectedPrivacy] = useState('Friend');

  const handlePostClick = () => {
    setPosted(true);
  };

  const handlePrivacyClick = () => {
    setShowPrivacyOptions(!showPrivacyOptions);
  };

  const handlePrivacyChange = (event) => {
    setSelectedPrivacy(event.target.value);
    setShowPrivacyOptions(false);
  };

  const getPrivacyIcon = () => {
    switch (selectedPrivacy) {
      case 'Public':
        return <PublicIcon />;
      case 'Friend':
        return <PeopleIcon />;
      case 'FriendsExcept':
        return <PersonRemoveIcon />;
      case 'SpecificFriends':
        return <PersonIcon />;
      case 'OnlyMe':
        return <LockIcon />;
      default:
        return <PeopleIcon />;
    }
  };

  return (
    <div className='createPost'>
      <div className="topic">
        <button className='clossicon1'>
         <span className='clossicon' onClick={onClose}> Close </span>
        </button> 
        <span className='header'>Create Post</span>
        <button
          className={`PostButton ${posted ? 'posted' : ''}`}
          onClick={handlePostClick}
        >
          {posted ? 'Posted' : 'Post'}
        </button>
      </div>
      <div className="createTop">
        <img src={dp} alt="" className="createImage" />
        <span className="createUserName">Learn Hub</span> 
      </div>
      <div className="createTag">
        <button className='fButton' onClick={handlePrivacyClick}>
          <span>{selectedPrivacy}</span>
          {getPrivacyIcon()}
        </button>
        {showPrivacyOptions && (
          <div className="privacyOptions">
            <div className="privacyOption">
              <label>
                <input
                  type="radio"
                  value="Public"
                  checked={selectedPrivacy === 'Public'}
                  onChange={handlePrivacyChange}
                />
                <PublicIcon />
                Public
              </label>
            </div>
            <div className="privacyOption">
              <label>
                <input
                  type="radio"
                  value="Friend"
                  checked={selectedPrivacy === 'Friend'}
                  onChange={handlePrivacyChange}
                />
                <PeopleIcon />
                Friends
              </label>
            </div>
            <div className="privacyOption">
              <label>
                <input
                  type="radio"
                  value="FriendsExcept"
                  checked={selectedPrivacy === 'FriendsExcept'}
                  onChange={handlePrivacyChange}
                />
                <PersonRemoveIcon />
                Friends except...
              </label>
            </div>
            <div className="privacyOption">
              <label>
                <input
                  type="radio"
                  value="SpecificFriends"
                  checked={selectedPrivacy === 'SpecificFriends'}
                  onChange={handlePrivacyChange}
                />
                <PersonIcon />
                Specific friends
              </label>
            </div>
            <div className="privacyOption">
              <label>
                <input
                  type="radio"
                  value="OnlyMe"
                  checked={selectedPrivacy === 'OnlyMe'}
                  onChange={handlePrivacyChange}
                />
                <LockIcon />
                Only me
              </label>
            </div>
          </div>
        )}
      </div>
      <div className="createCenter">
        <input placeholder="What's on your mind..?" type="text" className="addPostInput2" />
      </div>
      <div className="createBottom">
        <button>
          <AddAPhotoIcon htmlColor='black' className='PIcon' />
        </button> 
        <button>
          <TagIcon htmlColor='blue' className='TIcon'/>
        </button>
        <button> 
          <TagFacesIcon htmlColor='orange' className='FIcon'/>
        </button>
        <button> 
          <LocationIcon htmlColor='red' className='LIcon'/>
        </button>
        <button> 
          <CollectionsIcon htmlColor='Green' className='CIcon'/>
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
