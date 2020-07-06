import React from "react";
import PropTypes from "prop-types";

import General from "../General/General";

import { Button } from "reactstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// cars images

import img1 from '../../../../images/cars/car1.png'
import img2 from '../../../../images/cars/car2.png'
import img3 from '../../../../images/cars/car3.png'
import img4 from '../../../../images/cars/car4.png'
import img5 from '../../../../images/cars/car5.png'

import s from "./Banner.module.scss";

const Banner = ({ data }) => (
  <div className={s.productDetailsBanner}>
    <Carousel className={s.carousel}>
      <div>
        <img src={img1} alt={"img1"}/>
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
    </Carousel>
    <div className={s.productInfo}>
      <General {...data} />
      <small className={"text-uppercase fw-thin mt-4"}>COMBINED MPG: 20</small>
      <button className="btn-link d-block mt-2" style={{ fontSize: 16 }}>
        Model Details
      </button>
      <div className={"d-flex"} style={{ marginBottom: 20, marginTop: 'auto' }}>
        <Button color={"success"} className={"mr-3 d-flex align-items-center"}>
          <i className={"la la-shopping-cart mb-xs"} style={{ fontSize: 23 }} />
          add to card
        </Button>
        <Button color={"danger"}>
          <i className="fa fa-heart-o mr-xs" aria-hidden="true"></i>add to
          wishlist
        </Button>
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  data: PropTypes.any.isRequired,
};

export default Banner;
