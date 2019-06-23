import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'

class CreateInstructor extends Component{

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Student</Card.Title>
                    <Form className="sCreateFrom" >
                        <Form.Group controlId="instructorId">
                            <Form.Label>Instructor Code</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Instructor Code" />
                        </Form.Group>
                        <Form.Group controlId="instructorName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" id="name" required placeholder="Enter Admin Name" />
                        </Form.Group>
                        <Form.Group controlId="instructorUserName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Username" />
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

                            <Form.Group as={Col} controlId="course">
                                <Form.Label>Course</Form.Label>
                                <Form.Control as="select">
                                    <option>Choose...</option>
                                    <option>SE</option>
                                    <option>SA</option>
                                    <option>DS</option>
                                    <option>SEPQM</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="instructorEmail">
                            <Form.Label>Instructor Address</Form.Label>
                            <Form.Control type="email" name="name" id="name" required placeholder="Enter Email Address" />
                        </Form.Group>

                        <Form.Group controlId="instructorAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Address" />
                        </Form.Group>


                        <Form.Group controlId="instructorPhoneNo">
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

export default CreateInstructor;