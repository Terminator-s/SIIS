import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../Home.css'
import '../Slideshow.scss'
import HeaderMain from '../Header'
import Footer from '../Footer'
import Nav from '../Navigator'
import './admin.css'
import {Card, CardDeck, Button} from 'react-bootstrap'
import student from '../resources/student.png'
import instructor from '../resources/instructors.png'
import course from '../resources/courses.png'
import notice from '../resources/notice.png'
import admin from '../resources/admin.png'
import AdminViewCreate from "./admin/adminViewCreate";
import StudentsViewCreate from "./students/studentsViewCreate";
import InstructorViewCreate from "./instructors/instractorViewCreate"
import CourseViewCreate from "./course/courseViewCreate"
import NoticeViewCreate from "./notices/noticeViewCreate"



class adminHome extends Component {
    next = function(e){
        ReactDOM.render(<AdminViewCreate />, document.getElementById('root'));
    };

    nextS = function(e){
        ReactDOM.render(<StudentsViewCreate />, document.getElementById('root'));
    };

    nextI = function(e){
        ReactDOM.render(<InstructorViewCreate />, document.getElementById('root'));
    };

    nextC = function(e){
        ReactDOM.render(<CourseViewCreate />, document.getElementById('root'));
    };

    nextN = function(e){
        ReactDOM.render(<NoticeViewCreate />, document.getElementById('root'));
    };

    render() {
        return (
            <div>
                <HeaderMain/>
                <Nav/>
                <div className="cardDiv">
                    <div>
                        <CardDeck>
                            <Card>
                            <Card.Img className="img" variant="top" src={admin} />
                            <Card.Body className="body"  align="center">
                                <Card.Title className="title">Admin</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted"><Button variant="primary" onClick={e => this.next(e)}>View</Button></small>
                            </Card.Footer>
                        </Card>
                            <Card>
                                <Card.Img className="img" variant="top" src={student} />
                                <Card.Body align="center">
                                    <Card.Title className="title">Students</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"><Button variant="primary" onClick={e => this.nextS(e)}>View</Button></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img className="img" variant="top" src={instructor} />
                                <Card.Body className="body"  align="center">
                                    <Card.Title className="title">Instructors</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"><Button variant="primary" onClick={e => this.nextI(e)}>View</Button></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img className="img" variant="top" src={course} />
                                <Card.Body align="center">
                                    <Card.Title className="title">Course</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"><Button variant="primary" onClick={e => this.nextC(e)}>View</Button></small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img className="img" variant="top" src={notice} />
                                <Card.Body align="center">
                                    <Card.Title className="title">Notice</Card.Title>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted"><Button variant="primary" onClick={e => this.nextN(e)}>View</Button></small>
                                </Card.Footer>
                            </Card>

                        </CardDeck>
                    </div>
                </div>
                <br/><br/>
                <Footer/>
            </div>
        );
    }
}

export default adminHome;