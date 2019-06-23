import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'

class CreateAdmin extends Component{

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Student</Card.Title>
                    <Form className="sCreateFrom" >
                        <Form.Group controlId="studentId">
                            <Form.Label>StudentID</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Student Id" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="degree">
                                <Form.Label>Degree</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>SE</option>
                                    <option>SA</option>
                                    <option>DS</option>
                                    <option>SEPQM</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="year">
                                <Form.Label>Year</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>1st Year</option>
                                    <option>2nd Year</option>
                                    <option>3rd Year</option>
                                    <option>4th Year</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="semester">
                                <Form.Label>Semester</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>1st Semester</option>
                                    <option>2nd Semester</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="studentAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Address" />
                        </Form.Group>

                        <Form.Group controlId="StudentEmail">
                            <Form.Label>Student Address</Form.Label>
                            <Form.Control type="email" name="name" id="name" required placeholder="Enter Email Address" />
                        </Form.Group>

                        <Form.Group controlId="studentPhoneNo">
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