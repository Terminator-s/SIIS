import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from '../../Navigator'



class EditNotices extends Component{

    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>
                <div className="SeditComponent">
                    <Card className="EditFrom">
                        <Card.Header>Edit Notices</Card.Header>
                        <Card.Body>
                            <Card.Title className="CreateFrom">Edit New Notices</Card.Title>
                            <Form className="sCreateFrom" >
                                <Form.Group controlId="NoticesID">
                                    <Form.Label>Notices Id</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId"  />
                                </Form.Group>
                                <Form.Group controlId="NoticesDescription">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="AssDescription" />
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

export default EditNotices;