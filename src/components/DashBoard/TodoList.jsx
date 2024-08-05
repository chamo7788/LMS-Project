import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/css/DashBoard/TodoList.css';
import { addTask, deleteTask, toggleTask } from '../../actions/TodoListactions';

export function TodoList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleAddTask() {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask.trim()));
      setNewTask('');
    }
  }

  function handleDeleteTask(index) {
    dispatch(deleteTask(index));
  }

  function handleToggleTaskCompletion(index) {
    dispatch(toggleTask(index));
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={handleAddTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleToggleTaskCompletion(index)}
          >
            <div className="text">
              {task.completed ? '✓ ' : ''}
              {task.text}
            </div>
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteTask(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}