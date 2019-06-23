import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditStudents from "./studentsEdit";

class ViewStudents extends Component{
    next = function(e){
        ReactDOM.render(<EditStudents />, document.getElementById('root'));
    };
    render() {
        return(
            <div>
                <Card.Body>
                    <Card.Title>View Student</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>StudentId</th>
                            <th>Degree</th>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>A001</th>
                            <th>SE</th>
                            <th>Rushda</th>
                            <th>Rushda@123</th>
                            <th>Rushda@gmail.com</th>
                            <th>Colombo</th>
                            <th>0771234567</th>
                            <td><Button variant="success" onClick={e => this.next(e)}>Edit</Button></td>
                            <td><Button variant="danger">Delete</Button></td>
                        </tr>

                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        )
    }
}

export default ViewStudents;