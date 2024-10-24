import React, { useEffect } from "react";

import "../about/about.css";
import BreadCrumbs from "../../components/breadcrumbs/breadcrumb";
import { Card, Col, Container, Row } from "react-bootstrap";
import AboutImage from "../../assets/images/about/aboutimg.png";
import Icons1 from "../../assets/images/icons/destination.png";
import Icons2 from "../../assets/images/icons/best-price.png";
import Icons3 from "../../assets/images/icons/quick.png";

const AboutUs = () => {
  useEffect(() => {
    document.title = "About us";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <BreadCrumbs title="About us" pagename="About us" />
      <section className="py-5">
        <Container>
          <Row>
            <Col md="8">
              <div className="about-content">
                <div className="about-image position-relative">
                  <img
                    src={AboutImage}
                    alt="about "
                    className="img-fluid rounded-5"
                  />
                  <div className="about-image-content position-absolute top-50 end-0 p-md-4 p-3 rounded-5 shadow-sm">
                    <h3 className="h2 fw-bold text-white">
                      NO DOUBT WE ARE RATED BEST !
                    </h3>
                  </div>
                </div>
              </div>
              <h2 className="h2 font-bold pt-4 pb-2">
                NO DOUBT WE ARE RATED BEST !
              </h2>
              <div className="gy-3">
                <p className="body-text mb-3">About Dkaplan Sky Center</p>
                <p className="body-text mb-3">
                  At Dkaplan Sky Center, we believe that travel is more than
                  just visiting a destination—it’s about creating unforgettable
                  experiences that last a lifetime. As a trusted and innovative
                  travel agency, we specialize in crafting personalized journeys
                  that cater to your unique interests and preferences. Whether
                  you're seeking a relaxing beach getaway, an adventurous trek
                  through mountains, or an immersive cultural exploration, we
                  are here to make your travel dreams a reality.
                </p>
                <p className="body-text mb-3">
                  Our team of travel experts brings years of experience and
                  passion for discovering new places. We work closely with our
                  clients to understand their needs, curating tailored
                  itineraries that ensure every trip is seamless and
                  unforgettable. From booking flights and accommodations to
                  offering insider tips on hidden gems, we handle every detail,
                  so you can focus on enjoying your journey.
                </p>
                <p className="body-text mb-3">
                  At Dkaplan Sky Center, we take pride in providing exceptional
                  customer service and unparalleled attention to detail. With a
                  global network of trusted partners, we ensure that your
                  experience is not only smooth and hassle-free but also full of
                  memorable moments.
                </p>

                <p className="body-text mb-3">
                  Whether you're planning a family vacation, a romantic getaway,
                  a business trip, or a solo adventure, Dkaplan Sky Center is
                  your ultimate travel partner. Let us guide you through the sky
                  to your dream destination.
                </p>

                <p className="body-text mb-3">
                  Your adventure begins with us! Explore with us!
                </p>
              </div>
            </Col>
            <Col md="4">
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={Icons1} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    50+ Destinations{" "}
                  </Card.Title>
                  <p className="mb-2 body-text">
                    We offer over 50 destinations for your next travel.
                  </p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={Icons2} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    Best Price In The Industry
                  </Card.Title>
                  <p className="mb-2 body-text">
                    We have flexible prices for any travel package of your
                    choice.
                  </p>
                </Card.Body>
              </Card>
              <Card className="border-0 shadow-sm rounded-3 mb-4">
                <Card.Body className="text-center">
                  <div className="d-flex justify-content-center align-item-center my-2">
                    <div className="rounded-circle bg-light shadow-sm bg-opacity-10 p-2">
                      <img src={Icons3} alt="icon" className="img-fluid" />
                    </div>
                  </div>
                  <Card.Title className="fw-bold h5">
                    {" "}
                    Super Fast & Easy To Book{" "}
                  </Card.Title>
                  <p className="mb-2 body-text">
                    At Dkaplan sky center we provide the easiest and fastest
                    online platform that suits your travel booking.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutUs;
