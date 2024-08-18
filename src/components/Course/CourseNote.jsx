import React, { useState } from 'react';
import '../../assets/css/Course/courseNote.css';

export function CourseNote({ onAddNote }) {
    const [notes, setNotes] = useState([]);
    const [noteText, setNoteText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentNoteIndex, setCurrentNoteIndex] = useState(null);

    const handleAddNote = () => {
        if (noteText.trim() !== '') {
            const noteWithTimestamp = onAddNote(noteText); // Add note with timestamp
            if (isEditing) {
                const updatedNotes = [...notes];
                updatedNotes[currentNoteIndex] = noteWithTimestamp;
                setNotes(updatedNotes);
                setIsEditing(false);
                setCurrentNoteIndex(null);
            } else {
                setNotes([...notes, noteWithTimestamp]);
            }
            setNoteText('');
        }
    };

    const handleEditNote = (index) => {
        setIsEditing(true);
        setCurrentNoteIndex(index);
        setNoteText(notes[index].split(' - ')[1]);
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = notes.filter((_, i) => i !== index);
        setNotes(updatedNotes);
    };

    return (
        <div className="note-app">
            <h1>Course Note</h1>
            <div className="note-input">
                <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="Type your note here to save for later."
                ></textarea>
                <button onClick={handleAddNote}>
                    {isEditing ? 'Update Note' : 'Add Note'}
                </button>
            </div>
            <div className="notes-list">
                {notes.map((note, index) => (
                    <div key={index} className="note">
                        <p>{note}</p>
                        <button onClick={() => handleEditNote(index)}>Edit</button>
                        <button onClick={() => handleDeleteNote(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}