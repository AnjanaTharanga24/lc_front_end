import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MyQr() {
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
    <>
      <div
        className={`page-wrapper chiller-theme ${sidebarOpen ? "toggled" : ""}`}
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
            <h2>My QR</h2>
            <hr />

            <div className="row mb-4">
              <div >
                <img
                  src="assets/img/all-img/qr1.jpg"
                  style={{ height: "550px", width: "900px",marginLeft:"80px" }}
                ></img>
              </div>
            </div>

            <hr />
          </div>
        </main>
        {/* page-content" */}
      </div>
      {/* page-wrapper */}
    </>
  );
}
