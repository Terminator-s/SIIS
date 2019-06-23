import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'

class CreateAdmin extends Component{

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="CreateFrom">Add New Admin</Card.Title>
                    <Form className="CreateFrom" >
                        <Form.Group controlId="adminId">
                            <Form.Label>Admin ID</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter admin Id" />
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" id="name" required placeholder="Enter Admin Name" />
                        </Form.Group>
                        <Form.Group controlId="adminUserName">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="AdminEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="name" id="name" required placeholder="Enter Email Address" />
                        </Form.Group>
                        <Form.Group controlId="adminAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Address" />
                        </Form.Group>
                        <Form.Group controlId="AdminPhoneNo">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="email" name="name" id="name" required placeholder="Enter Phone No" />
                        </Form.Group>

                        <Button variant="primary" type="submit" name="AddButton" id="AddButton">
                            Add
                        </Button>
                    </Form>
                </Card.Body>
            </div>
        );
    }
}

export default CreateAdmin;