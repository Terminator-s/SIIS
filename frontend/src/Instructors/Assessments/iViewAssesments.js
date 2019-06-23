import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditAssessments from "./iEditAssesments";
import axios from "../../Admin/course/courseView";


class ViewAssessments extends Component{
    next = function(e){
        ReactDOM.render(<EditAssessments />, document.getElementById('root'));
    };
    constructor() {
        super()
        this.state = {
            assessments:[]

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/assignment').then(
            data => {
                this.setState({
                    assessments: data.data.message
                });
            }
        ).catch(err=>{
            console.log(err);

        })
    }
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
                        {
                            this.state.assessments.map(cou => {
                                return (
                                    <tr key={cou._id}>
                                        <td>{cou.assTopic}</td>
                                        <td>{cou.assCourseYear}</td>
                                        <td>{cou.assCourseSemester}</td>
                                        <td>{cou.assModulesName}</td>
                                        <td>{cou.assModulesCode}</td>
                                        <td>{cou.assDescription}</td>
                                        <td>{cou.assDueDate}</td>
                                        <td>{cou.assDueTime}</td>


                                        <td><Button variant="success" onClick={e => this.next(e)}>Edit</Button></td>
                                        <td><Button variant="danger">Delete</Button></td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        )
    }
}

export default ViewAssessments;