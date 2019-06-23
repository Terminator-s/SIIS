import React, {Component} from 'react';
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import '../sStudent.css'
import Nav from '../../Navigator'
import {Card, Table, Button, Form, FormControl, Col} from 'react-bootstrap'


class StudentViewAssignment extends Component {
    render() {
        return (
            <div>
                <HeaderMain/>
                <Nav/>
                <br/><br/>
                <div className="StudentViewAssCard">
                    <Card className="text-center">
                        <Card.Header>View Courses</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                <Form inline className="search">
                                    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                                    <Button type="submit">Search</Button>
                                </Form>
                            </Card.Title>
                            <div className="studentViewTable">
                                <div>
                                    <br/>
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
                                    </Form>
                                </div>
                                <Table striped bordered hover>
                                    <thead>
                                    <th align='left'>Course Code</th>
                                    <th align='left'>Course Name</th>
                                    <th align='left'>Instructor</th>

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td align='left'>IT3020</td>
                                        <td align='left'>Application Framework</td>
                                        <td align='left'>Mr.Suman</td>
                                    </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        );
    }
}
export default StudentViewAssignment;
