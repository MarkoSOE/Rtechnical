
import Form from './Form';
import Button from './Button';
import { useState } from 'react';

const Header = () => {

    //initial state of for the action of showing the form
    const [showAddTask, setShowAddTask] = useState(true);

    //toggle the form
    const changeShow = () => {
        setShowAddTask(!showAddTask);
    }

    return (
        <>
            <header className='header'>
                <h1 className='task-header'>Task List</h1>
                <Button text={'Add'} onClick={changeShow}/>
            </header>
            {showAddTask && <Form />}
        </>
    );
}

export default Header;