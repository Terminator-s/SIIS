import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'

class CreateNotices extends Component{

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