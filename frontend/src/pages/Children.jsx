import React, { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHourglass } from '@fortawesome/free-solid-svg-icons';


export default function Children() {
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
                  {/* <div className="form-group col-md-6"></div>

                <div className="form-group col-md-12">
                  <div
                    className="card"
                    role="alert"
                    style={{ height: "200px" }}
                  ></div>
                </div> */}

                  <div className="card" style={{ height: "auto" }}>
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
    </div>
  );
}
