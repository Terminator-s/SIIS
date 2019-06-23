import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditCourse from "./courseEdit";
import axios from 'axios';

class ViewCourse extends Component{
    next = function(e){
        ReactDOM.render(<EditCourse />, document.getElementById('root'));
    };
    constructor() {
        super()
        this.state = {
            courses:[]

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/courses').then(
            data => {
                this.setState({
                    courses: data.data.message
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
                    <Card.Title>View Course</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Course ID</th>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Instructors</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.courses.map(cou => {
                                return (
                                    <tr key={cou._id}>
                                        <td>{cou.courseId}</td>
                                        <td>{cou.courseName}</td>
                                        <td>{cou.courseYear}</td>
                                        <td>{cou.courseSemester}</td>

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

export default ViewCourse;