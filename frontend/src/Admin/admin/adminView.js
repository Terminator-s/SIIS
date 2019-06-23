import React, {Component} from 'react';
import {Table, Card, Button} from "react-bootstrap";
import ReactDOM from "react-dom";
import EditAdmin from "./adminEdit";
import axios from 'axios';

class ViewAdmin extends Component{
    next = function(e){
        ReactDOM.render(<EditAdmin />, document.getElementById('root'));
    };
    constructor() {
        super()
        this.state = {
            admins:[]

        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/admin').then(
            data => {
                this.setState({
                    admins: data.data.message
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
                    <Card.Title>View Admin</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>AdminId</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.admins.map(cou => {
                                return (
                                    <tr key={cou._id}>
                                        <td>{cou.code}</td>
                                        <td>{cou.name}</td>
                                        <td>{cou.username}</td>
                                        <td>{cou.password}</td>
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

export default ViewAdmin;