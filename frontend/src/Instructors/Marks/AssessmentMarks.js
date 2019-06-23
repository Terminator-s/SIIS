import React, {Component} from 'react';
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import '../iInstructors.css'
import Nav from '../../Navigator'
import {Card, Table, Button, Form, FormControl, Col} from 'react-bootstrap'


class AssessmentMarks extends Component {
    render() {
        return (
            <div>
                <HeaderMain/>
                <Nav/>
                <br/><br/>
                <div className="MarksCard">
                    <Card className="text-center">
                        <Card.Header>Assessment Marks</Card.Header>
                        <Card.Body>
                            <Card.Title>Assessment 01</Card.Title>
                            <div className="marksViewTable">
                                <Table striped bordered hover>
                                    <thead>
                                    <th align='left'>Course Id</th>
                                    <th align='left'>Student Id</th>
                                    <th align='left'>Marks</th>

                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td align='left'>IT3020</td>
                                        <td align='left'>IT1122334455</td>
                                        <td align='center'>75</td>
                                    </tr>

                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <table align='center'>
                                <tr>
                                    <td><Button variant="primary" >Add</Button></td>
                                    <td><Button variant="success" >Edit</Button></td>
                                    <td><Button variant="danger" >Delete</Button></td>
                                </tr>
                            </table>
                        </Card.Footer>
                    </Card>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        );
    }
}
export default AssessmentMarks;
