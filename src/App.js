import React, {useState, useEffect } from "react";
import "./App.css";

function App() {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState({title: "", description: "", isCompleted: false});

    const createTask = () => {
        fetch('http://localhost:5062/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: task.title,
                description: task.description,
            }),
        })
            .then((res) => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then((data) => {
                console.log('Task created:', data);
                setTaskList(data);
                setTask({title: "", description: "", isCompleted: false});
            })
            .catch((err) => {
                console.error('Create error:', err);
            });
    };


    // const priorityRanks = (
    //     <datalist id="priority-ranking">
    //         <option value="Essential"></option>
    //         <option value="High"></option>
    //         <option value="Medium"></option>
    //         <option value="Low"></option>
    //         <option value="Backlog"></option>
    //     </datalist>
    // )


    const rows = taskList.map((item, index) => (
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.isCompleted ? "Yes" : "No"}</td>
        </tr>
    ));

    return (
        <div>
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
                    createTask();
                }}>
                    Add task
                </button>
            </form>
            <table className="to-do-list">
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Task</th>
                    <th>Description</th>
                    <th>Complete</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>

    );
}

export default App;


//Editable Rows - update and edit
//Add task
//Mark task as done - format appropriately, remove after 30 days
//Filter for complete/active tasks
//
//Colour code deadline / task priority
//Set reminders
//Integrate BE
//Reorder, drag and drop
// Tags
//Sub task accordion
//Calendar
//Pomodoro Timer
//csv import
