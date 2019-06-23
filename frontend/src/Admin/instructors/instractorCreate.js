import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import axios from 'axios';

class CreateInstructor extends Component{
    constructor() {
        super();
        this.state = {
            code: '',
            name: '',
            username: '',
            password: '',
            degree: '',
            courses: '',
            email:'',
            address:'',
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
            code: this.state.code,
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            degree: this.state.degree,
            courses:this.state.courses,
            email:this.state.email,
            address:this.state.address,
            phone:this.state.phone
        }
        axios.post('http://localhost:3001/instructor/add/',obj).then(
            data => {
                alert('Successfull' + JSON.stringify(data.data.message));
            }
        ).catch(err=>{
            console.log(obj);
        })
        this.setState({
            code: '',
            name: '',
            username: '',
            password: '',
            degree: '',
            courses: '',
            email:'',
            address:'',
            phone:''
        })
    }


    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="sCreateFrom">Add New Student</Card.Title>
                    <Form className="sCreateFrom" onSubmit={this.handleSubmit} >
                        <Form.Group controlId="code">
                            <Form.Label>Instructor Code</Form.Label>
                            <Form.Control type="text" name="code" id="code"value={this.state.code} onChange={this.handleInputChange}  required placeholder="Enter Instructor Code" />
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} required placeholder="Enter Admin Name" />
                        </Form.Group>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" name="username" id="username" value={this.state.username} onChange={this.handleInputChange} required placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" name="password" id="password" value={this.state.password} onChange={this.handleInputChange} required placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group controlId="degree">
                            <Form.Label>Degree</Form.Label>
                            <Form.Control type="text" name="degree" id="degree" value={this.state.degree} onChange={this.handleInputChange} required placeholder="Enter Degree" />
                        </Form.Group>
                        <Form.Group controlId="instructorCourse">
                            <Form.Label>Course</Form.Label>
                            <Form.Control type="text" name="courses" id="courses" value={this.state.courses} onChange={this.handleInputChange} required placeholder="Enter Course" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange}required placeholder="Enter Email Address" />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" id="address"value={this.state.address} onChange={this.handleInputChange} required placeholder="Enter Address" />
                        </Form.Group>


                        <Form.Group controlId="phone">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="text" name="phone" id="phone"value={this.state.phone} onChange={this.handleInputChange} required placeholder="Enter Phone No" />
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

export default CreateInstructor;