import React, { useState, useEffect } from 'react';
import "../../../assets/css/socialMedia/createPost.css";
import dp from '../../../assets/images/5142.jpg';
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
  const [postedFiles, setPostedFiles] = useState([]);  
  const [showPrivacyOptions, setShowPrivacyOptions] = useState(false);
  const [selectedPrivacy, setSelectedPrivacy] = useState('Friend');
  const [postContent, setPostContent] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileUrls, setFileUrls] = useState([]);
  const [isPosted, setIsPosted] = useState(false);

  const handlePostClick = () => {
    const confirmPost = window.confirm('Are you sure you want to post this?');
    if (confirmPost) {
      const now = new Date();
      const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      
      alert('Posted this post!');

      setPostedFiles(prevFiles => [
        ...prevFiles,
        { content: postContent, files: fileUrls, timestamp }
      ]);

      setPostContent('');
      setSelectedFiles([]);
      setFileUrls([]);
      setIsPosted(true);  
      
      setTimeout(() => {
        setIsPosted(false);  
      }, 2000);
    }
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

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);

    if (files.length + selectedFiles.length > 10) {
      alert('You can only upload a maximum of 10 files.');
      return;
    }

    const validFiles = files.filter(file => file.type.startsWith('image/') || file.type.startsWith('video/'));

    setSelectedFiles(prevFiles => [...prevFiles, ...validFiles]);
    setFileUrls(prevUrls => [
      ...prevUrls,
      ...validFiles.map(file => URL.createObjectURL(file))
    ]);
  };

  const handleAddPhotoClick = () => {
    document.getElementById('file-input').click();
  };

  useEffect(() => {
    return () => {
      fileUrls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [fileUrls]);

  return (
    <>
      <div className="create-background-blur"></div>
      <div className='createPost'>
        <div className="topic">
          <button className='clossicon1'>
            <span className='clossicon' onClick={onClose}> Close </span>
          </button> 
          <span className='header'>Create Post</span>
          <button
            className={`PostButton ${isPosted ? 'posted' : ''}`}  
            onClick={handlePostClick}
          >
            {isPosted ? 'Posted' : 'Post'}
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
          <textarea 
            placeholder="What's on your mind..?" 
            rows="4" 
            cols="70"  
            className="addPostInput2" 
            value={postContent}  
            onChange={(e) => setPostContent(e.target.value)}  
          />
        </div>

        <div className="uploadedFilesContainer">
          <div className="uploadedFiles">
            {fileUrls.map((fileUrl, index) => (
              <div key={index} className="filePreview">
                {fileUrl.endsWith('.mp4') ? (  
                  <video controls className="fileVideo">
                    <source src={fileUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={fileUrl} alt={`Uploaded file ${index}`} className="fileImage" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="createBottom">
          <input
            type="file"
            id="file-input"
            style={{ display: 'none' }}
            accept="image/*,video/*" 
            multiple
            onChange={handleFileChange}
          />
          <button onClick={handleAddPhotoClick}>
            <AddAPhotoIcon htmlColor='white' className='PIcon' />
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
            <CollectionsIcon htmlColor='green' className='CIcon'/>
          </button>
        </div>

        <div className="postedFilesContainer">
          <div className="postedFiles">
            {postedFiles.map((post, postIndex) => (
              <div key={postIndex} className="postedFilePreview">
                <p>{post.content}</p>
                <p className="timestamp">{post.timestamp}</p>
                {post.files.map((fileUrl, fileIndex) => (
                  <div key={fileIndex} className="filePreview">
                    {fileUrl.endsWith('.mp4') ? (  
                      <video controls className="fileVideo">
                        <source src={fileUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img src={fileUrl} alt={`Posted file ${fileIndex}`} className="fileImage" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePost;

