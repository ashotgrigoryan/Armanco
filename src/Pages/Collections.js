import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/layouts/style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import SetLang from "./Multilang/SetLang";
import { FormattedMessage } from "react-intl";
import Chairimg from '../assets/img/everypgch.webp';

function Collections(){
  
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
                                    <FormattedMessage id="menu_collections" />
                                </h1>
                            </div>
                            <Link to={'/'}>
                                <FormattedMessage id="menu_home" />
                            </Link>
                            <span>/</span>
                            <h6><FormattedMessage id="menu_collections" /></h6>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Collections