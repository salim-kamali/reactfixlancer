import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col , Tab , Tabs ,ListGroup , Button} from 'react-bootstrap';
import Header from "./Mheader";
import Recommended from "../Component/Section/recomend";
import viewbnr from "./img/view-banner.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



export default class Viewfix extends React.Component{
    render(){
        return( 
          <>
          <div className="header">
              <Header/>
          </div>
          <div className="view-banner">
              <Container>
                  <Row className="justify-content-center">
                      <Col lg="6">
                        <div className="banner-wrap">
                            <div className="banner-info">
                                <img src={viewbnr} className="img-fluid" alt="" />
                            </div>
                        </div>
                      </Col>
                  </Row>
              </Container>
          </div>

          <div className="view-tabs">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Description" >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Enim mattis <br/> facilisis ac elit adipiscing amet, ultrices sed.
                         Sed tortor amet est,<br/> commodo laoreet turpis. Fames risus,
                          diam lobortis interdum vitae<br/> viverra pellentesque luctus pharetra. 
                          Erat lorem laoreet nisi, nec facilisi <br/> vehicula.Lorem ipsum dolor sit 
                          amet, consectetur adipiscing elit. Enim <br/>mattis </p>
                </Tab>
                <Tab eventKey="profile" title="Work Samples">
                    <h1>tab 2</h1>
                </Tab>
            </Tabs>
          </div>

          <div className="point">
              <Container>
                  <Row>
                      <Col>
                        <div className="point-wrap">
                            <div className="point-info">
                            <ListGroup>
                                <ListGroup.Item> <span className="check"><i class="far fa-check" aria-hidden="true"></i></span> For extra fast delivery in less than 8 hours for N1,000</ListGroup.Item>
                                <ListGroup.Item> <span className="info"> <i class="fa fa-info" aria-hidden="true"></i></span> You funds are held on escrow till your job is completed</ListGroup.Item>
                            </ListGroup>
                            </div>
                        </div>
                      </Col>
                  </Row>
              </Container>
          </div>

          <div className="view-btns">
              <Container>
                  <Row>
                      <div className="btn-wrap">
                        <Button className="chat" > <i class="fas fa-comment-dots    "></i> Chat</Button>
                        <Button className="order">Order Now N5,000</Button>
                      </div>
                  </Row>
              </Container>
          </div>
          
                {/* ------------Recommended----------- */}
                <div className="Recommended">
                    <Container>
                        <div className="title mb-3">
                            <h4>Recommended For You</h4>
                        </div>
                        <Recommended/>
                    </Container>
                </div>
          </>
         )
        }
    }