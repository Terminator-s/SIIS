import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from '../../Navigator'



class EditInstructor extends Component{

    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>
                <div className="SeditComponent">
                    <Card className="EditFrom">
                        <Card.Header>Edit Instructors</Card.Header>
                        <Card.Body>
                            <Card.Title className="CreateFrom">Edit New Instructors</Card.Title>
                            <Form className="sCreateFrom" >
                                <Form.Group controlId="instructorId">
                                    <Form.Label>Instructor Code</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId"  />
                                </Form.Group>
                                <Form.Group controlId="instructorName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" id="name" />
                                </Form.Group>
                                <Form.Group controlId="instructorUserName">
                                    <Form.Label>Username</Form.Label>
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
                                    <Form.Control type="email" name="name" id="name"/>
                                </Form.Group>

                                <Form.Group controlId="instructorAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId"/>
                                </Form.Group>


                                <Form.Group controlId="instructorPhoneNo">
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

export default EditInstructor;