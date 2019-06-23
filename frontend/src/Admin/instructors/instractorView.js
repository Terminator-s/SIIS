import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditInstructor from "./instractorEdit";
import axios from 'axios';

class ViewInstructor extends Component{

    next = function(e){
        ReactDOM.render(<EditInstructor />, document.getElementById('root'));
    };
    constructor() {
        super()
        this.state = {
            instructors:[]

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/instructor').then(
            data => {
                this.setState({
                    instructors: data.data.message
                });
            }
        ).catch(err=>{
            console.log(err);

        })
    }
    render() {
        return(
            <div>
                <Card.Body>
                    <Card.Title>View Instructors</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Degree</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.instructors.map(cou => {
                                return (
                                    <tr key={cou._id}>
                                        <td>{cou.code}</td>
                                        <td>{cou.name}</td>
                                        <td>{cou.username}</td>
                                        <td>{cou.degree}</td>
                                        <td>{cou.courses}</td>
                                        <td>{cou.email}</td>
                                        <td>{cou.address}</td>
                                        <td>{cou.phone}</td>


                                        <td><Button variant="success" onClick={e => this.next(e)}>Edit</Button></td>
                                        <td><Button variant="danger">Delete</Button></td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </Table>
                </Card.Body>
            </div>
        )
    }
}

export default ViewInstructor;