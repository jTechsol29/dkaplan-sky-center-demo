import React, { useState } from "react";

import "../footer/use-footer.css";
import { NavLink } from "react-router-dom";

export const UseFooter = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisible);
  }

  return (
    <>
      <div className="use-footer">
        <div className="wrapper">
          <div className="row">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <NavLink to="booking">get a quote</NavLink>
                </li>

                <li>
                  <NavLink to="terms-condition">Terms & Condition</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Visit us</h4>
              <ul className="row">
                <li>
                  <p>149 Pritchard St,</p>
                  <p>Johannesburg ZA 2001</p>
                </li>
                <li>
                  <p>booking@dkapskycenter.co.za</p>
                  <p>+27 63 461 9544</p>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Dkaplan Sky Center</h4>
              <ul>
                <li>
                  <NavLink to="tours">tours</NavLink>
                </li>
                <li>
                  <NavLink to="destinations">destinations</NavLink>
                </li>
                <li>
                  <NavLink to="photo-galleries">gallery</NavLink>
                </li>
                <li>
                  <NavLink to="packages">packages</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <NavLink
                className="social-links"
                to="https://www.facebook.com/dkapskycenter"
              >
                <i className="bi bi-facebook facebook"></i>
              </NavLink>
            </div>
          </div>

          <p className="right">
            {" "}
            &copy;2024 Dkaplan Sky Center. All rights reserved{" "}
          </p>
        </div>
      </div>

      <div
        id="back-top"
        onClick={scrollTop}
        className={visible ? "active" : ""}
      >
        <i className="bi bi-arrow-up"></i>
      </div>
    </>
  );
};
