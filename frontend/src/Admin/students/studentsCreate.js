import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import axios from "../course/courseCreate";

class CreateAdmin extends Component{
    constructor() {
        super();
        this.state = {
            id: '',
            password: '',
            year: '',
            semester: '',
            email: '',
            address: '',
            phone:''
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
            id: this.state.id,
            password: this.state.password,
            year: this.state.year,
            semester: this.state.semester,
            email: this.state.email,
            address:this.state.address,
            phone:this.state.phone
        }
        axios.post('http://localhost:3001/student',obj).then(
            data => {
                alert('Successfull' + JSON.stringify(data.data.data));
            }
        ).catch(err=>{
            console.log(obj);
        })
        this.setState({
            id: '',
            password: '',
            year: '',
            semester: '',
            email: '',
            address: '',
            phone:''
        })
    }


    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Student</Card.Title>
                    <Form className="sCreateFrom" >
                        <Form.Group controlId="studentId">
                            <Form.Label>StudentID</Form.Label>
                            <Form.Control type="text" name="studentId" id="studentId"value={this.state.id} onChange={this.handleInputChange} required placeholder="Enter Student Id" />
                        </Form.Group>

                        <Form.Group controlId="studentPassword">
                            <Form.Label>Passsword</Form.Label>
                            <Form.Control type="text" name="studentPassword" id="studentPassword" value={this.state.password} onChange={this.handleInputChange}required placeholder="Enter Student Id" />
                        </Form.Group>

                        <Form.Group controlId="studentYear">
                            <Form.Label>Year</Form.Label>
                            <Form.Control type="text" name="studentYear" id="studentYear"value={this.state.year} onChange={this.handleInputChange} required placeholder="Enter Student Year" />
                        </Form.Group>

                        <Form.Group controlId="studentSemester">
                            <Form.Label>Semester</Form.Label>
                            <Form.Control type="text" name="studentSemester" id="studentSemester"value={this.state.semester} onChange={this.handleInputChange} required placeholder="Enter Student Semester" />
                        </Form.Group>

                        <Form.Group controlId="StudentEmail">
                            <Form.Label>Student Email</Form.Label>
                            <Form.Control type="email" name="StudentEmail" id="StudentEmail"value={this.state.email} onChange={this.handleInputChange} required placeholder="Enter Email address" />
                        </Form.Group>

                        <Form.Group controlId="StudentAddress">
                            <Form.Label>Student Address</Form.Label>
                            <Form.Control type="address" name="StudentAddress" id="StudentAddress"value={this.state.address} onChange={this.handleInputChange} required placeholder="Enter Address" />
                        </Form.Group>

                        <Form.Group controlId="studentPhoneNo">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="text" name="studentPhoneNo" id="studentPhoneNo"value={this.state.phone} onChange={this.handleInputChange} required placeholder="Enter Phone No" />
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

export default CreateAdmin;