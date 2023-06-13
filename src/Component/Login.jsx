import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col , Form , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/logo.png"
import store from "./img/store.jpeg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";



export default class Login extends React.Component{
    render(){
        return( 
          <>
          <div className="login">
              <Container fluid={true} >
                  <Row>
                      <Col lg="6" className="p-0" >
                        <div className="login-wrap">
                            <div className="login-info">
                                <div className="login-box">
                                    <div className="box-wrap">
                                        <div className="title">
                                            <h4>Login to your account!</h4>

                                        </div>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email" />
                                                {/* <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                                </Form.Text> */}
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter Your Password" />
                                            </Form.Group>
                                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Check me out" />
                                            </Form.Group> */}
                                            <Button variant="primary"  className="d-block" type="submit">
                                            Login to Continue
                                            </Button>

                                            <div className="text">
                                                <span>Don’t have an account ? <Link to="/register">Sign up</Link></span>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="6" className="p-0" >
                        <div className="login-wrap login-content">
                            <div className="login-info">
                                <div className="logo text-center">
                                    <Link to="/">
                                    <img src={logo} className="img-fluid" alt="logo" />
                                    </Link>
                                </div>
                                <div className="texts text-center">
                                    <p>We give you the levereage to get jobs <br/> done person in an easy, fast and <br/> secured way</p>
                                </div>
                                <div className="imgs  text-center">
                                    <img src={store} alt="" />
                                </div>
                            </div>
                        </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          </>
         )
        }
    }