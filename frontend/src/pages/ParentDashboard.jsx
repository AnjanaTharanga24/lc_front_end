import React, { useState } from "react";
import "../css/parentSidebar.css";
import { Link } from "react-router-dom";
export default function ParentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
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

                <Link to="/">
                <img
                  href=""
                  className="logo-light "
                  src="assets/img/logo/ls.png"
                  alt="logo"
                  style={{ width: "200px" }}
                />
                </Link>
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
                      
                    </a>
                    
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="/bank-payment">
                      <i className="fa fa-shopping-cart bg-light" />
                      <span>Bank Payment</span>
                      <span className="badge badge-pill badge-danger">3</span>
                    </a>
                   
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="/online-bank">
                      <i className="far fa-gem bg-light" />
                      <span>Online Bank</span>
                      <span className="badge badge-pill badge-danger">3</span>
                    </a>
                   
                  </li>
                  <li className="sidebar-dropdown">
                    <a href="/my-qr">
                      <i className="fa fa-chart-line bg-light" />
                      <span>My QR</span>
                      <span className="badge badge-pill badge-warning">
                        New
                      </span>
                    </a>
                   
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
          <main className="page-content " style={{ background: "white" }}>
            <div className="container-fluid">
              <h2>Parent Dashboard</h2>
              <hr />

              <div className="row mb-4">
                {/* <div className="form-group col-md-6"></div>

                <div className="form-group col-md-12">
                  <div
                    className="card"
                    role="alert"
                    style={{ height: "200px" }}
                  ></div>
                </div> */}

<div className="faq-section ptb-100">
  <div className="container">
    <div className="main-max-width">
      <div className="section-title mb-50 text-center">
        <h4 className="sub-title mb-25"># Benefits</h4>
        <h2 className="mb-0 fs-35">A Few Frequently Asked questions</h2>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="faq-content">
            <div className="accordion faq" id="faqExa">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqSix"
                  >
                    What services does your consulting firm offer?
                  </button>
                </h2>
                <div
                  id="faqSix"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqExa"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqSaven"
                  >
                    How can I request a consultation?
                  </button>
                </h2>
                <div
                  id="faqSaven"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExa"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqEight"
                  >
                    What industries do you serve?
                  </button>
                </h2>
                <div
                  id="faqEight"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExa"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqNine"
                  >
                    How is your consulting approach unique?
                  </button>
                </h2>
                <div
                  id="faqNine"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExa"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqTen"
                  >
                    How do you ensure confidentiality?
                  </button>
                </h2>
                <div
                  id="faqTen"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExa"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="faq-content">
            <div className="accordion faq" id="faqExaTow">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqOne"
                  >
                    What services does your consulting firm offer?
                  </button>
                </h2>
                <div
                  id="faqOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#faqExaTow"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqTwo"
                  >
                    How can I request a consultation?
                  </button>
                </h2>
                <div
                  id="faqTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExaTow"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqThree"
                  >
                    What industries do you serve?
                  </button>
                </h2>
                <div
                  id="faqThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExaTow"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqFour"
                  >
                    How is your consulting approach unique?
                  </button>
                </h2>
                <div
                  id="faqFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExaTow"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqFive"
                  >
                    How do you ensure confidentiality?
                  </button>
                </h2>
                <div
                  id="faqFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqExaTow"
                >
                  <div className="accordion-body">
                    <p>
                      Our consulting firm specializes in brief description of
                      your main services or areas of expertise. From strategic
                      planning to we provide tailored solutions to meet the
                      unique needs of our clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


                {/* <div className="card" style={{ height: "auto" }}>
                    <div
                      className="card mb-4 shadow-lg mt-5  bg-light rounded"
                      style={{
                        height: "380px",
                        width: "1000px",
                        marginTop: "30px",
                        marginLeft: "100px",
                      }}
                    >
                      <div className="d-flex">
                        <div
                          className="card p-5"
                          style={{
                            height: "280px",
                            width: "220px",
                            marginTop: "20px",
                            marginLeft: "30px",
                          }}
                        >
                          <img
                            src="assets/img/all-img/child2.jpeg"
                            style={{ height: "600px", width: "800px" }}
                          ></img>
                        </div>
                        <div
                          className="card p-5"
                          style={{
                            height: "280px",
                            width: "670px",
                            marginTop: "20px",
                            marginLeft: "30px",
                          }}
                        >
                          <div className="fs-4">
                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Name </label>
                                <label style={{ marginLeft: "40px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>Anjana tharanga samaranayake</span>
                              </div>
                            </div>

                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Age </label>
                                <label style={{ marginLeft: "60px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>24</span>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>DOB </label>
                                <label style={{ marginLeft: "53px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>24/08/2000</span>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Course </label>
                                <label style={{ marginLeft: "40px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>English</span>
                              </div>
                            </div>

                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Intake </label>
                                <label style={{ marginLeft: "40px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span> June intake</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <button
                          className="mt-3 btn btn-success fs-5"
                          style={{
                            height: "45px",
                            width: "170px",
                            marginLeft: "780px",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCheck}
                            style={{ marginRight: "10px" }}
                          />
                          <label className="" style={{ marginLeft: "10px" }}>
                            Approved!
                          </label>
                        </button>
                      </div>
                    </div>

                    <div
                      className="card mb-4 shadow-lg mt-5  bg-light rounded"
                      style={{
                        height: "380px",
                        width: "1000px",
                        marginTop: "30px",
                        marginLeft: "100px",
                      }}
                    >
                      <div className="d-flex">
                        <div
                          className="card p-5"
                          style={{
                            height: "280px",
                            width: "220px",
                            marginTop: "20px",
                            marginLeft: "30px",
                          }}
                        >
                          <img
                            src="assets/img/all-img/child2.jpeg"
                            style={{ height: "600px", width: "800px" }}
                          ></img>
                        </div>
                        <div
                          className="card p-5"
                          style={{
                            height: "280px",
                            width: "670px",
                            marginTop: "20px",
                            marginLeft: "30px",
                          }}
                        >
                          <div className="fs-4">
                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Name </label>
                                <label style={{ marginLeft: "40px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>Anjana tharanga samaranayake</span>
                              </div>
                            </div>

                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Age </label>
                                <label style={{ marginLeft: "60px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>24</span>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>DOB </label>
                                <label style={{ marginLeft: "53px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>24/08/2000</span>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Course </label>
                                <label style={{ marginLeft: "40px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span>English</span>
                              </div>
                            </div>

                            <div className="d-flex">
                              <div className="" style={{ width: "120px" }}>
                                <label>Intake </label>
                                <label style={{ marginLeft: "40px" }}>:</label>
                              </div>
                              <div style={{ marginLeft: "10px" }}>
                                <span> June intake</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                      <button className="mt-3 btn btn-warning fs-5" style={{ height: "45px", width: "170px", marginLeft: "780px" }}>
    <FontAwesomeIcon icon={faHourglass} style={{ marginRight: "10px",color:"white" }} />
    <label className="text-white" style={{ marginLeft: "10px" }}>Pending!</label>
</button>
                      </div>
                    </div>
                  </div> */}
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
