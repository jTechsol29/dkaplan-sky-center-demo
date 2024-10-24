import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../customdropdown/custom-dropdown";
// import

const DestinationSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectedLocation = (value) => {
    console.log("Location", value);
  };

  const selectedGuest = (value) => {
    console.log("Guest ", value);
  };

  return (
    <>
      <section className="box-search-advance">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">
                <div className="item-search">
                  {/*  Using Props to Pass Data */}
                  <CustomDropdown
                    label="Location"
                    onSelect={selectedLocation}
                    options={[
                      "New York, USA",
                      "Tokyo, Japan",
                      "Sydney, Australia",
                      "Melbourne, Australia",
                      "Paris, France",
                      "Johannesburg, South Africa",
                      "California, USA",
                      "Florida, USA",
                      "Capetown, South Africa",
                      "Madrid, Spain",
                      "Kigali, Rwanda",
                    ]}
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label" htmlFor="startDate">
                    {" "}
                    Check in{" "}
                  </label>
                  <DatePicker
                    id="startDate"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search item-search-2">
                  <label className="item-search-label" htmlFor="endDate">
                    {" "}
                    Check Out{" "}
                  </label>
                  <DatePicker
                    selected={endDate}
                    id="endDate"
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={endDate}
                    endDate={startDate}
                    dateFormat="dd, MMMM, yyyy"
                  />
                </div>
                <div className="item-search bd-none">
                  <CustomDropdown
                    label="Guest"
                    onSelect={selectedGuest}
                    options={[
                      "1 adult, 0 children",
                      "1 adults, 2 children",
                      "1 adults, 3 children",
                      "1 adults, 1 children",
                      "2 adults, 1 children",
                      "	2 adults, 2 children",
                      "2 adults, 3 children",
                    ]}
                  />
                </div>
                <div className="item-search bd-none">
                  <Button className="primaryBtn flex-even d-flex justify-content-center">
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DestinationSearch;
