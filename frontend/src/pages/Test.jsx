import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt, faHistory } from "@fortawesome/free-solid-svg-icons";
import "../css/BankPayment.css";

export default function BankPayment() {
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
                      <span
                        className="user-role"
                        style={{ marginLeft: "13px" }}
                      >
                        jhon@gmail.com
                      </span>
                      <span
                        className="user-status"
                        style={{ marginLeft: "15px" }}
                      >
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
                        <a href="#" onClick={() => toggleDropdown(1)}>
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
                        <a href="#">
                          <i className="fa fa-shopping-cart bg-light" />
                          <span>Bank Payment</span>
                          <span className="badge badge-pill badge-danger">
                            3
                          </span>
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
                  <h2>Bank Payment</h2>
                  <hr />

                  <div className="row">
                    <div className="card" style={{ height: "auto" }}>
                      <div className="d-flex fs-4">
                        <div
                          className="card p-4 mt-3 payment-card"
                          style={{ width: "250px" }}
                        >
                          <FontAwesomeIcon
                            icon={faMoneyBillAlt}
                            className="payment-icon"
                          />
                          <span className="payment-text mt-1">
                            Pending Payment
                          </span>
                        </div>
                        <div
                          className="card p-4 mt-3 payment-card"
                          style={{ width: "250px", marginLeft: "20px" }}
                        >
                          <FontAwesomeIcon
                            icon={faHistory}
                            className="payment-icon"
                          />
                          <span className="payment-text mt-1">
                            Past Payment
                          </span>
                        </div>
                      </div>

                      <div>
                        <div
                          className=" wizard-form card p-4 mt-3 mb-4 "
                          style={{ height: "auto" }}
                        >
                          <div className="d-flex justify-content-between mb-3">
                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    January
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    February
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    March
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    April
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>


                          </div>

                          <div className="d-flex justify-content-between mb-3">
                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    May
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    June
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    July
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    August
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>


                          </div>

                          <div className="d-flex justify-content-between mb-3">
                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    September
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    Octomber
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    November
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>

                            <div
                              className="card "
                              style={{ height: "100px", width: "250px" }}
                            >
                              <div className=" p-3  ">
                                <div className="fs-5">
                                  <input
                                    className=""
                                    type="checkbox"
                                    style={{ marginTop: "10px",width: "20px", height: "20px" }}
                                  />
                                  <label style={{ marginLeft: "20px" ,fontSize:"20px"}}>
                                    December
                                  </label>
                                  <div className="d-flex justify-content-between ">
                                    <label className="" style={{fontSize:"15px"}}>2 Child Package</label>
                                   
                                    <label style={{ marginTop: "-4px" }}>€28</label>
                                    
                                  </div>
                                </div>

                                
                              </div>
                            </div>


                          </div>

                          
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
    </div>
  );
}
