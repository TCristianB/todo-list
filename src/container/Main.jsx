import React, { useState, useEffect } from 'react';

import FormTask from '../components/FormTask';
import TaskList from '../components/TaskList';

const Main = () => {
    const [task, setTask] = useState({
        id: Math.random() * 5,
        task_name: '',
        isCompleted: false
    });

    const [taskArray, setTaskArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTaskArray([...taskArray, task]);
        setTask({
            id: Math.random() * 5,
            task_name: '',
            isCompleted: false
        });
    }

    const handleInputChange = (e) => {
        setTask({ 
            ...task,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        let data = localStorage.getItem('tasks');
        if(data != null) {
            setTaskArray(JSON.parse(data));
        } else {
            setTaskArray([]);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskArray));
    }, [taskArray]);

    const handleDeleteButton = (index) => {
        let newTaskArray = taskArray;
        newTaskArray.splice(index, 1);
        setTaskArray([...newTaskArray]);
    }

    const handleCompletedTask = (id) => {
        const newList = taskArray.map(item => {
            if(item.id === id) {
                const updatedItem = {
                    ...item,
                    isCompleted: !item.isCompleted
                }
                return updatedItem;
            }
            return item;
        })
        setTaskArray(newList);
    }

    return (
        <main>
            <FormTask 
            handleSubmit={handleSubmit} 
            handleInputChange={handleInputChange} 
            task={task}/>
            <TaskList 
            taskArray={taskArray} 
            handleDeleteButton={handleDeleteButton} 
            handleCompletedTask={handleCompletedTask}
            />
        </main>
    )
}

export default Main;