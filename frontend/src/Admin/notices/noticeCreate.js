import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import axios from "../course/courseCreate";

class CreateNotices extends Component{
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

    componentDidMount(){
        axios.get('http://localhost:3001/instructor').then(
            data => {
                console.log(data);
                console.log(data.data.data);
                this.setState({
                    allInstructors: data.data.data
                })
            }
        )
    }
    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Notices</Card.Title>
                    <Form className="sCreateFrom" >
                        <Form.Group controlId="NoticesID">
                            <Form.Label>Notices Id</Form.Label>
                            <Form.Control type="text" name="adminId" id="adminId" required placeholder="Enter Notices Id" />
                        </Form.Group>
                        <Form.Group controlId="NoticesDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" name="AssDescription" id="AssDescription" required placeholder="Short description about assessment" />
                        </Form.Group>

                        <Button variant="primary" type="submit" name="AddButton" id="AddButton">
                            Add
                        </Button>
                    </Form>
                </Card.Body>
            </div>
        );
    }
}

export default CreateNotices;