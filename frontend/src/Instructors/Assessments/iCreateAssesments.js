import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../iInstructors.css'
import axios from "../../Admin/course/courseCreate";

class CreateAssessments extends Component{
    constructor() {
        super();
        this.state = {
            assignmentId: '',
            assModulesName: '',
            assModulesCode: '',
            assCourseYear: '',
            assCourseSemester: '',
            Instructor: '',
            assTopic:'',
            assDescription:'',
            assDueDate:'',
            assDueTime:''

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
            assignmentId: this.state.assignmentId,
            assModulesName: this.state.assModulesName,
            assModulesCode: this.state.assModulesCode,
            assCourseYear: this.state.assCourseYear,
            assCourseSemester: this.state.assCourseSemester,
            Instructor: this.state.Instructor,
            assTopic:this.state.assTopic,
            assDescription:this.state.assDescription,
            assDueDate:this.state.assDueDate,
            assDueTime:this.state.assDueTime
        }
        axios.post('http://localhost:3001/assignment',obj).then(
            data => {
                alert('Successfull' + JSON.stringify(data.data.data));
            }
        ).catch(err=>{
            console.log(obj);
        })
        this.setState({
            assignmentId: '',
            assModulesName: '',
            assModulesCode: '',
            assCourseYear: '',
            assCourseSemester: '',
            Instructor: '',
            assTopic:'',
            assDescription:'',
            assDueDate:'',
            assDueTime:''
        })
    }

    render() {
        return (
            <div>
                <Card.Body>
                    <Card.Title className="CreateFrom">Add New Assessment</Card.Title>
                    <Form className="CreateFrom" >
                        <Form.Group controlId="AssTopic">
                            <Form.Label>Module</Form.Label>
                            <Form.Control type="text" name="AssTopic" id="AssTopic" value={this.state.assignmentId} onChange={this.handleInputChange}required placeholder="Case Study" />
                        </Form.Group>
                            <Form.Group controlId="AssTopic">
                                <Form.Label>Module</Form.Label>
                                <Form.Control type="text" name="AssTopic" id="AssTopic" value={this.state.assModulesName} onChange={this.handleInputChange}required placeholder="Case Study" />
                            </Form.Group>

                        <Form.Group controlId="AssTopic">
                            <Form.Label>Module</Form.Label>
                            <Form.Control type="text" name="AssTopic" id="AssTopic"value={this.state.assModulesCode} onChange={this.handleInputChange} required placeholder="Case Study" />
                        </Form.Group>

                        <Form.Group controlId="AssTopic">
                            <Form.Label>Module</Form.Label>
                            <Form.Control type="text" name="AssTopic" id="AssTopic" value={this.state.assCourseYear} onChange={this.handleInputChange}required placeholder="Case Study" />
                        </Form.Group>

                        <Form.Group controlId="AssTopic">
                            <Form.Label>Assessment Topic</Form.Label>
                            <Form.Control type="text" name="AssTopic" id="AssTopic" value={this.state.assCourseSemester} onChange={this.handleInputChange}required placeholder="Case Study" />
                        </Form.Group>

                        <Form.Group controlId="AssDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" name="AssDescription" id="AssDescription" value={this.state.Instructor} onChange={this.handleInputChange}required placeholder="Short description about assessment" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="date">
                                <Form.Label>Due date</Form.Label>
                                <Form.Control type="date" name="date" id="date" value={this.state.assTopic} onChange={this.handleInputChange}required placeholder="dd/mm/yy" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="time">
                                <Form.Label>Due Time</Form.Label>
                                <Form.Control type="time" name="time" id="time" value={this.state.assDescription} onChange={this.handleInputChange}required placeholder="dd/mm/yy" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="AssFile">
                            <Form.Label>Upload Assessment Document</Form.Label>
                            <Form.Control type="file" name="AssFile" id="AssFile"  placeholder="Case Study" />
                        </Form.Group>

                        <Button variant="primary" type="submit" name="AssFile" id="AssFile">
                            Publish
                        </Button>
                    </Form>
                </Card.Body>
            </div>
        );
    }
}

export default CreateAssessments;