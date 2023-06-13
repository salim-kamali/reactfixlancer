import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col , Modal , Button , ListGroup} from 'react-bootstrap';
import Header from "./Mheader";
import Recommmed from "./Section/recomend";
import Footer from "./Footer";
import pro1 from "./img/pro1.png"
import pro2 from "./img/pro2.png"
import pro3 from "./img/pro3.png"
import pro4 from "./img/pro4.png"
import blog7 from "./img/blog7.png"
import blog8 from "./img/blog8.png"
import blog9 from "./img/blog9.png"
import blog10 from "./img/blog10.png"
import blog11 from "./img/blog11.png"
import blog12 from "./img/blog12.png"
import blog13 from "./img/blog13.png"
import blog14 from "./img/blog14.png"
import blog15 from "./img/blog15.png"
import blog16 from "./img/blog16.png"
import blog17 from "./img/blog17.png"
import blog18 from "./img/blog18.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default class Searchfix extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      close: false,
    };
  } 
    render(){
        return( 
          <>
          <div className="header">
              <Header/>
          </div>
            <div className="searchfix">
              <Container>
                <Row>
                  <Col lg="8">
                    <div className="filter">
                      <div className="filter-wrap">
                        <div className="result-text">
                          <h5>Showing 14,000 results for “Design Logo”</h5>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="filter">
                      <div className="filter-wrap">
                        <div className="filter-btn text-end">
                          <button variant="none" onClick={() => this.setState({ show: true })}>
                            Filter<i class="fal fa-sliders-h"></i></button>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog7} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro1} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog8} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro2} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog9} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro3} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog10} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro4} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
            
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog11} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro1} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog12} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro2} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog13} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro3} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog14} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro4} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>

                </Row>
              </Container>
               < Recommmed/>
               <Container>
                  <Row>
                    
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog15} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro1} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog16} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro2} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog17} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro3} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="fixe-box">
                        <div className="fixe-wrap">
                            <div className="fixe-info">
                                <div className="f-img">
                                    <img src={blog18} className="img-fluid" alt="fixe"/>
                                </div>
                                <div className="f-text">
                                    <div className="f-title">
                                        <span>
                                            <img src={pro4} className="img-fluid" alt="profile"/>
                                        </span>
                                        <span className="name">sadically_creative</span>
                                    </div>

                                    <div className="desc">
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit</p>
                                    </div>
                                    
                                    <div className="nums d-flex justify-content-between">
                                        <div className="rating">
                                            <span className="icn"><i class="fas fa-star" aria-hidden="true"></i></span>
                                            <span className="n1 px-2">5.0</span>
                                            <span className="n2">(6)</span>
                                        </div>
                                        
                                        <div className="number">
                                            <span>N10,000</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                  </Col>

                  </Row>
               </Container>
            </div>
            <Footer/>

            <Modal
              show={this.state.show}
              animation={true}
              size="md" className="" shadow-lg border>
              {/* <Modal.Header className="bg-danger text-white text-center py-1">
                <Modal.Title className="text-center">
                  <h5>Delete</h5>
                </Modal.Title>
              </Modal.Header> */}
              <Modal.Body className="">
                <h4>Filter Results</h4>
                <Button
                      variant="outline-dark" onClick={() => this.setState({ show: false })}><i class="fa fa-times" aria-hidden="true"></i></Button>
                      <div className="content-wrap">
                        <div className="price">
                        <h5>price</h5>
                        </div>
                        <div className="category">
                          <h5>category</h5>
                          <ListGroup>
                            <ListGroup.Item>Graphic & Design</ListGroup.Item>
                            <ListGroup.Item>Logo Design</ListGroup.Item>
                            <ListGroup.Item>Mobile Applications</ListGroup.Item>
                            <ListGroup.Item>iOS Applications</ListGroup.Item>
                            <ListGroup.Item>Android Application</ListGroup.Item>
                        </ListGroup>
                        </div>
                      </div>
              </Modal.Body>
            </Modal>

          </>
         )
        }
    }