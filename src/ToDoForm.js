import React, { useState } from 'react';
import './index.css'; 

const ToDoForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..." />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ToDoForm;