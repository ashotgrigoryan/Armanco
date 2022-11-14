import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';
import { NavLink } from "react-router-dom";
import "../../assets/css/layouts/style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { FaBars } from "react-icons/fa";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDown } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { BsHandbag } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from "bootstrap";
import SetLang from "../Multilang/SetLang";
import { FormattedMessage } from "react-intl";
import Outstock from '../../assets/img/logo_dark.svg';
import Grass from '../../assets/img/grass.webp';
import Furniture from '../../assets/img/furniture.webp';
import Kitchen from '../../assets/img/kitchen.webp';
import Illum from '../../assets/img/illum.webp';


function Header(){

  const [click, setClick] = useState (false)

  const handleClick =() => setClick (!click)

  const [navSize, setnavSize] = useState("0rem");
  const [navColor, setnavColor] = useState("#fff");
  const listenScrollEvent = () => {
    window.scrollY > 20 ? setnavColor("#fff") : setnavColor("#fff");
    window.scrollY > 20 ? setnavSize("5rem") : setnavSize("0rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
     <div className="topnil">
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 1s"
        }}
      >
        <div className="col-xl-8 col-md-5 col-sm-6 col-7 for_navst">
          <nav className="navbar navbar-expand-xl">
            <Container fluid>
              <div className="col-md-1 col-sm-1 col-1">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="col-xl-2 col-md-5 col-sm-5 for_logo col-6">
              <NavLink to={'/'}>
               <abbr title="Outstock">
                <img src={Outstock} className="img-fluid" alt="" />
               </abbr>
              </NavLink>
              </div>
              <div className="col-xl-10">
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink activeClass="active" to={'/'}>
                        <FormattedMessage id="menu_home" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClass="active" to={'/Shop'}>
                       <FormattedMessage id="menu_shop" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClass="active" to={'/Collections'}>
                       <FormattedMessage id="menu_collections" /><FaAngleDown />
                       <Col className="mainhovdiv">
                        <div>List collection</div>
                        <Row className="hovmt">
                          <div className="col-xl-3 col-md-3 col-lg-4 col-sm-4 col-3">
                            <NavLink to={'/Collections/decor-art'}>
                              <img src={Grass} className="img-fluid" />
                            </NavLink>
                            <NavLink to={'/Collections/decor-art'}>
                              <h4>Decor Art</h4>
                            </NavLink>
                          </div>
                          <div className="col-xl-3 col-md-3 col-lg-4 col-sm-4 col-3">
                            <NavLink to={'/Collections/furniture'}>
                              <img src={Furniture} className="img-fluid" />
                            </NavLink>
                            <NavLink to={'/Collections/furniture'}>
                              <h4>Furniture</h4>
                            </NavLink>
                          </div>
                          <div className="col-xl-3 col-md-3 col-lg-4 col-sm-4 col-3">
                            <NavLink to={'/Collections/kitchen-things'}>
                              <img src={Kitchen} className="img-fluid" />
                            </NavLink>
                            <NavLink to={'/Collections/kitchen-things'}>
                              <h4>Kitchen Things</h4>
                            </NavLink>
                          </div>
                          <div className="col-xl-3 col-md-3 col-lg-4 col-sm-4 col-3">
                            <NavLink to={'/Collections/illumination'}>
                              <img src={Illum} className="img-fluid" />
                            </NavLink>
                            <NavLink to={'/Collections/illumination'}>
                              <h4>Illumination</h4>
                            </NavLink>
                          </div>
                        </Row>
                       </Col>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClass="active" to={'/Blog'}>
                       <FormattedMessage id="menu_blog" />
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClass="active" to={'/Contact'}>
                       <FormattedMessage id="menu_contact" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Container>
          </nav>
        </div>
    <div className="col-xl-2 col-md-2 for_rright">
    <div className="logreg">
      <li class="nav-item dropdown">
            <a class="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FaBars />
          </a>
          <ul class="dropdown-menu lr">
                <NavLink to={'/Registration'}>
                  <li>
                  <FormattedMessage id="reg" />
                  </li>
                </NavLink>
                <NavLink to={'/login'}>
                  <li>
                  <FormattedMessage id="login" />
                  </li>
                </NavLink>
          </ul>
        </li>
    </div>
    <li className="flagw">
      <SetLang />
    </li>
    </div>
  </nav>
</div>

<div id="/"></div>
    </>
  )
}

export default Header