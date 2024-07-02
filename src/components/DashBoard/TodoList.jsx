import React, { useState } from "react";
import "../../assets/css/DashBoard/TodoList.css"; 

export function TodoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks([...tasks, {text: newTask.trim(), completed: false} ]);
            setNewTask("")
        }
    }
    
    function deleteTask(index){
        const updatedTasks = tasks.filter((task, i) =>i !== index);
        setTasks(updatedTasks); 

    }

    function toggleTaskCompletion(index) {
        const updatedTasks = tasks.map((task, i) => 
            i === index ? { ...task, completed: !task.completed } : task
        );
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
                    <li 
                        key={index} 
                        className={task.completed ? "completed" : ""}
                        onClick={() => toggleTaskCompletion(index)}
                    >
                        <div className="text">
                            {task.completed ? "✓ " : ""}{task.text}
                        </div>
                        <button 
                            className="delete-button" 
                            onClick={(e) => { e.stopPropagation(); deleteTask(index); }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}