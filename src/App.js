import React, {useState} from "react";
import "./App.css";

function App() {

    const priorityRanks = (
        <datalist id="priority-ranking">
            <option value="Essential"></option>
            <option value="High"></option>
            <option value="Medium"></option>
            <option value="Low"></option>
            <option value="Backlog"></option>
        </datalist>
    )
    const [taskList, setTaskList] = useState([]);

     const rows = taskList.map(function (item) {
        return <tr key={item.id}>
            <td>{item.id}</td>
            <td> {item.taskDesc}</td>
            <td>{item.due}</td>
            <td>{item.complexity}</td>
            <td>{item.priority}</td>
        </tr>;
    });

    const [task, setTask] = useState({taskDesc: "", due: "", complexity: "", priority: "", completed: false});

    function handleSubmit(e) {
    e.preventDefault()
        // TODO: submit to database
        const newTask = {
            ...task,
            id: taskList.length + 1
        };
        setTaskList(prevList => [...prevList, newTask]);
        console.log(taskList)
        console.log(task)

    }
    return (
        <div>
            <form className="add-task">
                <ul>
                    <li>
                        <label>Task </label>
                        <input type="text" onChange={(e) => setTask({...task, taskDesc: e.target.value})}
                               value={task.taskDesc}/>
                    </li>
                    <li>
                        <label>Due </label>
                        <input type="datetime-local" onChange={(e) => setTask({...task, due: e.target.value})}
                               value={task.due}/>
                    </li>
                    <li>
                        <label>Complexity (0-10) </label>
                        <input type="number" min="0" max="10"
                               onChange={(e) => setTask({...task, complexity: e.target.value})}
                               value={task.complexity}/>
                    </li>
                    <li>
                        <label htmlFor="priority-choice">Priority </label>
                        <input list="priority-ranking" id="priority-choice" name="priority-choice"
                               placeholder="Select priority"
                               onChange={(e) => setTask({...task, priority: e.target.value})}
                               value={task.priority}/>
                    </li>
                </ul>
                <button onClick={(e) => handleSubmit(e)}> Add task</button>
            </form>
            <table className="to-do-list">
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Task</th>
                    <th>Due</th>
                    <th>Complexity</th>
                    <th>Priority</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
            {priorityRanks}
        </div>

    );
}

export default App;


//Editable Rows - update and edit
//Add task
//Mark task as done - format appropraitely, remove after 30 days
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
