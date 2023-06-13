import React from 'react';
import ReactDOM from 'react-dom';
import { Container , Row , Col ,Form , Button , Tabs ,Tab} from 'react-bootstrap';
import Slider from "react-slick";
import Header from './Header';
import Fix from './Section/Fix';
import Recommended from './Section/recomend';
import Footer from './Footer';
import store1 from "./img/g-store.jpg"
import store2 from "./img/a-store.jpg"
import cate1 from "./img/cate1.png"
import cate2 from "./img/cate2.png"
import cate3 from "./img/cate3.png"
import cate4 from "./img/cate4.png"
import cate5 from "./img/cate5.png"
import partner1 from "./img/partner1.png"
import partner2 from "./img/partner2.png"
import store from "./img/store.png"
import protecte from "./img/protected.png"
import flutter from "./img/flutter.png"



export default class Home extends React.Component{
    render(){
        const cateslider = {
            dots: false,
            infinite: true,
            autoplay:true,
            speed: 200,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false
          };
        return( 
          <>
          {/* ---------------home-banner------------ */}
            <div className="home-banner">
              <div className="header">
                <Header />
              </div>
                <Container>
                    <Row>
                        <Col lg="5">
                            <div className="banner-wrap">
                                <div className="banner-info">
                                    <h3>
                                        <span className="orgs">Find Services </span>
                                        <span>For Your Business </span>
                                    </h3>

                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control size="lg" type="search" placeholder="Job title or keyword and location" />
                                            <i class="far fa-search"></i>
                                        </Form.Group>
                                        <Button size="lg">Search</Button>
                                    </Form>
                                    <h4>Download Our App</h4>
                                    <div className="store d-flex">
                                        <div className="imgs">
                                            <img src={store1} className="img-fluid" alt="store"/>
                                        </div>
                                        <div className="imgs">
                                            <img src={store2} className="img-fluid" alt="store"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* --------------category------------ */}
            <div className="category">
                <Container>
                    <div className="title mb-3">
                        <h4>Fix Category</h4>
                    </div>
                    <div className="category-slider">
                        <Slider {...cateslider}>
                            <div className="cate-slide">
                                <div className="category-wrap ">
                                    <img src={cate1} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Graphics <br/>Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cate-slide">
                                <div className="category-wrap ">
                                    <img src={cate2} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Music & <br/>Audio</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cate-slide">
                                <div className="category-wrap ">
                                    <img src={cate3} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Digital <br/> Marketing </p>
                                    </div>
                                </div>
                            </div>
                            <div className="cate-slide">
                                <div className="category-wrap ">
                                    <img src={cate4} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Writing </p>
                                    </div>
                                </div>
                            </div>
                            <div className="cate-slide">
                                <div className="category-wrap ">
                                    <img src={cate5} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Video & <br/> Animation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cate-slide">
                                <div className="category-wrap ">
                                    <img src={cate4} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Writing </p>
                                    </div>
                                </div>
                            </div>
                            <div className="cate-slide">
                                <div className="category-wrap ">
                                    <img src={cate5} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Video & <br/> Animation</p>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    {/* <Row>
                        <Col lg="3">
                            <div className="category-wrap ">
                                <img src={cate1} className="img-fluid" alt="category"/>
                                <div className="text">
                                    <p>Graphics <br/>Design</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="category-wrap ">
                                <img src={cate2} className="img-fluid" alt="category"/>
                                <div className="text">
                                    <p>Music & <br/>Audio</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="3">
                                <div className="category-wrap ">
                                    <img src={cate3} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Digital <br/> Marketing </p>
                                    </div>
                                </div>
                        </Col>
                        <Col lg="3">
                                <div className="category-wrap ">
                                    <img src={cate4} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Writing </p>
                                    </div>
                                </div>
                        </Col>
                        <Col lg="3">
                                <div className="category-wrap ">
                                    <img src={cate5} className="img-fluid" alt="category"/>
                                    <div className="text">
                                        <p>Video & <br/> Animation</p>
                                    </div>
                                </div>
                        </Col>
                    </Row> */}
                </Container>
            </div>
                {/* ---------------feature----------- */}
                <div className="feature">
                    <Container>
                  <div className="title mb-3">
                      <h4>Featured Fixes</h4>
                  </div>
                    </Container>
                    <Fix/>
                </div>
                {/* ------------Recommended----------- */}
                <div className="Recommended">
                    <Container>
                        <div className="title mb-3">
                            <h4>Recommended For You</h4>
                        </div>
                        <Recommended/>
                        <Recommended/>
                        <Recommended/>
                    </Container>
                </div>

                {/* ---------the Blend---------- */}
                <div className="blend">
                    <div className="blend-heading">
                        <Container>
                            <div className="blend-wrap">
                                <div className="blend-info text-center">
                                    <h4>feel the blend</h4>
                                    <p>We make buying and selling more of a colaborative relation rather <br/> than a manipulative one</p>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className="blend-tabs">
                        <Container>
                            <Tabs defaultActiveKey="home"  transition={false}  id="noanim-tab-example" className="mb-3" >
                                <Tab eventKey="home" title="How Fixlancer Works" className="tab1">
                                    <Row>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb1">Find services</h5>
                                                <p>search for a service , with few details, describe your project you wi;; have the freedom to choose from lots of expert that are ready to get your jobs</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb2">Hire with rease</h5>
                                                <p>We only house the best handswhen it comes to digital jobs, and we will walk you through every process until your job is done. No setup fee, No hidden charges</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb3">Work together</h5>
                                                <p>Chat dirtectly with your expert.
                                                    Ask question and request for changes where possible.
                                                    Feel the blend of friendship and work in one place.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="profile" title="Why Fixlancer?" className="tab2">
                                    <Row>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb1">Find an expert fast</h5>
                                                <p>It can take hours to find the perfect hand for yourvproject,but not with Fixlancer.Find services in miuntes with fixed prices all from the comfort of your home.</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb2">Secured payment always</h5>
                                                <p>Noted that for every service, You'll make an upfront payment. Your payment will be held on escrow until you approve the job based on your satisfaction.</p>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="tab-wrap">
                                                <h5 className="tb3">24/7 assitance</h5>
                                                <p>Our help team is always available and ready to give you that premium support you need wherever, whenever.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                            </Tabs>
                        </Container>
                    </div>
                </div>

            {/* --------Our Partners-------- */}
            <div className="Partner">
                <Container fluid={true}>
                    <div className="title">
                        <h3>our partners</h3>
                    </div>
                    <Row>
                        <Col lg="6">
                            <div className="partner-wrap">
                                <div className="partner-img">
                                    <img src={partner1} className="img-fluid" alt="Partner" />
                                </div>
                            </div>
                        </Col>
                        <Col lg="6">
                            <div className="partner-wrap">
                                <div className="partner-img">
                                    <img src={partner2} className="img-fluid" alt="Partner" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ----------Experience--------- */}
            <div className="experience">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="experience-wrap">
                                <div className="experience-info text-center">
                                    <h4>Experience Fixlancer better</h4>
                                    <h4>on our mobile app</h4>
                                    <div className="erper-img py-3">
                                        <img src={store} className="w-25" alt="experience" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="protected">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="protected-wrap">
                                <div className="p-img">
                                    <img src={protecte} className="img-fluid" alt="protected" />
                                </div>
                                <div className="text">
                                    <h4>Funds Protected</h4>
                                    <p>We monitor every transcation and have smart procedures to protect <br/>
                                    you from phishing, fraud and identity theft.</p>
                                </div>

                                <div className="protected-box">
                                    <div className="box-wrap">
                                        <div className="box-info">
                                            <h5>Deposits are processed by us
                                            and Secured by:
                                            </h5>
                                            <div className="box-img">
                                              <img src={flutter} className="img-fluid" alt="flutter" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="F-Footer">
                <Footer />
            </div>

          </>
         )
        }
    }
