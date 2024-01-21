import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './middleware/thunks'

import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { CiFilter } from "react-icons/ci";
import Navbar from 'react-bootstrap/Navbar';

const DataList = () => {

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <section  >
                <div className="container mb-5">
                    <Card className='cards'>
                        <Card.Body className='datalist_card_body mt-4' >
                            <div className="search_bar">
                                <Navbar expand="lg">
                                    <Form className="me-auto d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                    </Form>
                                    <div class="progress_Filter">
                                        <CiFilter />
                                    </div>
                                </Navbar>
                            </div>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id}>
                                            <th>{user.id}</th>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.website}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </Card.Body>
                    </Card>
                </div>
            </section >
        </>
    )
}

export default DataList