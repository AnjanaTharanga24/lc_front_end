import React, { useState, useEffect } from "react";
import SideBar from "../component/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUserGraduate,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import "../css/BankPayment.css";


export default function Register() {
  const [currentForm, setCurrentForm] = useState(1); // Initialize with pending payments

  useEffect(() => {
    // Load data related to pending payments when component mounts
    // Your code to fetch pending payment data goes here
  }, []);

  // Function to handle click on Pending Payment card
  const handlePendingPaymentClick = () => {
    setCurrentForm(1); // Set current form to Form 1 (Pending Payment)
  };

  // Function to handle click on Past Payment card
  const handlePastPaymentClick = () => {
    setCurrentForm(2); // Set current form to Form 2 (Past Payment)
  };

  const handlePasswordClick = () => {
    setCurrentForm(3); // Set current form to Form 2 (Past Payment)
  };

  return (
    <div>
      <>
        {/* Navbar Area Start */}

        <SideBar />
        {/* Navbar Area End */}

        <div className="container-fluid mt-5">
          <div className="row ">
            <div
              className=""
              style={{ height: "auto", width: "1000px", marginLeft: "250px" }}
            >
              <div className="d-flex fs-4">
                <div
                  className="card p-4 mt-3 payment-card"
                  style={{ width: "250px", cursor: "pointer" }}
                  onClick={handlePendingPaymentClick} // Add onClick event listener
                >
                  <FontAwesomeIcon
                    icon={faUser} // Choose an appropriate icon, here using faUser as an example
                    className="payment-icon"
                  />
                  <span className="payment-text mt-1">Parent Details</span>
                </div>

                <div
                  className="card p-4 mt-3 payment-card"
                  style={{
                    width: "250px",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                  onClick={handlePastPaymentClick} // Add onClick event listener
                >
                  <FontAwesomeIcon
                    icon={faUserGraduate}
                    className="payment-icon"
                  />
                  <span className="payment-text mt-1">Student details</span>
                </div>

                <div
                  className="card p-4 mt-3 payment-card"
                  style={{
                    width: "250px",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                  onClick={handlePasswordClick} // Add onClick event listener
                >
                  <FontAwesomeIcon icon={faLock} className="payment-icon" />
                  <span className="payment-text mt-1">Password</span>
                </div>
              </div>

              <div>
                {currentForm === 1 && (
                  <div
                    className="wizard-form card p-4 mt-3 mb-4"
                    style={{ height: "auto" }}
                  >
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Address</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter address"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Country
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>select country</option>
                          <option>Srilanka</option>
                          <option>America</option>
                          <option>Italy</option>
                          <option>Austrailia</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Occupation</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter occupation"
                        />
                      </div>

                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="form-group">
                        <label>Contact number</label>
                        <input
                          type="mobile"
                          className="form-control"
                          placeholder="Enter contact"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Intake
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>select intake</option>
                          <option>June intake</option>
                          <option>Regular intake</option>
                        </select>
                      </div>

                      <button type="submit" className="btn btn-success mt-3">
                        Next
                      </button>
                    </form>
                  </div>
                )}

                {currentForm === 2 && (
                  <div
                    className="wizard-form card p-4 mt-3 mb-4"
                    style={{ height: "auto" }}
                  >
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Student name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter name"
                        />
                      </div>

                      <div className="form-group">
                        <label>Age</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter age"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Gender
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>select gender</option>
                          <option>male</option>
                          <option>female</option>
                        </select>
                      </div>

                      <div className="form-row mb-3">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="student_dob">Date of Birth</label>
                          <input
                            type="date"
                            className="form-control"
                            required
                            style={{ width: "400px" }}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Exam level
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>select level</option>
                          <option>level 1</option>
                          <option>level 2</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                          Exam level
                        </label>
                        <select
                          className="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>select grade</option>
                          <option>Grade 1</option>
                          <option>Grade 2</option>
                          <option>Grade 3</option>
                          <option>Grade 4</option>
                          <option>Grade 5</option>
                          <option>Grade 6</option>
                          <option>Grade 7</option>
                        </select>
                      </div>

                      <div className="d-flex justify-content-between">
                        <button type="submit" className="btn btn-success">
                          Next
                        </button>

                        <button type="submit" className="btn btn-primary">
                          Add More
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {currentForm === 3 && (
                  <div
                    className="wizard-form card p-4 mt-3 mb-4"
                    style={{ height: "auto" }}
                  >
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>

                      <div className="form-group">
                        <label>Confirm password</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter password again"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary mt-3">
                        Submit
                      </button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Blog Section Start */}

        {/* Footer Section Start */}

        <div className="footer-area ft-bg mt-5">
          <div className="footer-widget-info ptb-100">
            <div className="container">
              <div className="main-max-width">
                <div className="row">
                  <div className="col-lg-4 col-sm-6 col-md-6">
                    <div className="footer-widget info-web">
                      <div className="image">
                        <a className="text-decoration-none" href="index.html">
                          <img
                            src="assets/img/logo/white-logo.svg"
                            alt="image"
                          />
                        </a>
                      </div>
                      <p className="pra-light mb-30">
                        Consulting is a dynamic and multifaceted field that
                        involves providing expert advice and guidance to
                        individuals,
                      </p>
                      <a href="sign-up.html" className="btn style-one">
                        Sign Up{" "}
                        <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 col-md-6">
                    <div className="footer-widget">
                      <h4 className="text-white">Quick Links</h4>
                      <ul>
                        <li>
                          <a href="blog-details.html">Make Appointment</a>
                        </li>
                        <li>
                          <a href="shop.html">Customers Services</a>
                        </li>
                        <li>
                          <a href="about.html">About Company</a>
                        </li>
                        <li>
                          <a href="courses-grid.html">Our Case Studies</a>
                        </li>
                        <li>
                          <a href="instructor-sidebar.html">Free Consulting</a>
                        </li>
                        <li>
                          <a href="instructor-details.html">
                            Meet Your Experts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="footer-widget ml-70">
                      <h4 className="text-white">Categories</h4>
                      <ul>
                        <li>
                          <a href="courses.html">Web Development</a>
                        </li>
                        <li>
                          <a href="course-details.html">UI&amp;UX Designer</a>
                        </li>
                        <li>
                          <a href="courses-grid.html">Management</a>
                        </li>
                        <li>
                          <a href="courses-list.html">Digital Marketing</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog News</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Finance &amp; Accounting</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-md-6">
                    <div className="footer-widget">
                      <h4 className="text-white">Get In Touch</h4>
                      <div className="contact-item d-flex align-items-center">
                        <div className="icon">
                          <i className="ri-map-pin-5-fill" />
                        </div>
                        <div className="content">
                          <p className="mb-0">
                            27 Division Sat, Barakuti, No 12G02, Us
                          </p>
                        </div>
                      </div>
                      <div className="contact-item d-flex align-items-center">
                        <div className="icon">
                          <i className="ri-phone-fill" />
                        </div>
                        <div className="content">
                          <a href="tel:+123456789865">+123 456 789 865</a>
                          <a href="tel:+741852963856">+741 852 963 856</a>
                        </div>
                      </div>
                      <div className="contact-item d-flex align-items-center">
                        <div className="icon">
                          <i className="ri-mail-unread-fill" />
                        </div>
                        <div className="content">
                          <a href="mailto:insocour@gmail.com">
                            insocour@gmail.com
                          </a>
                          <a href="mailto:insocour@gmail.com">
                            insocour@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right-area">
            <div className="container">
              <div className="main-max-width">
                <div className="row">
                  <div className="col-lg-4 col-xm-6 col-md-6">
                    <div className="cpr-left">
                      <p className="mb-0">
                        Copyright @ 2023 Education. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xm-6 col-md-6">
                    <div className="cpr-right">
                      <ul>
                        <li>
                          <span>Follow Us:</span>
                        </li>
                        <li>
                          <a href="https://www.facebook.com" target="_blank">
                            <i className="ri-facebook-fill" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                            <i className="ri-instagram-line" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com" target="_blank">
                            <i className="ri-twitter-x-line" />
                          </a>
                        </li>
                        <li>
                          <a href="https://linkedin.com/" target="_blank">
                            <i className="ri-linkedin-fill" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section End */}
        {/* Back to Top */}
        <button
          type="button"
          id="backtotop"
          className="position-fixed text-center border-0 p-0"
        >
          <i className="ri-arrow-up-s-line" />
        </button>
      </>
    </div>
  );
}
