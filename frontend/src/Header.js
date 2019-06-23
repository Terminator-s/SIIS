import React, {Component} from 'react';
import logo from './resources/logo.png'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
class Header extends Component{
    render(){
        return(
            <div>
            <HeaderBar/>
            </div>

        )
    }
}

class HeaderBar extends Component{
    render(){
        return(
            <div className="header-bar">
                <b> <p>
                    Have any question? &nbsp; &nbsp;
                    <i className="fa fa-phone"></i> 0112345879 &nbsp; &nbsp;
                    <i className="fa fa-envelope"></i> info@coursera.lk
                    <div className="header-bar-right w3-xlarge" ><i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-youtube"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-google-plus"></i>
                        <i className="fa fa-linkedin"></i>
                    </div>
                </p></b>
            </div>

        )
    }
}
export default Header;