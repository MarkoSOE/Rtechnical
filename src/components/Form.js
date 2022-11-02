
import { useState } from 'react';

const Form = () => {

    //initial state for components of a task
    const [name, setName] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [description, setDescription] = useState('');


    //handle the change of the input
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    }
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    //store the task in localstorage 
    const addTask = (e) => {
        e.preventDefault();
        const task = { name, dueDate, description };
        console.log(task);
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setName('');
        setDueDate('');
        setDescription('');
        window.location.reload();
    }
    return (
        <div className='task-container'>
            <form onSubmit={addTask} data-testid='form'>
                    <input type="text" placeholder='Name' name='name' onChange={handleNameChange} data-testid="taskname"/>
                    <input type="text" placeholder='Due' name='due' onChange={handleDueDateChange} data-testid="taskdue"/>
                    <input type="text" placeholder='Description' name='description' onChange={handleDescriptionChange}data-testid="taskdescription"/>
                    <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;