import React, {Component} from 'react';
import logo from './resources/logo.png'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

class Navigator extends Component{
    render(){
        return(
            <div>
                <NavigatorBar/>
            </div>

        )
    }
}

class NavigatorBar extends Component {
    handleSelect(eventKey) {
        alert(`selected ${eventKey}`);
    }
    render(){
        return(
            <div className="header">
                <img src={logo}/>

                <Nav variant="pills" onSelect={k => this.handleSelect(k)}>
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="#/home">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Courses" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">BSc(Hons) in Information Technology - SE</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">BSc(Hons) in Information Technology - IT</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            BSc(Hons) in Information Technology - ISE
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Modules" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Introduction to Computing System</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Application Frameworks</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">
                            Software Architecture
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="#/home">
                            Notices
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="1" href="#/home">
                            About
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>


        )
    }
}

export default Navigator;