import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import axios from 'axios';

class CreateAdmin extends Component{
    constructor() {
        super();
        this.state = {
            code: '',
            name: '',
            username: '',
            password: '',
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
            code: this.state.code,
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            address: this.state.address,
            phone:this.state.phone

        }
        axios.post('http://localhost:3001/admin/add/',obj).then(
            data => {
                alert('Successfull' + JSON.stringify(data.data.message));
            }
        ).catch(err=>{
            console.log(err);
        })
        this.setState({
            code: '',
            name: '',
            username: '',
            password: '',
            email: '',
            address: '',
            phone:''
        })
    }


    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="CreateFrom">Add New Admin</Card.Title>
                    <Form className="CreateFrom" onSubmit={this.handleSubmit}>
                        <Form.Group controlId="code">
                            <Form.Label>Admin ID</Form.Label>
                            <Form.Control type="text" name="code" id="code"value={this.state.code} onChange={this.handleInputChange} required placeholder="Enter admin Id" />
                        </Form.Group>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange}required placeholder="Enter Admin Name" />
                        </Form.Group>
                        <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" name="username" id="username"value={this.state.username} onChange={this.handleInputChange} required placeholder="Enter Username" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange}required placeholder="Enter Email Address" />
                        </Form.Group>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" id="address" value={this.state.address} onChange={this.handleInputChange} required placeholder="Enter Address" />
                        </Form.Group>
                        <Form.Group controlId="phone">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange}required placeholder="Enter Phone No" />
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