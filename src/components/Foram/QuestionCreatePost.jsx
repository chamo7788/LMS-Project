import React, { useState, useRef } from "react";
import '../../assets/css/Foram/questionCreatePost.css';

export function QuestionCreatePost({ onClose }) {
    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    function selectFiles() {
        fileInputRef.current.click();
    }

    function onFileSelect(event) {
        const files = event.target.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    function deleteImage(index) {
        setImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    }

    function onDragOver(event) {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = "copy";
    }

    function onDragLeave(event) {
        event.preventDefault();
        setIsDragging(false);
    }

    function onDrop(event) {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        if (files.length === 0) return;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    }

    return (
        <>
            <div className="background-blur"></div>
            <div className="question-create-container">
                
                <div className="question-create-top">
                    <p>Create Question</p>
                    <hr />
                    <button className="close-button" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                </div>
                <div className="question-create-title">
                    <p>Title</p>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        placeholder="Add your title"
                        className="question-title-input"
                    />
                    <p>Question/Idea</p>
                    <textarea
                        value={question}
                        onChange={handleQuestionChange}
                        placeholder="Tell everyone what your question/idea"
                        className="question-input"
                        rows="10"
                        cols="50"
                    />
                </div>
                <div className="question-image-dropzone-card">
                    <div className="question-image-dropzone-top">
                        <p>Drag and Drop image uploading</p>
                    </div>
                    <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                        {isDragging ? (
                            <span className="select-question-image">Drop images here</span>
                        ) : (
                            <>
                                Drag & Drop image here or
                                <span className="select-question-image" role="button" onClick={selectFiles}>
                                    "Browse"
                                </span>
                            </>
                        )}
                        <input
                            name="file"
                            type="file"
                            className="question-image-file"
                            multiple
                            ref={fileInputRef}
                            onChange={onFileSelect}
                        />
                    </div>
                    <div className="question-image-container">
                        {images.map((images, index) => (
                            <div className="question-img" key={index}>
                                <span className="question-img-delete" onClick={() => deleteImage(index)}>&times;</span>
                                <img src={images.url} alt={images.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <button type="button" className="Submit-Question-button">
                    Submit Question
                </button>
            </div>
        </>

    );
}
