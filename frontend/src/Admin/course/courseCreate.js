import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import axios from 'axios';

class CreateCourse extends Component{
    constructor() {
        super();
        this.state = {
            courseId: '',
            courseName: '',
            year: '',
            semester: '',
            allInstructors: [],
            instructor: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const obj = {
            courseId: this.state.courseId,
            courseName: this.state.courseName,
            courseYear: this.state.year,
            courseSemester: this.state.semester,
            instructor: this.state.instructor
        }
        axios.post('http://localhost:3001/courses',obj).then(
            data => {
                alert('Successfull' + JSON.stringify(data.data.data));
            }
        ).catch(err=>{
            console.log(obj);
        })
        this.setState({
            courseId: '',
            courseName: '',
            year: '',
            semester: '',
            allInstructors: [],
            instructor: ''
        })
    }



    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Student</Card.Title>
                    <Form className="sCreateFrom" onSubmit={this.handleSubmit} >
                        <Form.Group controlId="courseID">
                            <Form.Label>Course Id</Form.Label>
                            <Form.Control type="text" name="courseId" id="courseId" value={this.state.courseId} onChange={this.handleInputChange} required placeholder="Enter Course Id" />
                        </Form.Group>
                        <Form.Group controlId="courseName">
                            <Form.Label>Course Name</Form.Label>
                            <Form.Control type="text" name="courseName" id="courseName" value={this.state.courseName} onChange={this.handleInputChange} required placeholder="Enter Course Name" />
                        </Form.Group>

                        <Form.Group controlId="year">
                            <Form.Label>Year</Form.Label>
                            <Form.Control type="text" name="year" id="year" value={this.state.year} onChange={this.handleInputChange} required placeholder="Enter  Year" />
                        </Form.Group>

                        <Form.Group controlId="semester">
                            <Form.Label>Semester</Form.Label>
                            <Form.Control type="text" name="semester" id="semester" value={this.state.semester} onChange={this.handleInputChange} required placeholder="Enter Semester" />
                        </Form.Group>

                        <Form.Group controlId="instructor">
                            <Form.Label>Instructor</Form.Label>
                            <Form.Control type="text" name="instructor" id="instructor" value={this.state.instructor} onChange={this.handleInputChange} required placeholder="Enter instructor" />
                        </Form.Group>
                        {/* <Form.Group as={Col} controlId="instructor">
                            <Form.Label>Instructor</Form.Label>
                            <Form.Control as="select"  name="instructor" value={this.state.instructor}onChange={this.handleInputChange}>
                                {
                                    this.state.allInstructors.map(ins => {
                                        return (
                                            <option key={ins._id} value={ins._id}>{ins.name}</option>
                                        )
                                    })
                                }
                            </Form.Control>
                        </Form.Group>*/}

                        <Button variant="primary" type="submit" name="AddButton" id="AddButton">
                            Add
                        </Button>
                    </Form>
                </Card.Body>
            </div>
        );
    }
}

export default CreateCourse;