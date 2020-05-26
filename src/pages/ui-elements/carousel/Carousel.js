import React from "react";
import { Row, Col, UncontrolledCarousel } from "reactstrap";

import firstSlide from "../../../images/slides/1.png";
import secondSlide from "../../../images/slides/2.png";
import thirdSlide from "../../../images/slides/3.png";
import fourthSlide from "../../../images/slides/4.png";
import fifthSlide from "../../../images/slides/5.png";

const carouselItems = [
  { src: firstSlide, caption: "" },
  { src: secondSlide, caption: "" },
  { src: thirdSlide, caption: "" },
  { src: fourthSlide, caption: "" },
  { src: fifthSlide, caption: "" },
];

const Carousel = () => (
  <div>
    <p>
      The carousel is a slideshow for cycling through a series of content, built
      with CSS 3D transforms and a bit of JavaScript. It works with a series of
      images, text, or custom markup. It also includes support for previous/next
      controls and indicators.
    </p>
    <Row>
      <Col>
        <UncontrolledCarousel captionTex={null} items={carouselItems} />
      </Col>
    </Row>
  </div>
);

export default Carousel;
