import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/layouts/style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { GoSearch } from "react-icons/go";
import { Container, Row, Col } from "react-bootstrap";
import SetLang from "../Pages/Multilang/SetLang";
import { FormattedMessage } from "react-intl";
import { Button } from "bootstrap";
import Slide1 from '../assets/img/slide1_1728x.webp';
import Slide2 from '../assets/img/slide2_1728x.webp';
import Slide3 from '../assets/img/slide3_1728x.webp';
import Banner1 from '../assets/img/banner1_540x.webp';
import Banner2 from '../assets/img/banner2_540x.webp';
import Banner3 from '../assets/img/banner3_540x.webp';
import Img1 from '../assets/img/14_800x.webp';
import Img11 from '../assets/img/14-1_360x.webp';
import Img2 from '../assets/img/5_360x.webp';
import Img3 from '../assets/img/13_1c04d432-a1ba-4e9b-88a1-b9c3aecbab9d_360x.webp';
import Img4 from '../assets/img/1_360x.webp';
import Img44 from '../assets/img/3_360x.webp';
import Img5 from '../assets/img/4_360x.webp';
import Img55 from '../assets/img/lus.webp';
import Img6 from '../assets/img/16_57fd8037-cd00-49cf-bdb1-db4f53bc6023_360x.webp';
import Img66 from '../assets/img/3_679a989e-6310-4d9f-bcb5-38d8d6c8a77c_360x.webp';
import Img7 from '../assets/img/11_63e20b3b-21f2-49ff-93f8-2179551f43e0_360x.webp';
import Img8 from '../assets/img/9_360x.webp';
import Img88 from '../assets/img/25_42a243f5-01de-4f8e-9314-0c2ab068ed20_360x.webp';
import Img9 from '../assets/img/banner4_900x.webp';
import Img10 from '../assets/img/banner5_900x.webp';
import Imgg1 from '../assets/img/14_800x.webp';
import Imgg11 from '../assets/img/14-1_360x.webp';
import Imgg2 from '../assets/img/1_c14253f1-8cb5-4a88-921b-d3dbaffaaafa_360x.webp';
import Imgg22 from '../assets/img/1-1_360x.webp';
import Imgg3 from '../assets/img/16_360x.webp';
import Imgg33 from '../assets/img/12_360x.webp';
import Imgg4 from '../assets/img/11_360x.webp';
import Imgg44 from '../assets/img/25_14925dcf-253e-4ad6-bece-ba55411af4e1_360x.webp';
import Carousel from "bootstrap";
function Home(){
  
    return(
        <>
            
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slide1} className="d-block w-100 img-fluid" alt="..." />
            <div className="col-md-5 for_anim">
              <h2>Handmade Hand Carved Coffee</h2>
              <h6>
                Lorem, ipsum dolor sit amet consectetur a
                dipisicing elit. Impedit est modi iure ullam, quo nemo blanditiis, architecto perferendis
              </h6>
              <NavLink to={'/Shop'}>
                <button>Discover Now</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100 img-fluid" alt="..." />
            <div className="col-md-5 for_anim">
              <h2>Think different & Do otherwise</h2>
              <h6>
                Lorem, ipsum dolor sit amet consectetur a
                dipisicing elit. Impedit est modi iure ullam, quo nemo blanditiis, architecto perferendis
              </h6>
              <NavLink to={'/Shop'}>
                <button>Discover Now</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100 img-fluid" alt="..." />
            <div className="col-md-5 for_anim">
              <h2>High Beam by Tom Chung</h2>
              <h6>
                Lorem, ipsum dolor sit amet consectetur a
                dipisicing elit. Impedit est modi iure ullam, quo nemo blanditiis, architecto perferendis
              </h6>
              <NavLink to={'/Shop'}>
                <button>Discover Now</button>
              </NavLink>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      

<Container className="m-auto for_rdimg">
  <Row>
    <Col>
      <Row>
      <div className="col-md-4 col-4 for_aft">
      <abbr title="Outstock">
          <img src={Banner1} className="img-fluid" />
      </abbr>
    </div>
    <div className="col-md-4 col-4 for_aft">
      <abbr title="Outstock">
          <img src={Banner2} className="img-fluid" />
      </abbr>
    </div>
    <div className="col-md-4 col-4 for_aft">
      <abbr title="Outstock">
          <img src={Banner3} className="img-fluid" />
      </abbr>
    </div>
      </Row>
    </Col>
  </Row>
</Container>

<Container className="for_opic">
  <Row>
    <Col>
      <Row>
        <div className="col-xl-4 col-md-3 col-sm-2 col-1"><hr></hr></div>
        <div className="col-xl-4 col-md-6 col-sm-8 col-10 f_text">Trending Products</div>
        <div className="col-xl-4 col-md-3 col-sm-2 col-1"><hr></hr></div>
      </Row>
    </Col>
  </Row>
  <Row>
    <div className="col-md-12 col-sm-12 col-12 for_hv">
      Mirum est notare quam littera gothica quam nunc putamus parum claram!
    </div>
  </Row>
</Container>


<Container className="for_chairs">
  <Row>
    <Col>
      <Row>
      <div className="col-xl-3 col-lg-3 col-md-6 col-6 col-sm-6 for_ator">
      <div className="for_images">
        <div className="for_sale">
          <span>SALE</span>
        </div>
        <div className="for_img">
          <img src={Img1} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <div className="for_sale">
            <span>SALE</span>
          </div>
          <img src={Img11} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
              <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 col-sm-6 for_ator">
      <div className="for_images">
        <div className="for_sale">
          <span>SALE</span>
        </div>
        <div className="for_img">
          <img src={Img2} className="img-fluid" />
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 for_ator">
      <div className="for_images">
        <div className="for_img">
          <img src={Img3} className="img-fluid" />
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 for_ator">
      <div className="for_images">
        <div className="for_img">
          <img src={Img4} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <img src={Img44} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
            <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
      </Row>
    </Col>
  </Row>
  <Row>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 col-sm-6 for_ator">
      <div className="for_images">
        <div className="for_img">
          <img src={Img5} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <img src={Img55} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
            <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 col-sm-6 for_ator">
      <div className="for_images">
        <div className="for_img">
          <img src={Img6} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <img src={Img66} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
            <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 for_ator">
      <div className="for_images">
        <div className="for_img">
          <img src={Img7} className="img-fluid" />
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 for_ator">
      <div className="for_images">
        <div className="for_sale">
          <span>SALE</span>
        </div>
        <div className="for_img">
          <img src={Img8} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <div className="for_sale">
            <span>SALE</span>
          </div>
          <img src={Img88} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
            <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
  </Row>
</Container>

<Container fluid className="for_banners">
  <Row>
    <Col>
      <Row>
        <div className="col-md-6">
            <img src={Img9} className="img-fluid" />
        </div>
        <div className="col-md-6">
            <img src={Img10} className="img-fluid" />
        </div>
      </Row>
    </Col>
  </Row>
</Container>


<Container className="for_thx">
  <Row>
    <div className="col-xl-4 col-md-3 col-lg-4 col-sm-4 col-3"><hr></hr></div>
    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-4 col-6 for_txt">Sale Off</div>
    <div className="col-xl-4 col-md-3 col-lg-4 col-sm-4 col-3"><hr></hr></div>
  </Row>
  <Row>
    <div className="col-md-12 col-sm-12 col-12 for_mirum">
      Mirum est notare quam littera gothica quam nunc putamus parum claram!
    </div>
  </Row>
</Container>


<Container className="for_chairs">
  <Row>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 col-sm-6 for_ator">
      <div className="for_images">
        <div className="for_sale">
          <span>SALE</span>
        </div>
        <div className="for_img">
          <img src={Imgg1} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <div className="for_sale">
            <span>SALE</span>
          </div>
          <img src={Imgg11} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
              <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 col-sm-6 for_ator">
      <div className="for_images">
        <div className="for_img">
          <img src={Imgg2} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <img src={Imgg22} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
              <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 for_ator">
      <div className="for_images">
        <div className="for_sale">
          <span>SALE</span>
        </div>
        <div className="for_img">
          <img src={Imgg3} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <div className="for_sale">
            <span>SALE</span>
          </div>
          <img src={Imgg33} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
              <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-lg-3 col-md-6 col-6 for_ator">
      <div className="for_images">
        <div className="for_sale">
          <span>SALE</span>
        </div>
        <div className="for_img">
          <img src={Imgg4} className="img-fluid" />
        </div>
        <div className="for_scimg">
          <div className="for_sale">
            <span>SALE</span>
          </div>
          <img src={Imgg44} className="img-fluid" />
          <div className="for_srch">
            <div className="for_schicon">
              <span><GoSearch /></span>
            </div>
          </div>
        </div>
      </div>
      Sacrificial Chair Design
      <div className="for_tf">
        <div className="for_dram">
          $260.00 <span>$280.00</span>
        </div>
        <div className="for_card">
          + Add to Cart
        </div>
      </div>
    </div>
  </Row>
</Container>
        </>
    )
}

export default Home