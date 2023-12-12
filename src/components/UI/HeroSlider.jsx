import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            {/* <h4 className="text-light mb-3">For Rent Ksh4000 Per Hour</h4> */}
            <h1 className="text-light mb-4">A reputable institution offering <br /> quality and holistic education</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            {/* <h4 className="text-light mb-3">For Rent Ksh4000 Per Hour</h4> */}
            <h1 className="text-light mb-4">Encouraging Curious Minds <br /> To Reach Full Potential</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            {/* <h4 className="text-light mb-3">For Rent Ksh4000 Per Hour</h4> */}
            <h1 className="text-light mb-4">Providing a Safe, <br /> Secure and Nuturing Environment</h1>

            <button className="btn reserve__btn mt-4">
              <Link to="/about">Learn More</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
