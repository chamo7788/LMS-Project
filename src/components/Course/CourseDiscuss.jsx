import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/Course/courseDiscuss.css";
import { FaPaperPlane, FaThumbsUp, FaReply } from 'react-icons/fa';
import image1 from '../../assets/images/5142.jpg';
import Image from 'react-bootstrap/Image';


export function Discuss() {

  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [likes, setLikes] = useState(0);
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div>
        <h2>Module 2</h2>
        <h4>Discuss and ask questions about Week 2</h4>


        <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" />
        <Button variant="outline-secondary" id="button-addon2">
          <FaPaperPlane style={{ marginRight: '8px' }} />Create a new post
        </Button>
         </InputGroup>
         <br />
         
<h1> Post  </h1><br />

      <div className="Discuss_message">
        <div className='Discuss_div_image'>
        <Image className='Discuss_image' src={image1} roundedCircle />
          <h5>This is the first comment in test one</h5>    
        </div> 


        <span  style={{ marginRight: '8px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
        <Button className='ReplayDiscuss_message' variant="outline-primary" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px' }} /> Like
        </Button> 
        <Button className='ReplayDiscuss_message' variant="outline-secondary" onClick={toggleVisibility}>
            <FaReply style={{ marginRight: '8px' }} /> Reply
          </Button>
     

      <div className={`Replay_maindev_message ${isVisible ? 'reply_main_visible' : 'reply_main_hidden'}`}>
      <div className="Replay_message">
      <div className='Discuss_div_image'>
      <Image className='Discuss_image' src={image1} roundedCircle />

          <p>This is the first replay in test two</p>    
      
        </div>  
        <span style={{ marginRight: '8px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span> 
        <Button className='ReplayDiscuss_message' variant="outline-primary" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px' }} /> Like
        </Button> 
      </div>

      
      <div className="Replay_message">
      <div className='Discuss_div_image'>
      <Image className='Discuss_image' src={image1} roundedCircle />
          <p>This is the first replay in test one</p>    
      </div>  
        <span style={{ marginRight: '8px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span> 
        <Button className='ReplayDiscuss_message' variant="outline-primary" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px' }} /> Like
        </Button> 
      </div> 

      <div className="Replay_message">
      <div className='Discuss_div_image'>
      <Image className='Discuss_image' src={image1} roundedCircle />
          <p>This is the first replay in test ons the first replay in test ons the first replay in test one</p>    
      </div>  
        <span style={{ marginRight: '8px' }}>{likes} {likes === 1 ? 'Like' : 'Likes'}</span> 
        <Button className='ReplayDiscuss_message' variant="outline-primary" onClick={handleLike}>
          <FaThumbsUp style={{ marginRight: '8px' }} /> Like
        </Button> 
      </div> 


      </div> 
      <div className={`CourseDiscuss_replayboxdiv ${isVisible ? 'reply_main_visible' : 'reply_main_hidden'}`}>
      <InputGroup className='CourseDiscuss_replaybox'>
            <Form.Control as="textarea" aria-label="With textarea" />
        <Button variant="outline-secondary" id="button-addon2">
          <FaPaperPlane style={{ marginRight: '8px' }} />Reply
        </Button>
         </InputGroup>
        </div>
      
      </div> 
      <br />
    </div>
  );
}
