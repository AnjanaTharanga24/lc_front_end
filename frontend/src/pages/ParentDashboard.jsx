import React, { useEffect, useState } from "react";
import "../css/parentSidebar.css";
import { Link } from "react-router-dom";
export default function ParentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <>
        <div
          className={`page-wrapper chiller-theme ${
            sidebarOpen ? "toggled" : ""
          }`}
        >
          <a
            id="show-sidebar"
            className="btn btn-sm btn-dark"
            href="#"
            onClick={toggleSidebar}
          >
            <i className="fas fa-bars" />
          </a>
          <nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
              <div className="sidebar-brand">
                <img
                href="/home"
                  className="logo-light "
                  src="assets/img/logo/ls.png"
                  alt="logo"
                  style={{ width: "200px" }}
                />
                <div
                  id="close-sidebar"
                  onClick={closeSidebar}
                  style={{ marginLeft: "10px" }}
                >
                  <i className="fas fa-times" />
                </div>
              </div>
              <div className="sidebar-header">
                <div
                  className="user-info"
                  style={{ marginLeft: "30px", fontWeight: "bold" }}
                >
                  <span className="user-name fs-4">Jhon Smith</span>
                  <span className="user-role" style={{ marginLeft: "13px" }}>
                    jhon@gmail.com
                  </span>
                  <span className="user-status" style={{ marginLeft: "15px" }}>
                    +94774436594
                  </span>
                </div>
              </div>

              <div className="sidebar-menu" style={{ fontSize: "17px" }}>
                <ul>
                  <li className="header-menu">
                    <span className="">General</span>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="/children" onClick={() => toggleDropdown(1)}>
                      <i className="fa fa-tachometer-alt bg-light" />
                      <span>Children</span>
                      <span className="badge badge-pill badge-warning">
                        New
                      </span>
                    </a>

                    <div
                      className={`sidebar-submenu ${
                        activeDropdown === 1 ? "active" : ""
                      }`}
                    >
                      <ul>
                        <li>
                          <a href="#">
                            Dashboard 1
                            <span className="badge badge-pill badge-success">
                              Pro
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="#">Dashboard 2</a>
                        </li>
                        <li>
                          <a href="#">Dashboard 3</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="/bank-payment">
                      <i className="fa fa-shopping-cart bg-light" />
                      <span>Bank Payment</span>
                      <span className="badge badge-pill badge-danger">3</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Products</a>
                        </li>
                        <li>
                          <a href="#">Orders</a>
                        </li>
                        <li>
                          <a href="#">Credit cart</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="far fa-gem bg-light" />
                      <span>Online Bank</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">General</a>
                        </li>
                        <li>
                          <a href="#">Panels</a>
                        </li>
                        <li>
                          <a href="#">Tables</a>
                        </li>
                        <li>
                          <a href="#">Icons</a>
                        </li>
                        <li>
                          <a href="#">Forms</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-chart-line bg-light" />
                      <span>My QR</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Pie chart</a>
                        </li>
                        <li>
                          <a href="#">Line chart</a>
                        </li>
                        <li>
                          <a href="#">Bar chart</a>
                        </li>
                        <li>
                          <a href="#">Histogram</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="#">
                      <i className="fa fa-globe bg-light" />
                      <span>Maps</span>
                    </a>
                    <div className="sidebar-submenu">
                      <ul>
                        <li>
                          <a href="#">Google maps</a>
                        </li>
                        <li>
                          <a href="#">Open street map</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header-menu">
                    <span>Extra</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-book bg-light" />
                      <span>Documentation</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-calendar bg-light" />
                      <span>Calendar</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-folder bg-light" />
                      <span>Examples</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/* sidebar-menu  */}
            </div>
            {/* sidebar-content  */}
            <div className="sidebar-footer">
              <a href="#">
                <i className="fa fa-bell" />
                <span className="badge badge-pill badge-warning notification">
                  3
                </span>
              </a>
              <a href="#">
                <i className="fa fa-envelope" />
                <span className="badge badge-pill badge-success notification">
                  7
                </span>
              </a>
              <a href="#">
                <i className="fa fa-cog" />
                <span className="badge-sonar" />
              </a>
              <a href="#">
                <i className="fa fa-power-off" />
              </a>
            </div>
          </nav>

          {/* sidebar-wrapper  */}
          <main className="page-content " style={{ background: "#f2f2f2" }}>
            <div className="container-fluid">
              <h2>Parent Dashboard</h2>
              <hr />

              <div className="row">
                <div className="form-group col-md-12"></div>

                <div className="form-group col-md-12">
                  <>
                    <div className="contact-section">
                      <div className="container">
                        <div className="main-max-width">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="content">
                                <h2 className="fs-35 mb-30 gradient-style">
                                  Get In Touch
                                </h2>
                                <p>
                                  Whether you have questions about our services,
                                  want to explore potential collaboration
                                  opportunities,
                                </p>
                                <div className="contact-form">
                                  <form action="#">
                                    <div className="row">
                                      <div className="col-6">
                                        <div className="form-group mb-15">
                                          <label className="label-style">
                                            Fast Name
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Fast Name"
                                            className="bg-white input-style border-style w-100 h-60"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-6">
                                        <div className="form-group mb-15">
                                          <label className="label-style">
                                            Last Name
                                          </label>
                                          <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="bg-white input-style border-style w-100 h-60"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="form-group mb-15">
                                      <label className="label-style">
                                        Your email
                                      </label>
                                      <input
                                        type="email"
                                        placeholder="Your email"
                                        className="bg-white input-style border-style w-100 h-60"
                                      />
                                    </div>
                                    <div className="form-group mb-15">
                                      <label className="label-style">
                                        Message
                                      </label>
                                      <textarea
                                        name="msg"
                                        id="msg"
                                        cols={30}
                                        rows={5}
                                        className="bg-white input-style border-style w-100"
                                        placeholder="Your comments here"
                                        defaultValue={""}
                                      />
                                    </div>
                                    <button className="btn style-one box-shadow-1">
                                      Send Message
                                    </button>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="contact-info">
                                <h4 className="fs-20 text-title">Contact Us</h4>
                                <div className="content mb-40">
                                  <div className="info-item d-flex align-items-center">
                                    <div className="icon">
                                      <img
                                        src="assets/img/icon/location-icon-cont.svg"
                                        alt="icon"
                                      />
                                    </div>
                                    <div className="text">
                                      <h5 className="fs-16">Address</h5>
                                      <p className="mb-0">
                                        2972 Westheimer Rd. Santa Ana, Illinois
                                        85486{" "}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="info-item d-flex align-items-center">
                                    <div className="icon">
                                      <img
                                        src="assets/img/icon/mail-icon-cont.svg"
                                        alt="icon"
                                      />
                                    </div>
                                    <div className="text">
                                      <h5 className="fs-16">Email</h5>
                                      <a href="mailto:Info123456@gmail.com">
                                        Info123456@gmail.com
                                      </a>
                                    </div>
                                  </div>
                                  <div className="info-item d-flex align-items-center">
                                    <div className="icon">
                                      <img
                                        src="assets/img/icon/phone-icon-cont.svg"
                                        alt="icon"
                                      />
                                    </div>
                                    <div className="text">
                                      <h5 className="fs-16">Phone</h5>
                                      <a href="tel:123456789">+123 456 789</a>
                                    </div>
                                  </div>
                                </div>
                                <div className="social-profile d-flex align-items-center">
                                  <span className="fs-16">Follow Us:</span>
                                  <ul className="list-unstyle d-flex">
                                    <li>
                                      <a
                                        href="https://www.fb.com"
                                        target="_blank"
                                      >
                                        <i className="ri-facebook-fill" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.twitter.com"
                                        target="_blank"
                                      >
                                        <i className="ri-twitter-x-fill" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                      >
                                        <i className="ri-instagram-line" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="https://www.linkedin.com"
                                        target="_blank"
                                      >
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
                    <div className="map-loc pb-100">
                      <div className="container-fluid g-0">
                        <div className="office-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385385572983!2d144.95358331584498!3d-37.81725074201705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1612419490850!5m2!1sen!2sbd"></iframe>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>

              <hr />
            </div>
          </main>
          {/* page-content" */}
        </div>
        {/* page-wrapper */}
      </>
    </div>
  );
}
