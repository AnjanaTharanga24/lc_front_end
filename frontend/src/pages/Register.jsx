import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "../component/SideBar";

export default function Register() {
  const [students, setStudents] = useState([{ name: "", age: "" }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedStudents = [...students];
    updatedStudents[index] = { ...updatedStudents[index], [name]: value };
    setStudents(updatedStudents);
  };

  const handleAddStudent = () => {
    setStudents([...students, { name: "", age: "" }]);
  };

  return (
    <div>
      <>
        {/* Navbar Area Start */}

        <SideBar />
        {/* Navbar Area End */}

        <div className="blog-section ptb-100">
         

          <div
            className="page-content wizard-v7-content shadow-lg  mb-5 bg-white rounded "
            style={{ width: "850px", marginLeft: "400px" }}
          >
            <div className="wizard-form ">
              <form className="form-register" action="#" method="post">
                <div
                  id="form-total"
                  role="application"
                  className="wizard clearfix vertical"
                >
                  {/* SECTION 1 */}
                  <h2>
                    <p className="step-icon">
                      <span>1</span>
                    </p>
                    <div className="step-text">
                      <span className="step-inner-1 ">Parent Details</span>
                      <span className="step-inner-2">Account Setup</span>
                    </div>
                  </h2>
                  <section>
                    <div className="inner ">
                      <div className="wizard-header">
                        <h3 className="heading">Parent Details</h3>
                      </div>

                      <div className="form-row ">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="">Name</label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Your Name"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-row ">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="">Address</label>
                          <textarea
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Your Address"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-row ">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="">Country</label>
                          <select className="form-control">
                            <option value="">Your Country</option>
                            <option value="">Sri Lanka</option>
                            <option value="">Italy</option>
                            <option value="">Australia</option>
                            <option value="">England</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-row ">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="">Occupation</label>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Your Occupation"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="your_email">Email Address</label>
                          <input
                            type="email"
                            name="your_email"
                            id="your_email"
                            className="form-control"
                            pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                            placeholder="Your Email"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-row ">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="">Contact Number</label>
                          <input
                            type="mobile"
                            name=""
                            id=""
                            className="form-control"
                            placeholder="Your Mobile"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-row ">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="">Intake</label>
                          <select className="form-control">
                            <option value="">Select Intake</option>
                            <option value="">June Intake</option>
                            <option value="">Regular Intake</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </section>
                  {/* SECTION 2 */}
                  <h2>
                    <p className="step-icon">
                      <span>2</span>
                    </p>
                    <div className="step-text">
                      <span className="step-inner-1">Student Details</span>
                      <span className="step-inner-2">Child Details</span>
                    </div>
                  </h2>
                  <section>
                    <div className="inner">
                      <div className="wizard-header">
                        <h3 className="heading">Student Details</h3>
                      </div>
                      {students.map((student) => (
                        <div key={student.id}>
                          <div className="form-row">
                            <div className="form-holder form-holder-2">
                              <label htmlFor={`student_name_${student.id}`}>
                                Student Name
                              </label>
                              <input
                                type="text"
                                name={`student_name_${student.id}`}
                                value={student.name}
                                onChange={(e) =>
                                  handleInputChange(student.id, e)
                                }
                                className="form-control"
                                placeholder="Student Name"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-holder form-holder-2">
                              <label htmlFor={`student_age_${student.id}`}>
                                Student Age
                              </label>
                              <input
                                type="number"
                                name={`student_age_${student.id}`}
                                value={student.age}
                                onChange={(e) =>
                                  handleInputChange(student.id, e)
                                }
                                className="form-control"
                                placeholder="Student Age"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-row ">
                            <div className="form-holder form-holder-2">
                              <label htmlFor="">Gender</label>
                              <select className="form-control">
                                <option value="">Select Gender</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-holder form-holder-2">
                              <label htmlFor={`student_dob_${student.id}`}>
                                Date of Birth
                              </label>
                              <input
                                type="date"
                                name={`student_dob_${student.id}`}
                                value={student.dob}
                                onChange={(e) =>
                                  handleInputChange(student.id, e)
                                }
                                className="form-control"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-row ">
                            <div className="form-holder form-holder-2">
                              <label htmlFor="">Exam Level</label>
                              <select className="form-control">
                                <option value="">Select Exam Level</option>
                                <option value="">Level 1</option>
                                <option value="">Level 2</option>
                              </select>
                            </div>
                          </div>

                          <div className="form-row ">
                            <div className="form-holder form-holder-2">
                              <label htmlFor="">Exam Level</label>
                              <select className="form-control">
                                <option value="">Select Grade</option>
                                <option value="">Grade 1</option>
                                <option value="">Grade 2</option>
                                <option value="">Grade 3</option>
                                <option value="">Grade 4</option>
                                <option value="">Grade 5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleAddStudent}
                      >
                        Add Student
                      </button>
                    </div>
                  </section>

                  {/* SECTION 3 */}
                  <h2>
                    <p className="step-icon">
                      <span>3</span>
                    </p>
                    <div className="step-text">
                      <span className="step-inner-1">Add Password</span>
                      <span className="step-inner-2">your password</span>
                    </div>
                  </h2>
                  <section>
                    <div className="inner ">
                      <div className="wizard-header">
                        <h3 className="heading">Password Details</h3>
                      </div>

                      <div className="form-row">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-holder form-holder-2">
                          <label htmlFor="confirm_password">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            className="form-control"
                            placeholder="Password"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Blog Section Start */}

        {/* Footer Section Start */}
        <div className="footer-area ft-bg">
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
