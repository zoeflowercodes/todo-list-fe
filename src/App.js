import React, { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/add-task-form/add-task-form";
import TodoList from "./components/todo-list/todo-list";

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

    return (
        <>
            <AddTaskForm task={task} setTask={setTask} onCreateTask={createTask} />
            <TodoList taskList={taskList} />
        </>
    );
}

export default App;


//change table to list
//Editable Rows - update and edit
//useEffect diagram
//Mark task as done - format appropriately, remove after 30 days
//Filter for complete/active tasks
//Colour code deadline / task priority
//Set reminders
//Reorder, drag and drop
// Tags
//Sub task accordion
//Calendar
//Pomodoro Timer
//csv import
