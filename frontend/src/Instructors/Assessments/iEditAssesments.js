import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../iInstructors.css'
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from '../../Navigator'



class EditAssessments extends Component{

    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>
                <div className="editComponent">
                <Card className="EditFrom">
                    <Card.Header>Edit Assessments</Card.Header>
                    <Card.Body>
                        <Form  >
                            <Form.Row>
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

                            <Form.Row>
                                <Form.Group as={Col} controlId="module">
                                    <Form.Label>Module</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>Software Architecture</option>
                                        <option>Distributed Systems</option>
                                        <option>Software Engineering Process & Quality Management</option>
                                        <option>Application Frameworks</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="moduleCode">
                                    <Form.Label>Module Code</Form.Label>
                                    <Form.Control type="text" placeholder="IT3020" />
                                </Form.Group>
                            </Form.Row>


                            <Form.Group controlId="AssTopic">
                                <Form.Label>Assessment Topic</Form.Label>
                                <Form.Control type="text" placeholder="Case Study" />
                            </Form.Group>

                            <Form.Group controlId="AssDescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Short description about assessment" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="date">
                                    <Form.Label>Due date</Form.Label>
                                    <Form.Control type="date" placeholder="dd/mm/yy" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="time">
                                    <Form.Label>Due Time</Form.Label>
                                    <Form.Control type="time" placeholder="dd/mm/yy" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="AssTopic">
                                <Form.Label>Upload Assessment Document</Form.Label>
                                <Form.Control type="file" placeholder="Case Study" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Publish
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                </div>

                <br/><br/>
                <Footer/>

            </div>
        )
    }
}

export default EditAssessments;