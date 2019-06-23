import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from '../../Navigator'



class EditStudents extends Component{

    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>
                <div className="SeditComponent">
                    <Card className="EditFrom">
                        <Card.Header>Edit Student</Card.Header>
                        <Card.Body>
                            <Card.Title className="CreateFrom">Edit New Student</Card.Title>
                            <Form className="sCreateFrom" >
                                <Form.Group controlId="studentId">
                                    <Form.Label>StudentID</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId"  />
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
                                    <Form.Control type="text" name="adminId" id="adminId" />
                                </Form.Group>

                                <Form.Group controlId="StudentEmail">
                                    <Form.Label>Student Address</Form.Label>
                                    <Form.Control type="email" name="name" id="name" />
                                </Form.Group>

                                <Form.Group controlId="studentPhoneNo">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control type="email" name="name" id="name"/>
                                </Form.Group>

                                <Button variant="primary" type="submit" name="AddButton" id="AddButton">
                                    Add
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

export default EditStudents;