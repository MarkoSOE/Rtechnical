import { useState, useEffect } from 'react';
import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TaskList = () => {
    
    //initialize state for tasks
    const [tasks, setTasks] = useState([]);

    //get the tasks from localstorage
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        if(tasks){
            setTasks(tasks);
        }
    }, []);

    //delete the task from localstorage
    const deleteTask = (taskName) => {
        console.log('delete task', taskName);
        //remove item from localstorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        //filter the tasks to only include the tasks that don't match the taskName
        const filteredTasks = tasks.filter(task => task.name !== taskName);
        //save the filtered tasks to localstorage
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
        //update the tasks state
        setTasks(filteredTasks);
    }

    //edit task
    const editTask = (taskName) => {
        console.log('edit task', taskName);
    }

    return (
        <div className='footer'>
            <div className='container'>
        {tasks.map((task,index) => {
            return (
                <div className='task-item' key={index}>
                    <div className='top-row'>
                        <div className='top-row-child'>
                            <h3>Name: {task.name}</h3>
                        </div>
                        <div className='top-row-child-edit'>
                            <EditIcon onClick={() => editTask(task.name)}/>
                        </div>
                        <div className='top-row-child-delete'>
                            <DeleteIcon onClick={() => deleteTask(task.name)} />
                        </div>
                    </div>
                    <div className='task-item-child'>
                        <h3>Due: {task.dueDate}</h3>
                    </div>
                    <div className='task-item-child'>
                        <h3>Description: {task.description}</h3>
                    </div>
                </div>
            )
        })}

       </div>
        </div>
    );
}


export default TaskList;