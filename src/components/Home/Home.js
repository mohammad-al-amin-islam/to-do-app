import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Home = () => {
    const [user] = useAuthState(auth);
    const [todolist, setTodolist] = useState([]);
    const handleFromSubmit = event => {
        event.preventDefault();
        const task = event.target.task.value;
        const description = event.target.textarea.value;
        const doc = { task, description }
        fetch('https://calm-basin-26890.herokuapp.com/todolist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(doc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
            })
        console.log(task, description);
    }

    fetch('https://calm-basin-26890.herokuapp.com/todolist')
        .then(res => res.json())
        .then(data => setTodolist(data));


    const handleDelete = id => {
        const url = `https://calm-basin-26890.herokuapp.com/todolist/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className='container'>
            <div className='d-flex mt-5 justify-content-between'>
                <h1>Welcome Home</h1>
                {user && <button onClick={() => signOut(auth)}>Sign Out</button>}
            </div>
            <Form onSubmit={handleFromSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Task</Form.Label>
                    <Form.Control name='task' type="text" placeholder="Task name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name='textarea' as="textarea" rows={3} />
                </Form.Group>
                <input type="submit" value="Add Task" />
            </Form>


            <div className='d-flex flex-wrap mt-5 mx-auto'>
                {
                    todolist.map(list => <Card className='me-3 mb-3' border="primary" style={{ width: '18rem' }}>
                        <Card.Header>{list.task}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {list.description}
                            </Card.Text>
                            <button onClick={() => handleDelete(list._id)}>Delete</button>
                        </Card.Body>
                    </Card>)
                }

            </div>

        </div>
    );
};

export default Home;