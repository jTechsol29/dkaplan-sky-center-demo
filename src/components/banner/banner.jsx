import React from "react";
import { Carousel } from "react-bootstrap";

import sliderImg14 from "../../assets/images/tourDetails/GardenCourt-Sandton14.jpg";

import sliderImg2 from "../../assets/images/packages/madrid2.webp";

import sliderImg6 from "../../assets/images/packages/madrid6.webp";
import sliderImg1 from "../../assets/images/packages/madrid1.webp";

import "../banner/banner.css";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              src={sliderImg14}
              className="d-block w-100"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                  Tour the world with your families and friends by taking
                  advantages of our festive season special packages.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  THE ADVENTURES <span>BEGINS HERE</span>
                </h5>
                <p className="sub_text">
                  The biggest adventure you can ever take is to live the life of
                  your dreams.I am not the same, having seen the moon shine on
                  the other side of the world.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg6} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  MAKE MEMORIES <span>FOR LIFE !</span>
                </h5>
                <p className="sub_text">
                  We can help you create a life time memory with our exceptional
                  travellers plan packages made for you and your love ones.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg2} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                  Are you looking for a beautiful places to visit this season,
                  don't worry we got you covered. Call us today to get your next
                  travel plan booked.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Banner;
