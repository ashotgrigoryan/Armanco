import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/layouts/style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';
import SetLang from "../Pages/Multilang/SetLang";
import { FormattedMessage } from "react-intl";
import Chairimg from '../assets/img/everypgch.webp';

function Registration(){

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
                                    <FormattedMessage id="cr_acc" />
                                </h1>
                            </div>
                            <Link to={'/'}>
                                <FormattedMessage id="menu_home" />
                            </Link>
                            <span>/</span>
                            <h6><FormattedMessage id="cr_acc" /></h6>
                        </div>
                    </Col>
                </Row>
            </Container>


            <Container fluid className="lore">
                <Row>
                    <Col>
                        <div className="col-xl-6 col-md-8 col-lg-8 col-sm-12 col-12 relo">
                            <Row>
                                <div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6 logtab">
                                    <Link to={'/login'}>
                                        <h3>
                                            <FormattedMessage id="login" />
                                        </h3>
                                    </Link>
                                </div>
                                <div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6 regtab">
                                    <h4>
                                        <FormattedMessage id="cr_acc" />
                                    </h4>
                                </div>
                                <Row>
                                    <Col className="for_inputs">
                                        <form>
                                            <Row>
                                            <div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6 input1">
                                                <input placeholder="First Name" type={'text'} required></input>
                                            </div>
                                            <div className="col-xl-6 col-md-6 col-lg-6 col-sm-6 col-6 input2">
                                                <input placeholder="Last Name" type={'text'} required></input>
                                            </div>
                                            <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 input3">
                                                <input placeholder="Email" type={'email'} required></input>
                                            </div>
                                            <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 input3">
                                                <input placeholder="Password" type={'password'} required></input>
                                            </div>
                                            <div className="col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 button">
                                                <button type="submit">
                                                    Create an account
                                                </button>
                                            </div>
                                            </Row>
                                        </form>
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Registration