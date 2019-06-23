import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../iInstructors.css'

class CreateAssessments extends Component{
    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="CreateFrom">Add New Assessment</Card.Title>
                    <Form className="CreateFrom" >
                        <Form.Row>
                            <Form.Group as={Col} controlId="year">
                                <Form.Label>Year</Form.Label>
                                <Form.Control as="select" name="year" id="year" required>
                                    <option>Choose...</option>
                                    <option>1st Year</option>
                                    <option>2nd Year</option>
                                    <option>3rd Year</option>
                                    <option>4th Year</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="semester">
                                <Form.Label>Semester</Form.Label>
                                <Form.Control as="select" name="semester" id="semester" required>
                                    <option>Choose...</option>
                                    <option>1st Semester</option>
                                    <option>2nd Semester</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="module">
                                <Form.Label>Module</Form.Label>
                                <Form.Control as="select" name="module" id="module" required>
                                    <option>Choose...</option>
                                    <option>Software Architecture</option>
                                    <option>Distributed Systems</option>
                                    <option>Software Engineering Process & Quality Management</option>
                                    <option>Application Frameworks</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="moduleCode">
                                <Form.Label>Module Code</Form.Label>
                                <Form.Control type="text" name="moduleCode" id="moduleCode" required placeholder="IT3020" />
                            </Form.Group>
                        </Form.Row>


                        <Form.Group controlId="AssTopic">
                            <Form.Label>Assessment Topic</Form.Label>
                            <Form.Control type="text" name="AssTopic" id="AssTopic" required placeholder="Case Study" />
                        </Form.Group>

                        <Form.Group controlId="AssDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" name="AssDescription" id="AssDescription" required placeholder="Short description about assessment" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="date">
                                <Form.Label>Due date</Form.Label>
                                <Form.Control type="date" name="date" id="date" required placeholder="dd/mm/yy" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="time">
                                <Form.Label>Due Time</Form.Label>
                                <Form.Control type="time" name="time" id="time" required placeholder="dd/mm/yy" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="AssFile">
                            <Form.Label>Upload Assessment Document</Form.Label>
                            <Form.Control type="file" name="AssFile" id="AssFile"  placeholder="Case Study" />
                        </Form.Group>

                        <Button variant="primary" type="submit" name="AssFile" id="AssFile">
                            Publish
                        </Button>
                    </Form>
                </Card.Body>
            </div>
        );
    }
}

export default CreateAssessments;