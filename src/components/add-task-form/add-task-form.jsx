import React from "react";

function AddTaskForm({ task, setTask, onCreateTask }){

    return (
        <form className="add-task">
            <ul>
                <li>
                    <label>Task </label>
                    <input type="text" onChange={(e) => setTask({...task, title: e.target.value})}
                           value={task.title}/>
                </li>
                <li>
                    <label>Description </label>
                    <input type="text" onChange={(e) => setTask({...task, description: e.target.value})}
                           value={task.description}/>
                </li>
            </ul>
            <button onClick={(e) => {
                e.preventDefault();
                onCreateTask();
            }}>
                Add task
            </button>
        </form>
    )
}

export default AddTaskForm;