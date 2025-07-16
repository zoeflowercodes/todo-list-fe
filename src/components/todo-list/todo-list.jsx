import React from "react";

function TodoList({taskList}){
    const rows = taskList.map((item, index) => (
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.title}</td>
            <td>{item.description}</td>
            <td>{item.isCompleted ? "Yes" : "No"}</td>
        </tr>
    ));
    return(
        <div>
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
    )
}
export default TodoList