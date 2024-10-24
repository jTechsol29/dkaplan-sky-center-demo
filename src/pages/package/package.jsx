import React, { useEffect } from "react";
import "../package/package.css";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";
import CompanyLogo from "../../assets/images/logo/Dkap Logo jpeg.jpg";

import PackageImage1 from "../../assets/images/tourDetails/GardenCourt-Sandton11.jpg";
import PackageImage2 from "../../assets/images/tourDetails/GardenCourt-Sandton10.jpg";
import PackageImage3 from "../../assets/images/packages/Paris_Gare_de_Lyon-PGL_Room_2-1920x1080__1_.webp";
import PackageImage4 from "../../assets/images/packages/Paris_Champs_Elysees-PCE_CM_room_2-1920x1080.webp";

import PackageImage5 from "../../assets/images/packages/madrid5.webp";
import PackageImage6 from "../../assets/images/packages/madrid6.webp";

import { Card, Col, Container, Row } from "react-bootstrap";

import { NavLink } from "react-router-dom";

const Packages = () => {
  useEffect(() => {
    document.title = "Packages";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Breadcrumbs title="Packages" pagename="Packages" />
      <section className="booking-section py-5 bg-light ">
        <Container>
          <Row>
            <Col md="9" lg="9">
              <div className="booking-form-warp border rounded-1 bg-light shadow-lg px-4">
                <div className="form-title px-4  py-3">
                  <h4 className="h1 font-bold m-0">
                    {" "}
                    Explore Our Special Packages
                  </h4>
                  <h5 className="py-4 h6 opacity-50 m-0">
                    Take advantage of our special packages for the coming
                    months. Call in{" "}
                    <span className="font-bold text-dark">+27(63)461-9544</span>{" "}
                    or click the button below to enquire online with us today.
                  </h5>
                </div>

                <div className="row">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage1}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-2 border-bottom mb-4">
                          <p className="card-title font-bold h5">
                            Awesome Switzerland
                          </p>
                          <p className="text-muted">Switzerland</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-calendar-check-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary">
                            Nov 17th - Dec 1st
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-clock"></i>
                          </p>
                          <small className="px-2 text-body-secondary">
                            5 Days
                          </small>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <small className="text-body-secondary fs-6">
                            Rated 3
                          </small>

                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                          </p>
                        </div>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 ">
                    <div className="card mb-3">
                      <img
                        src={PackageImage6}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-2 border-bottom mb-4">
                          <p className="card-title font-bold h5">
                            The Social Hub Madrid
                          </p>
                          <p className="text-muted">Spain</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-calendar-check-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary">
                            Dec 25th - Jan 3rd
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-clock"></i>
                          </p>
                          <small className="px-2 text-body-secondary">
                            6 Days
                          </small>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <small className="text-body-secondary fs-6">
                            Rated 4
                          </small>

                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                          </p>
                        </div>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="card mb-3">
                      <img
                        src={PackageImage2}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-2 border-bottom mb-4">
                          <p className="card-title font-bold h5">
                            Garden Ct Sandton
                          </p>
                          <p className="text-muted">
                            Johannesburg, South Africa
                          </p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-calendar-check-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary">
                            Nov 10th - Dec 10th
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-clock"></i>
                          </p>
                          <small className="px-2 text-body-secondary">
                            3 Days
                          </small>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <small className="text-body-secondary fs-6">
                            Rated 5
                          </small>

                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                          </p>
                        </div>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card mb-3">
                      <img
                        src={PackageImage3}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-2 border-bottom mb-4">
                          <p className="card-title font-bold h5">
                            Paris Gare de Lyon hotel
                          </p>
                          <p className="text-muted">Paris</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-calendar-check-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary">
                            Nov 16th - Dec 16th
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-clock"></i>
                          </p>
                          <small className="px-2 text-body-secondary">
                            5 Days
                          </small>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <small className="text-body-secondary fs-6">
                            Rated 4
                          </small>

                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                          </p>
                        </div>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4 ">
                    <div className="card mb-3">
                      <img
                        src={PackageImage5}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-2 border-bottom mb-4">
                          <p className="card-title font-bold h5">
                            Hotel Riu Plaza España
                          </p>
                          <p className="text-muted">Spain</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-calendar-check-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary">
                            Nov 10th - Dec 10th
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-clock"></i>
                          </p>
                          <small className="px-2 text-body-secondary">
                            3 Days
                          </small>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <small className="text-body-secondary fs-6">
                            Rated 4
                          </small>

                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                          </p>
                        </div>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="col-sm-4">
                    <div className="card mb-3">
                      <img
                        src={PackageImage4}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="py-2 border-bottom mb-4">
                          <p className="card-title font-bold h5">
                            Paris Champs Élysées
                          </p>
                          <p className="text-muted">Paris</p>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-calendar-check-fill"></i>
                          </p>
                          <h5 className="px-2 text-body-secondary">
                            Dec 07th - Dec 31st
                          </h5>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <p>
                            <i className="bi bi-clock"></i>
                          </p>
                          <small className="px-2 text-body-secondary">
                            6 Days
                          </small>
                        </div>

                        <div className="card-text d-flex align-items-center justify-content-start">
                          <small className="text-body-secondary fs-6">
                            Rated 5
                          </small>

                          <p className="px-2">
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                            <i className="bi bi-star-fill text-warning font-bold"></i>
                          </p>
                        </div>
                      </div>

                      <NavLink
                        className="col-sm-12 py-4 mb-sm-0 d-flex justify-content-center text-decoration-none"
                        to="/booking"
                      >
                        <button className="primaryBtn "> Get A Quote</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md="3" lg="3">
              <div className="col-12 mb-3">
                <Card className="card-info p-0 shadow-lg bg-light">
                  <Card.Header>
                    {" "}
                    <h6 className="font-bold mt-2">Email Support ?</h6>{" "}
                  </Card.Header>
                  <Card.Body className="pb-0 py-4">
                    <img
                      src={CompanyLogo}
                      className="img-fluid img-thumbnail"
                      alt="logo"
                    />
                    <div className="mt-4 mb-3">
                      <p className="card-text d-flex-wrap">
                        Please tell us how we can help, send your request for
                        support to{" "}
                        <span className="text-primary fw-2">
                          booking@dkapskycenter.co.za
                        </span>{" "}
                        and be sure to include your full names and contact
                        information. Email request are typically answered within
                        24 business hours
                      </p>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between py-4"></Card.Footer>
                </Card>
              </div>

              <div className="col-12">
                <Card className="card-info p-0 shadow-lg bg-light">
                  <Card.Header>
                    {" "}
                    <h6 className="font-bold mt-2">Telephone Support ?</h6>{" "}
                  </Card.Header>
                  <Card.Body className="pb-0 py-4">
                    <img
                      src={CompanyLogo}
                      className="img-fluid img-thumbnail"
                      alt="logo"
                    />
                    <div className="mt-4 mb-3">
                      <p className="card-text d-flex-wrap">
                        Please have your booking / quote number and all relevant
                        information pertaining to your problem ready when
                        calling. All support services are available via phone at{" "}
                        <span className="text-primary fw-2">
                          +27 63 461 9544
                        </span>{" "}
                      </p>
                    </div>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between py-4"></Card.Footer>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Packages;
