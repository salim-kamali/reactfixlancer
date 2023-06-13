import React from 'react';
import ReactDOM from 'react-dom';
import { Nav , Navbar , Form , NavDropdown , Button ,ListGroup ,Container} from 'react-bootstrap';
import logo from "./img/f-logo.png"
import prof from "./img/hprof.png"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


export default class Header extends React.Component{
    render(){
        return( 
          <>
          <div className="main-header">
            <Navbar collapseOnSelect expand="lg" >
                <Container fluid={true}>
                <Navbar.Brand >
                    <Link to="/hometwo">
                        <img src={logo} className="img-fluid" alt="logo" />
                    </Link>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link>
                        <Link className="color-chgs" to="/">HOME</Link>
                    </Nav.Link>
                    <NavDropdown title="Job Request" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link >
                        <Link className="color-chgs" to="/filter">Start Selling</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link className="color-chgs" to="/view">Manage Sales</Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link className="color-chgs" to="/searchfix">Manage Orders</Link>
                    </Nav.Link>
                    <NavDropdown title="Finance" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                        <div className="search">
                         <Form.Control size="sm" type="search" placeholder="Search" />
                        </div>
                    <Nav.Link href="#deets"><i class="fa fa-envelope" aria-hidden="true"></i></Nav.Link>
                    <Nav.Link  href="#memes">
                        <i class="fa fa-bell" aria-hidden="true"></i>
                    </Nav.Link>
                        <div className="profile">
                            <span>amanda</span>
                            <span className="imgs">
                                <img src={prof} className="img-fluid" alt="profile" />
                            </span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="nav2 d-none d-md-none d-lg-block">
                <Container fluid={true} >
                <ListGroup horizontal>
                    <ListGroup.Item>Graphic & Design</ListGroup.Item>
                    <ListGroup.Item>Digitel Marketing</ListGroup.Item>
                    <ListGroup.Item>Writing & Translation</ListGroup.Item>
                    <ListGroup.Item>Video & Animation</ListGroup.Item>
                    <ListGroup.Item>Music & Audio</ListGroup.Item>
                    <ListGroup.Item>Programming & Tech</ListGroup.Item>
                    <ListGroup.Item>Business</ListGroup.Item>
                    <ListGroup.Item>Lifestyle</ListGroup.Item>
                </ListGroup>
                </Container>
            </div>
          </div>
          </>
         )
        }
    }