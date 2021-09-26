import React from 'react';

const FormTask = ({handleSubmit, handleInputChange, task}) => {
    return (
        <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input name="task_name" type="text" className="form-control" onChange={handleInputChange} value={task.task_name} required/>
            <input type="submit" className="btn btn-primary" value="Add Task" />
        </form>
    )
}

export default FormTask;