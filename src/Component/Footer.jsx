import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col , ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./img/f-logo.png"
import store1 from "./img/a-store.jpg"
import store2 from "./img/g-store.jpg"



export default class Footer extends React.Component{
    render(){
        return( 
          <>
          <div className="footer">
              <Container>
                  <Row>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Company</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Quick Links</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Start Selling</ListGroup.Item>
                                        <ListGroup.Item>Post Job Request</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Connect</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Facebook</ListGroup.Item>
                                        <ListGroup.Item>Instargram</ListGroup.Item>
                                        <ListGroup.Item>Twitter</ListGroup.Item>
                                        <ListGroup.Item>Linkedin</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="footer-wrap">
                            <div className="footer-info">
                                <div className="title">
                                    <h4>Leagal</h4>
                                </div>
                                <div className="list">
                                    <ListGroup>
                                        <ListGroup.Item>Terms and Conditions</ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </div>
                      </Col>
                  </Row>

                  <div className="footer-bottom">
                      <div className="logo">
                        <img src={logo} className="img-fluid" alt="logo"/>
                      </div>
                      <div className="text">
                          <p>Nigeria’s premiumn Online marketplace</p>
                      </div>
                      <div className="icons">
                          <span><i class="fab fa-facebook-square" aria-hidden="true"></i></span>
                          <span><i class="fab fa-twitter" aria-hidden="true"></i></span>
                          <span><i class="fab fa-youtube" aria-hidden="true"></i></span>
                      </div>
                      <div className="store-imgs">
                          <div className="stores-wrap">
                            <img src={store1} className="img-fluid" alt="store"/>
                            <img src={store2} className="img-fluid" alt="store"/>
                          </div>
                      </div>
                  </div>

              </Container>
          </div>
          </>
         )
        }
    }