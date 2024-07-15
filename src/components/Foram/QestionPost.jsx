import React, { useState } from 'react';
import '../../assets/css/Foram/questionPost.css';
import dp from '../../assets/images/5142.jpg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SaveIcon from '@mui/icons-material/Bookmarks';
import HideIcon from '@mui/icons-material/HideSource';
import ReportIcon from '@mui/icons-material/Report';
import findAnswer from '../../data/findAnswer.json';
import CustomSlider from './CustomSlider';

export function QuestionPost() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [shareAnchorEl, setShareAnchorEl] = useState(null);
    const [showMore, setShowMore] = useState({});
    const [votes, setVotes] = useState(() => {
        const initialVotes = {};
        findAnswer.forEach((question) => {
            initialVotes[question.ContentID] = 0;
        });
        return initialVotes;
    });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleShowMore = (contentID) => {
        setShowMore((prevState) => ({
            ...prevState,
            [contentID]: !prevState[contentID],
        }));
    };

    const handleVote = (contentID, change) => {
        setVotes((prevVotes) => ({
            ...prevVotes,
            [contentID]: Math.max(prevVotes[contentID] + change, 0),
        }));
    };

    const handleShareClick = (event) => {
        setShareAnchorEl(event.currentTarget);
    };

    const handleShareClose = () => {
        setShareAnchorEl(null);
    };

    const handleCopyLink = (link) => {
        navigator.clipboard.writeText(link).then(() => {
            alert('Link copied to clipboard!');
            handleShareClose();
        }, () => {
            alert('Failed to copy link.');
        });
    };

    return (
        <>
            {findAnswer.map((question) => (
                <React.Fragment key={question.ContentID}>
                    <hr className='question-post-hr' />
                    <div className="question-post">
                        <div className="question-postTop">
                            <img src={dp} alt="" className="question-postImage" />
                            <span className="question-postUserName">Chamodya Ganegamage</span>
                            <span className="question-postTime">5 mins ago</span>
                            <button className='question-topButton' onClick={handleClick}>
                                <MoreVertIcon />
                            </button>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}><SaveIcon /> Save Post</MenuItem>
                                <MenuItem onClick={handleClose}><HideIcon /> Hide Post</MenuItem>
                                <MenuItem onClick={handleClose}><ReportIcon /> Report Post</MenuItem>
                            </Menu>
                        </div>
                        <div className="question-title">
                            <p>{question.questionTitle}</p>
                        </div>
                        <div className="question-content">
                            <p className={showMore[question.ContentID] ? '' : 'truncated-text'}>
                                {question["question-content"]}
                            </p>
                            <span
                                className="show-more"
                                onClick={() => toggleShowMore(question.ContentID)}
                            >
                                {showMore[question.ContentID] ? '...see less' : '...see more'}
                            </span>
                        </div>
                        <div className='question-post-footer'>
                            <div className="vote">
                                <i
                                    className='far fa-arrow-alt-circle-up'
                                    onClick={() => handleVote(question.ContentID, 1)}
                                ></i>
                                <p>{votes[question.ContentID]}</p>
                                <i
                                    className='far fa-arrow-alt-circle-down'
                                    onClick={() => handleVote(question.ContentID, -1)}
                                ></i>
                            </div>
                            <button className='share' onClick={handleShareClick}>
                                <i className="fa-solid fa-share"></i>
                                Share
                            </button>
                            <Menu
                                anchorEl={shareAnchorEl}
                                open={Boolean(shareAnchorEl)}
                                onClose={handleShareClose}
                            >
                                <MenuItem onClick={() => handleCopyLink(window.location.href)} className='copy-link'>Copy Link</MenuItem>
                            </Menu>
                            <button className='Reply'>
                                <i className="fa-regular fa-message"></i>
                                Reply
                            </button>
                        </div>
                        {question.images && question.images.length > 0 && (
                            <div className="image-slider">
                                <CustomSlider>
                                    {question.images.map((image, index) => (
                                        <img key={index} src={image.imgURL} alt={image.imgAlt} />
                                    ))}
                                </CustomSlider>
                            </div>
                        )}
                    </div>
                    <hr className='question-post-hr' />
                </React.Fragment>
            ))}
        </>
    );
}
