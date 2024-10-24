import React, { useEffect } from "react";
import "../privacy/privacy.css";

import Breadcrumbs from "../../components/breadcrumbs/breadcrumb";

import { Col, Container, Row } from "react-bootstrap";

const Privacy = () => {
  useEffect(() => {
    document.title = "Terms & Conditions ";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs
        title="Terms and Condition"
        pagename="Terms and Conditions"
      />

      <section className="booking-section py-5 bg-light ">
        <Container>
          <Row>
            <Col md="12" lg="12">
              <div className="booking-form-warp border rounded-1 bg-light shadow-lg px-4">
                <div className="form-title px-4  py-3">
                  <h4 className="h3 font-bold m-0 text-center mt-3">
                    {" "}
                    Dkaplan sky center Terms, Conditions & Cancellation
                  </h4>
                </div>

                <div className="row">
                  <div className="col-sm-12 mb-3 m-0">
                    <div className="mb-3 py-4">
                      <h5 className="font-bold h5 m-0 py-2">
                        1. Booking and Reservations
                      </h5>
                      <p>
                        **Booking Process:** Reservations can be made through
                        our website, in-person, or over the phone. A booking is
                        confirmed once we receive the required deposit or full
                        payment. - **Deposit Requirements:** A non-refundable
                        deposit is required to secure your booking. - **Final
                        Payment:** The remaining balance must be paid 72 hours
                        before departure. Failure to make the final payment on
                        time may result in the cancellation of your reservation.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">2. Pricing</h5>
                      <p>
                        * All prices are in rand and are subject to change
                        without prior notice due to factors beyond our control,
                        such as fluctuations in taxes or fuel surcharges. - Once
                        a booking is confirmed, we guarantee the price except
                        for changes related to government taxes or fees.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        3. Cancellations and Refunds
                      </h5>
                      <p>
                        **Cancellation by Client:** If you need to cancel your
                        trip, you must inform us in writing. Cancellation fees
                        will apply as follows: - [Cancellation within 1 day: No
                        refund] - [Cancellation between 3–5 days: Refund minus
                        deposit] - [Cancellation more than 14 days: Full refund
                        minus admin fees] - **Cancellation by Travel Agency:**
                        We reserve the right to cancel a booking under
                        circumstances beyond our control. In such cases, you
                        will be entitled to a full refund or an alternative trip
                        option. - **Non-refundable Services:** Certain services
                        like flights or special packages may be non-refundable.
                        We will inform you of these at the time of booking.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        4. Changes to Bookings
                      </h5>
                      <p>
                        **Changes by Client:** If you request changes to your
                        booking (dates, destinations, accommodations),
                        additional fees may apply, depending on availability and
                        the policies of service providers. - **Changes by Travel
                        Agency:** We may make minor changes to your itinerary
                        due to unforeseen circumstances. We will notify you as
                        soon as possible.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        5. Travel Insurance
                      </h5>
                      <p>
                        *We highly recommend that all clients purchase
                        comprehensive travel insurance, which covers trip
                        cancellation, medical expenses, and personal liability.
                        Dkaplan Sky center will not be responsible for any costs
                        incurred as a result of a lack of travel insurance.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        6. Travel Documents
                      </h5>
                      <p>
                        **Passports and Visas:** You are responsible for
                        ensuring that you have the appropriate travel documents,
                        including valid passports, visas, and any required
                        health certifications. - **Vaccinations:** It is your
                        responsibility to check and meet any health and
                        vaccination requirements for your destination.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">7. Liability</h5>
                      <p>
                        **Responsibility:** We act only as an intermediary
                        between you and the service providers (hotels, airlines,
                        transportation services, etc.). We are not responsible
                        for any loss, injury, or damage arising from these
                        services. **Force Majeure:** We are not liable for
                        delays, cancellations, or other disruptions caused by
                        events outside of our control, such as natural
                        disasters, strikes, or political unrest.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        8. Health and Safety
                      </h5>
                      <p>
                        *You are responsible for understanding the health and
                        safety risks at your destination. We advise checking
                        official government travel advisories before departure.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">9. Behavior</h5>
                      <p>
                        *We reserve the right to refuse service or cancel
                        bookings for any traveler whose behavior is disruptive,
                        illegal, or unsafe. In such cases, no refund will be
                        provided.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">10. Voucher</h5>
                      <p>
                        *When you purchase a voucher, you’re getting a truly
                        flexible travel gift Voucher. Your voucher enables you
                        to make bookings at any time, it has 24-months validity,
                        you can contact us to get a quote for a booking, After
                        we have quoted you, You can redeem voucher to make
                        payment, If your voucher does not cover the total amount
                        you will have to make other alternative payment method
                        to complete the payment before your bookings can be
                        confirmed, If you have credit left on your voucher, You
                        can save this for your next trip. You can gift a Voucher
                        to any one by using the same method and email it to your
                        recipient.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">11. Payment</h5>
                      <p>
                        *Before you can use our payment portal, please note you
                        will request for a quote. After you have accepted our
                        quote we will generate a reference number which will be
                        use in the payment portal to complete payment, All
                        quoted amount is in rand.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        12. Dispute Resolution
                      </h5>
                      <p>
                        *Any disputes arising from these terms and conditions
                        will be resolved under the laws of South Africa and are
                        subject to the exclusive jurisdiction of the courts of
                        South Africa.
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        13. Privacy Policy
                      </h5>
                      <p>
                        -No personal information will be disclosed to third
                        parties without the user’s permission or due process,
                        however, Dkaplan Sky center may share personal
                        information with business partners. -Dkaplan Sky center
                        gathers and will be in possession of the following
                        private and personal information of users and passengers
                        Information provided by the user voluntarily – this
                        information is used to provide a better service to users
                        By using this website the User consents to the
                        following: -Dkaplan Sky center may use your personal
                        information to communicate with the user from time to
                        time. Users may indicate if they do not wish to receive
                        such communications; - By using our services, you agree
                        to the collection and use of your personal information
                        in accordance with our privacy policy, which can be
                        found [link to privacy policy].
                      </p>
                    </div>

                    <div className="mb-3 ">
                      <h5 className="font-bold h5 m-0 py-2">
                        14. Changes to Terms and Conditions
                      </h5>
                      <p>
                        *We reserve the right to modify these Terms and
                        Conditions at any time. Any changes will be posted on
                        our website and will apply to all bookings made after
                        the date of posting. This website is operated from the
                        Republic of South Africa, and thus the South African Law
                        governs the use or inability to use this website and
                        these terms and conditions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Privacy;
