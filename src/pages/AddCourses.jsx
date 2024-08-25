import React, {useState} from "react";
import "../assets/css/addCourses.css";

export default function AddCourses() {

    //
    const [divs,
        setDivs] = useState([]);
    const addDiv = () => {
        setDivs([
            ...divs, {
                text: ` Module ${divs.length + 1}`,
                inputValue: ""
            }
        ]);
    };

    const handleInputChange = (index, event) => {
        const newDivs = [...divs];
        newDivs[index].inputValue = event.target.value;
        setDivs(newDivs);
    };

    //video
    const [v_divs,v_setDivs] = useState([]);
    const v_addDiv = () => {
      v_setDivs([...v_divs, {
                id: v_divs.length,
                videoUrl: null
            }
        ]);
    };

    const handlevideoChange = (v_index, v_event) => {
        const file = v_event.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            const updatedDivs = v_divs.map((v_div, i) => i === v_index
                ? {
                    ...v_div,
                    videoUrl
                }
                : v_div);
            v_setDivs(updatedDivs);
        }
    };

    const handleTextv_Change = (v_index, v_event) => {
        const v_text = v_event.target.value;
        const updatedDivs = divs.map((v_div, i) => i === v_index
            ? {
                ...v_div,
                v_text
            }
            : v_div);
        setDivs(updatedDivs);
    };

    //   text
    const [text1,
        setText] = useState('');

    const setCoruseName = (event) => {
        setText(event.target.value);
    };

    const [text,
        setTextContent] = useState('');

    const handleChange_Content = (event) => {
        setTextContent(event.target.value);
    };

    //   time
    const [number1,
        Hrs] = useState('');
    const [number2,
        Minutes] = useState('');

    const HrsChange = (event) => {
        Hrs(event.target.value);
    };
    const MinutesChange = (event) => {
        Minutes(event.target.value);
    };

    // image
    const [image,
        setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    //pdf
    const [pdfFile,
        setPdfFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setPdfFile(file);
        } else {
            alert('Please upload a valid PDF file.');
        }
    };

    const handleUpload = () => {
        if (pdfFile) {
            console.log('PDF file uploaded:', pdfFile);
        } else {
            alert('No file selected.');
        }
    };

    //skill text
    const [inputText,
        setInputText] = useState('');
    const [messages,
        setMessages] = useState([]);

    const SkillsChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSkillKeyPress = (event) => {
        if (event.key === 'Enter' && inputText.trim() !== '') {
            setMessages([
                ...messages,
                inputText
            ]);
            setInputText('');
        }
    };

    //question
    
    const [divQ, setDiv_Q] = useState([]);

    const addQuestionModule = () => {
      setDiv_Q([
        ...divQ,
        {
          id: divQ.length,
          textInputs: [
            {
              question: '',
              answers: ['', '', '', ''] 
            }
          ]
        }
      ]);
    };
  

    const addMoreTextInputs = (divIndex) => {
      const updatedDivs = divQ.map((div, index) => {
        if (index === divIndex) {
          return {
            ...div,
            textInputs: [
              ...div.textInputs,
              { question: '', answers: ['', '', '', ''] } 
            ]
          };
        }
        return div;
      });
      setDiv_Q(updatedDivs);
    };
  

    const handleTextChange = (divIndex, inputIndex, type, value, answerIndex) => {
      const updatedDivs = divQ.map((div, dIndex) => {
        if (dIndex === divIndex) {
          const updatedTextInputs = div.textInputs.map((input, iIndex) => {
            if (iIndex === inputIndex) {
              if (type === 'question') {
                return { ...input, question: value };
              } else if (type === 'answer') {
                const updatedAnswers = input.answers.map((answer, aIndex) =>
                  aIndex === answerIndex ? value : answer
                );
                return { ...input, answers: updatedAnswers };
              }
            }
            return input;
          });
          return { ...div, textInputs: updatedTextInputs };
        }
        return div;
      });
      setDiv_Q(updatedDivs);
    };

 
  

    return (

        <div>

            <h1 className="Add_course_h1">Add Courses Component ...
            </h1>

            <div className="Add_course_new_div">
                <h2 className="Add_course_texth2">Course Name</h2>
                <input
                    className="Add_course_inputBox"
                    value={text}
                    onChange={handleChange_Content}
                    placeholder="Enter your text here..."/>

                <h2 className="Add_course_texth2">Course Content</h2>
                <textarea
                    className="Add_course_textarea"
                    value={text1}
                    onChange={setCoruseName}
                    placeholder="Enter your Course Content here..."
                    rows="10"/>
                    

                <h2 className="Add_course_texth2">Time for course to end</h2>
                <div className="Add_course_Time_box_div">
                    <label>
                        <b>Hrs :</b>
                        <input
                            className="Add_course_Time_box_div_input"
                            type="number"
                            value={number1}
                            onChange={HrsChange}
                            placeholder="Hrs"
                            min="0"
                            />
                    </label>
                    <label>
                        <b>Minutes :</b>
                        <input
                            className="Add_course_Time_box_div_input"
                            type="number"
                            value={number2}
                            onChange={MinutesChange}
                            min="0"
                            max="59"
                            placeholder="Minutes"
                            />
                    </label>
                </div>
                <div className="Add_course_wallImage">
                    <h2 className="Add_course_texth2">Course Wallpaper</h2>
                    <input type="file" accept="image/*" onChange={handleImageChange}/> {image && <img
                        src={image}
                        alt="Selected"
                        style={{
                        marginTop: '25px',
                        maxWidth: '100%'
                    }}/>}
                </div>

                <div >
                    <h2 className="Add_course_texth2">Skills</h2>
                    <input
                        type="text"
                        className="Add_course_inputBox"
                        value={inputText}
                        onChange={SkillsChange}
                        onKeyPress={handleSkillKeyPress}
                        placeholder="Type a skill and press Enter"/>
                    <div className="Add_course_Skill_div">
                        {messages.map((message, index) => (
                            <p className="Add_course_Skill_P" key={index}>{message}</p>
                        ))}
                    </div>
                </div>
            </div>

            {divs.map((divContent, index) => (
                <div key={index} className="Add_course_new_div">
                    <span className="Add_course_module_text">{divContent.text}</span>
                    <br/>
                    <h2 className="Add_course_texth2">Module name</h2>
                    <input
                        className="Add_course_inputBox"
                        type="text"
                        value={divContent.inputValue}
                        onChange={(event) => handleInputChange(index, event)}
                        placeholder="Enter Module name"/>
                    <div className="Add_course_video_input_box">
                        <h2 className="Add_course_texth2">Upload Vedieo here
                        </h2>

                        {/* video */}
                        <div>

                            {v_divs.map((v_div, v_index) => (
                                <div
                                    key={v_div.id}
                                    style={{
                                    margin: '10px 0'
                                }}>

                                    <span className="Add_course_Video_text">Video Section</span>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        onChange={(v_event) => handlevideoChange(v_index, v_event)}/> {v_div.videoUrl && (
                                        <div>
                                            <h3 className="Add_course_texth3">Video Title
                                            </h3>
                                            
                                            <input
                                                type="text"
                                                className="Add_course_inputBox"
                                                placeholder="Enter Video Title Here"
                                                value={v_div.text}
                                                onChange={(v_event) => handleTextv_Change(v_index, v_event)}
                                                style={{
                                                marginBottom: '10px'
                                            }}/>

                                            <video width="400" controls>
                                                <source src={v_div.videoUrl} type="video/mp4"/>
                                                Your browser does not support the video tag.
                                            </video>

                                            <br/><br/>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button className="Add_course_button" onClick={v_addDiv}>Add Video Section</button>
                        </div>

                    </div>

                    <div className="Add_course_pdf_input_box">
                        <h2 className="Add_course_texth2">Upload PDF here
                        </h2>

                        <div>
                            <input type="file" accept="application/pdf" onChange={handleFileChange}/>
                            <button className="Add_course_button" onClick={handleUpload}>Upload PDF</button>
                        </div>
                    </div>
                </div>

            ))}
            <br/><br/>


            <button className="Add_course_button" onClick={addDiv}>Add Module</button>

{/* Question */}

<div className="Add_course_new_div">
<h1 className="Add_course_h1">Questions Area
</h1>
  
      {divQ.map((div, divIndex) => (
        <div key={div.id} className="question-module">
          <h2  className="Add_course_texth2"> Questions for Module {div.id + 1}</h2>
          
          {div.textInputs.map((input, inputIndex) => (
            <div key={inputIndex} className="text-input-group">
              <h3  className="Add_course_texth3">Enter questions for here.</h3>
              <textarea
                type="text"
                className="Add_course_textarea"
                placeholder="Enter Question"
                value={input.question}
                onChange={(e) =>
                  handleTextChange(divIndex, inputIndex, 'question', e.target.value)
                }
              />
              <p>*  you must enter your answer for first Answer. </p>
              {input.answers.map((answer, answerIndex) => (
                <input
                className="Add_course_inputBox"
                  key={answerIndex}
                  type="text"
                  placeholder={`Enter Answer ${answerIndex + 1}`}
                  value={answer}
                  onChange={(e) =>
                    handleTextChange(
                      divIndex,
                      inputIndex,
                      'answer',
                      e.target.value,
                      answerIndex
                    )
                  }
                />
              ))}
              <br /><br /><br />
            </div>
          ))}
          
          <button className="Add_course_button" onClick={() => addMoreTextInputs(divIndex)}>
            Add Questions And Answers
          </button>
        </div>
      ))}
      
    </div>



            <button className="Add_course_button" onClick={addQuestionModule}>Add Questions for Module</button>

        </div>
    );
}
