import React, { useState } from "react";
import "../../assets/css/Course/centerComponent.css"; 
export function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks([...tasks, newTask.trim()]);
            setNewTask("")
        }
    }
    
    function deleteTask(index){
        const updatedTasks = tasks.filter((task, i) =>i !== index);
        setTasks(updatedTasks); 

    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text" 
                    placeholder="Enter a task..." 
                    value={newTask} 
                    onChange={handleInputChange}
                />
                <button 
                    className="add-button" 
                    onClick={addTask}>
                    Add
                </button>
            </div>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                        className="delete-button" 
                        onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                ))}
           
            </ul>
        </div>
    );
}