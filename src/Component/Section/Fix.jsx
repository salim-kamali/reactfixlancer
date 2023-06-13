import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fixe1 from "../img/fixe1.png"
import fixe2 from "../img/fixe2.png"
import fixe3 from "../img/fixe3.png"
import fixe4 from "../img/fixe4.png"
import pro1 from "../img/pro1.png"
import pro2 from "../img/pro2.png"
import pro3 from "../img/pro3.png"
import pro4 from "../img/pro4.png"
import Slider from "react-slick";
 

export default class Fix extends React.Component{
    render(){
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            // prevArrow: false,
            arrows: true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 1,
                  arrows: false,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                  dots: true
                }
              }
            ]
          };
        return( 
          <>
        <div className="try">
            <Container>
                <Slider {...settings}>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe1} className="img-fluid" alt="fixe"/>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe2} className="img-fluid" alt="fixe"/>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe3} className="img-fluid" alt="fixe"/>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe4} className="img-fluid" alt="fixe"/>
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
                    </div>
                    {/* ----------------------- */}
                    
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe3} className="img-fluid" alt="fixe"/>
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
                    </div>
                    <div>
                        <div className="fixe-box">
                            <div className="fixe-wrap">
                                <div className="fixe-info">
                                    <div className="f-img">
                                        <img src={fixe4} className="img-fluid" alt="fixe"/>
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
                    </div>
                </Slider>
            </Container>
        </div>
          {/* <div className="feature-bg">
              <Container>
                  <Row>
                      <Col >
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={fixe1} className="img-fluid" alt="fixe"/>
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
                      <Col >
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={fixe2} className="img-fluid" alt="fixe"/>
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
                      <Col >
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={fixe3} className="img-fluid" alt="fixe"/>
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
                      <Col >
                          <div className="fixe-box">
                              <div className="fixe-wrap">
                                  <div className="fixe-info">
                                      <div className="f-img">
                                          <img src={fixe4} className="img-fluid" alt="fixe"/>
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
          </div> */}
          </>
         )
        }
    }