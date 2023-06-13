import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Col , Row} from 'react-bootstrap';
import Mheader from "./Mheader"
import Footer from './Footer';
import Fix from './Section/Fix';
import Recommended from './Section/recomend';
import balance from "./img/balance.png"
import sale1 from "./img/sale1.png"
import sale2 from "./img/sale2.png"



export default class Headertwo extends React.Component{
    render(){
        return( 
          <>
          <div className="header">
              <Mheader/>
          </div>
          <div className="mhome-banner">
              <Container>
                  <Row className="justify-content-center">
                      <Col lg="3">
                        <div className="banner-wrap bbox1">
                            <div className="banner-box">
                                <div className="box-img">
                                    <img src={sale1} className="img-fluid" alt="balance" />
                                </div>
                            </div>
                            <div className="box-info">
                                <div className="box-text">
                                    <span>Ongoing Sales</span>
                                    <h4>10</h4>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="banner-wrap bbox2">
                            <div className="banner-box">
                                <div className="box-img">
                                    <img src={balance} className="img-fluid" alt="balance" />
                                </div>
                            </div>
                            <div className="box-info">
                                <div className="box-text">
                                    <span>balance</span>
                                    <h4>N30,000.00</h4>
                                </div>
                            </div>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="banner-wrap bbox3">
                            <div className="banner-box">
                                <div className="box-img">
                                    <img src={sale2} className="img-fluid" alt="balance" />
                                </div>
                            </div>
                            <div className="box-info">
                                <div className="box-text">
                                    <span>Ongoing Orders</span>
                                    <h4>4</h4>
                                </div>
                            </div>
                        </div>
                      </Col>
                  </Row>
              </Container>
          </div>
          
                <div className="feature">
                    <Container>
                  <div className="title mb-3">
                      <h4>My Fixes</h4>
                  </div>
                    </Container>
                    <Fix/>
                </div>
                {/* ------------Recommended----------- */}
                <div className="Recommended">
                    <Container>
                        <div className="title mb-3">
                            <h4>Featured</h4>
                        </div>
                        <Recommended/>
                    </Container>
                </div>

                <div className="F-footer">
                    <Footer/>
                </div>

          </>
         )
        }
    }