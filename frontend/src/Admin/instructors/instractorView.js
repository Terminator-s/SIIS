import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditInstructor from "./instractorEdit";

class ViewInstructor extends Component{

    next = function(e){
        ReactDOM.render(<EditInstructor />, document.getElementById('root'));
    };
    render() {
        return(
            <div>
                <Card.Body>
                    <Card.Title>View Instructors</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Degree</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>A001</th>
                            <th>aaaa</th>
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

export default ViewInstructor;