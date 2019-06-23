import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import '../../Home.css'
import '../../Slideshow.scss'
import Nav from '../Navigator'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from "../../Navigator";



class EditAdmin extends Component{

    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>
                <div className="editComponent">
                    <Card className="EditFrom">
                        <Card.Header>Edit Admin</Card.Header>
                        <Card.Body>
                            <Card.Title className="CreateFrom">Edit New Admin</Card.Title>
                            <Form className="CreateFrom" >
                                <Form.Group controlId="adminId">
                                    <Form.Label>Admin ID</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId"   />
                                </Form.Group>
                                <Form.Group controlId="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" id="name"/>
                                </Form.Group>
                                <Form.Group controlId="adminUserName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId" />
                                </Form.Group>
                                <Form.Group controlId="AdminEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type="email" name="name" id="name"/>
                                </Form.Group>
                                <Form.Group controlId="adminAddress">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId"/>
                                </Form.Group>
                                <Form.Group controlId="AdminPhoneNo">
                                    <Form.Label>Phone No</Form.Label>
                                    <Form.Control type="email" name="name" id="name"/>
                                </Form.Group>

                                <Button variant="primary" type="submit" name="AddButton" id="AddButton">
                                    Add
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>

                <br/><br/>
                <Footer/>

            </div>
        )
    }
}

export default EditAdmin;