import React from 'react';

const TaskList = ({ taskArray, handleDeleteButton, handleCompletedTask }) => {
    return (
        <ul className="list-group">
            {taskArray.map((item, index) => {
                const { id, task_name, isCompleted } = item;
                return (
                    <li 
                    key={index} 
                    className={`list-group-item 
                    d-flex justify-content-between align-items-center 
                    ${isCompleted ? 'bg-success text-white' : 'bg-white text-dark' }`} 
                    onClick={() => handleCompletedTask(id)}
                    >
                        {task_name}
                        <button type="button" className="btn btn-danger" onClick={() => handleDeleteButton(index)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default TaskList;