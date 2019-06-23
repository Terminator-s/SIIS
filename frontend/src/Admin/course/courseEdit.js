import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {Form, Col} from 'react-bootstrap'
import '../admin.css'
import '../../Home.css'
import '../../Slideshow.scss'
import HeaderMain from '../../Header'
import Footer from '../../Footer'
import Nav from '../../Navigator'
import axios from "./courseCreate";



class EditCourse extends Component{
    constructor() {
        super();
        this.state = {
            courseId: '',
            courseName: '',
            year: '',
            semester: '',
            instructor: '',
            courses:[]
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
        axios.get('http://localhost:3001/courses').then(
            data => {
                console.log(data);
                console.log(data.data.data);
                this.setState({
                    courses: data.data.data
                })
            }
        )
    }
    render() {
        return(
            <div >
                <HeaderMain/>
                <Nav/>>
                <div className="SeditComponent">
                    <Card className="EditFrom">
                        <Card.Header>Edit Course</Card.Header>
                        <Card.Body>
                            <Card.Title className="CreateFrom">Edit New Course</Card.Title>
                            <Form className="sCreateFrom" >

                                <Form.Group controlId="courseID">
                                    <Form.Label>Course Id</Form.Label>
                                    <Form.Control type="text" name="adminId" id="adminId" />
                                </Form.Group>
                                 <Form.Group controlId="courseName">
                                     <Form.Label>Course Name</Form.Label>
                                     <Form.Control type="text" name="courseId" id="courseName"/>
                                 </Form.Group>

                                <Form.Group as={Col} controlId="semester">
                                    <Form.Label>Semester</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>1st Semester</option>
                                        <option>2nd Semester</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="instructor">
                                    <Form.Label>Instructor</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>1st Semester</option>
                                        <option>2nd Semester</option>
                                    </Form.Control>
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

export default EditCourse;