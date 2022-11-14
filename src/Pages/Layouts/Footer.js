import React from "react";
import { NavLink } from "react-router-dom";
import LogoColor from '../../assets/img/logo_color.svg';
import { GoLocation } from "react-icons/go";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import "../../assets/css/layouts/style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";



function Footer(){
    return(
        <>
            <Container fluid className="fter">
  <Container>
  <Row>
    <Col>
      <Row>
        <div className="col-xl-6 col-md-6 col-lg-6 col-sm-12 col-12 fter_st">
          <div className="col-xl-3 col-md-4 col-lg-4 col-sm-4 col-4 fter_st_img">
            <NavLink to={'/'}>
              <img src={LogoColor} className="img-fluid" />
            </NavLink>
          </div>
          <Row>
            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
              <h3>Outstock is a premium Templates theme with advanced admin 
                module. It's extremely customizable, 
                easy to use and fully responsive and retina ready.
              </h3>
            </div>
          </Row>
          <Row>
            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                <h3><span><GoLocation /></span> Add: 1234 Heaven Stress, Beverly Hill, Melbourne, USA.</h3>
            </div>
          </Row>
          <Row>
            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                <h3><span><BsTelephoneInboundFill /></span>Phone Number: (800) 123 456 789</h3>
            </div>
          </Row>
          <Row>
            <div className="col-xl-12 col-md-12 col-sm-12 col-12">
                <h3><span><HiOutlineMailOpen /></span>Email: Contact@erentheme.com</h3>
            </div>
          </Row>
        </div>
        <div className="col-xl-6 col-md-6 col-sm-12 col-12 fter_rd">
            <Row>
                <div className="col-xl-6 col-md-6 col-sm-6 col-6">
                    <ul>INFORMATION
                        <li>Careers</li>
                        <li>Search</li>
                        <li>Delivery Inforamtion</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>
                <div className="col-xl-6 col-md-6 col-sm-6 col-6">
                    <ul>OUR SERVICES
                        <li>Shipping Policy</li>
                        <li>Help & Contact Us</li>
                        <li>Returns & Refunds</li>
                        <li>Online Stores</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </Row>
        </div>
      </Row>
    </Col>
  </Row>
  </Container>
</Container>


<Container fluid className="ending">
    <Container>
        <Row>
            <Col>
                <Row>
                    <div className="col-xl-6 col-md-6 col-sm-12 col-12 cpr">
                        Copyright © 2022 <NavLink to={'/'}>Outstock</NavLink>all rights reserved. 
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 col-12 cpric">
                        <a href="https://www.facebook.com/">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/">
                            <BsInstagram />
                        </a>
                        <a href="https://www.twitter.com/">
                            <BsTwitter />
                        </a>
                        <a href="https://www.pinterest.com/">
                            <BsPinterest />
                        </a>
                    </div>
                </Row>
            </Col>
        </Row>
    </Container>
</Container>


<div id="totop">
    <a href="#/"><BsArrowUp /></a>
</div>














        </>
    )
}

export default Footer