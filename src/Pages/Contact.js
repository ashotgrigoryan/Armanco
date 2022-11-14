import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/layouts/style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import { GoLocation } from "react-icons/go";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import SetLang from "../Pages/Multilang/SetLang";
import { FormattedMessage } from "react-intl";
import Chairimg from '../assets/img/everypgch.webp';

function Contact(){
    return(
        <>
        
        <Container fluid className="everypgch">
                <Row>
                    <Col>
                        <div>
                            <img src={Chairimg} className="img-fluid" />
                        </div>
                        <div className="forlink">
                            <div className="cntcr">
                                <h1>
                                    <FormattedMessage id="menu_contact" />
                                </h1>
                            </div>
                            <Link to={'/'}>
                                <FormattedMessage id="menu_home" />
                            </Link>
                            <span>/</span>
                            <h6><FormattedMessage id="menu_contact" /></h6>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="contactmt">
                <Row>
                    <Col>
                        <Row>
                            <div className="col-xl-6 col-md-12 col-lg-6 col-sm-12 col-12">
                                <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12">
                                    <h4>Find us here.</h4>
                                </div>
                                <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 paddcont">
                                    <Row>
                                    <div className="col-xl-1 col-md-1 col-lg-1 col-sm-1 col-1 for_svg">
                                        <GoLocation />
                                    </div>
                                    <div className="col-xl-11 col-md-11 col-lg-11 col-sm-11 col-11">
                                        <h6>Address:</h6>
                                        1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                                    </div>
                                    </Row>
                                </div>
                                <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 paddcont">
                                    <Row>
                                    <div className="col-xl-1 col-md-1 col-lg-1 col-sm-1 col-1 for_svg">
                                        <BsTelephoneInboundFill />
                                    </div>
                                    <div className="col-xl-11 col-md-11 col-lg-11 col-sm-11 col-11">
                                        <h6>Phone Number:</h6>
                                        (800) 123 456 789, (800) 987 654 321
                                    </div>
                                    </Row>
                                </div>
                                <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 paddcont">
                                    <Row>
                                    <div className="col-xl-1 col-md-1 col-lg-1 col-sm-1 col-1 for_svg">
                                        <HiOutlineMailOpen />
                                    </div>
                                    <div className="col-xl-11 col-md-11 col-lg-11 col-sm-11 col-11">
                                        <h6>Email:</h6>
                                        Contact@erentheme.com
                                    </div>
                                    </Row>
                                </div>
                                <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 aboutstock">
                                Outstock is a premium Templates theme with advanced admin 
                                module. It's extremely customizable, easy to use and fully 
                                responsive and retina ready. Vel illum dolore eu feugiat 
                                nulla facilisis at vero eros et accumsan et iusto odio 
                                dignissim qui blandit praesent luptatum zzril delenit 
                                augue duis dolore te feugait nulla facilisi.
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-12 col-lg-6 col-sm-12 col-12">
                                <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12">
                                    <h4>Contact us</h4>
                                </div>
                                <form>
                                <Row>
                                    <div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6 inputt">
                                        <h6><label for="text">Name</label></h6>
                                        <input id="text" type={'text'} placeholder="Name" required></input>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6 inputt">
                                        <h6><label for="email">Email</label></h6>
                                        <input id="email" type={'email'} placeholder="Email" required></input>
                                    </div>
                                </Row>
                                    <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 inputt">
                                        <h6><label for="message">Message</label></h6>
                                        <input id="message" placeholder="Message" required></input>
                                    </div>
                                    <div className="col-xl-4 col-md-5 col-lg-5 col-sm-5 col-5 button">
                                        <button type="submit">
                                            Send message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        
        </>
    )
}

export default Contact