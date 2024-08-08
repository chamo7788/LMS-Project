import React, { useState } from 'react';
import "../../assets/css/Course/courseDiscuss.css";
import image1 from '../../assets/images/5142.jpg';
import { FaReply } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';



export function Discuss() {

  const [ setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div><br />
        <h1>Module 2</h1>
        <h2>Discuss and ask questions about Week 2</h2>


      <div className="Discuss_inputbox">
      <textarea
        className='Discuss_inputbox_input'
        onChange={handleChange}
        placeholder="Type something..."
        rows={1} 
      />
         <button className="ReplayDiscuss_message"  style={{ marginRight: '8px' }} >
         <FaPaperPlane style={{ marginRight: '8px' }} />Replay</button>
    </div>
         <br />
         
<h1> Post  </h1><br />

      <div className="Discuss_message">
        <div className='Discuss_div_image'>
        <img className='Discuss_image' src={image1} alt="the image" />
          <h3>This is the first comment in test one</h3>    
        </div> 

        <div className="Discuss_message_icon_button">
          <span  style={{ marginRight: '8px',margin:'10px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          <button className="ReplayDiscuss_message" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px', color: 'green', fontSize: '15px' }} /> Like</button>
          <button className="ReplayDiscuss_message" onClick={toggleVisibility}><FaReply style={{ marginRight: '8px' }} />Reply</button>
        </div>
      
     

      <div className={`Replay_maindev_message ${isVisible ? 'reply_main_visible' : 'reply_main_hidden'}`}>
      <div className="Replay_message">
      <div className='Discuss_div_image'>
        <img className='Discuss_image' src={image1} alt="the image" />

          <p>This is the first replay in test two</p>    
      
        </div>  
        <div className="Discuss_message_icon_button">
          <span  style={{ marginRight: '8px',margin:'10px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          <button className="ReplayDiscuss_message" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px', color: 'green', fontSize: '15px' }} /> Like</button>
        </div>
      
      </div>

      
      <div className="Replay_message">
      <div className='Discuss_div_image'>
      <img className='Discuss_image' src={image1} alt="the image" />
      
          <p>This is the first replay in test one</p>    
      </div>  
      <div className="Discuss_message_icon_button">
          <span  style={{ marginRight: '8px',margin:'10px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          <button className="ReplayDiscuss_message" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px', color: 'green', fontSize: '15px' }} /> Like</button>
        </div>
      
      </div> 

      <div className="Replay_message">
      <div className='Discuss_div_image'>
      <img className='Discuss_image' src={image1} alt="the image" />
          <p>This is the first replay in test ons the first replay in test ons the first replay in test one</p>    
      </div>  
      <div className="Discuss_message_icon_button">
          <span  style={{ marginRight: '8px',margin:'10px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          <button className="ReplayDiscuss_message" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px', color: 'green', fontSize: '15px' }} /> Like</button>
        </div>
      
      </div> 


      </div> 
      <div className={`CourseDiscuss_replayboxdiv ${isVisible ? 'reply_main_visible' : 'reply_main_hidden'}`}>

            <div className="Discuss_inputbox CourseDiscuss_replaybox">
            <textarea
        className='Discuss_inputbox_input'
        onChange={handleChange}
        placeholder="Type something..."
        rows={1} 
      />
         <button className="ReplayDiscuss_message"  style={{ marginRight: '8px' }} >
         <FaPaperPlane style={{ marginRight: '8px' }} />Send</button>
    </div>
        </div>
      
      </div> 
      <br />
    </div>
  );
}
