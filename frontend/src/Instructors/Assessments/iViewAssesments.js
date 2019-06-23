import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditAssessments from "./iEditAssesments";


class ViewAssessments extends Component{
    next = function(e){
        ReactDOM.render(<EditAssessments />, document.getElementById('root'));
    };
    render() {
        return(
            <div>
                <Card.Body>
                    <Card.Title>View Assessments</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Assessment Topic</th>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Module</th>
                            <th>Module Code</th>
                            <th>Description</th>
                            <th>Due date</th>
                            <th>Due Time</th>
                            <th>Document</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>Otto</td>
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

export default ViewAssessments;