import React, { useEffect, useState } from "react";
import "../css/parentSidebar.css";
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
              {/* sidebar-header  */}
              {/* <div className="sidebar-search">
          <div>
            <div className="input-group">
              <input
                type="text"
                className="form-control search-menu"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <span className="input-group-text">
                  <i className="fa fa-search" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
        </div> */}
              {/* sidebar-search  */}
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
          <main className="page-content " style={{background:"#f2f2f2"}}>
            <div className="container-fluid">
              <h2>Parent Dashboard</h2>
              <hr />
              
              <div className="row">
                <div className="form-group col-md-12">
                  <p>
                    This is a responsive sidebar template with dropdown menu
                    based on bootstrap 4 framework.
                  </p>
                  <p>
                    {" "}
                    You can find the complete code on{" "}
                    <a
                      href="https://github.com/azouaoui-med/pro-sidebar-template"
                      target="_blank"
                    >
                      Github
                    </a>
                    , it contains more themes and background image option
                  </p>
                </div>
                {/* <div className="form-group col-md-12">
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=star&count=true&size=small"
                    frameBorder={0}
                    scrolling={0}
                    width="90px"
                    height="30px"
                  />
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=azouaoui-med&repo=pro-sidebar-template&type=fork&count=true&size=small"
                    frameBorder={0}
                    scrolling={0}
                    width="90px"
                    height="30px"
                  />
                </div> */}
                <div className="form-group col-md-12">
                  <div className="card" role="alert" style={{height:"200px"}}>
                    {/* <h4 className="alert-heading">New !</h4> */}
                    {/* <p>
                      New react pro sidebar library is now available on{" "}
                      <a
                        href="https://www.npmjs.com/package/react-pro-sidebar"
                        target="_blank"
                      >
                        npm
                      </a>{" "}
                      <a
                        href="https://github.com/azouaoui-med/react-pro-sidebar"
                        target="_blank"
                      >
                        <img
                          alt="GitHub stars"
                          src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
                        />
                      </a>
                    </p> */}
                    {/* <a
                      href="https://github.com/azouaoui-med/react-pro-sidebar"
                      target="_blank"
                      className="btn btn-sm btn-primary mr-2"
                    >
                      Github
                    </a> */}
                    {/* <a
                      href="https://azouaoui-med.github.io/react-pro-sidebar"
                      target="_blank"
                      className="btn btn-sm btn-success"
                    >
                      Demo
                    </a> */}


                  </div>
                </div>
              </div>

              
              
              {/* <h5>More templates</h5>
              <hr />
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="card rounded-0 p-0 shadow-sm">
                    <img
                      src="https://user-images.githubusercontent.com/25878302/58369568-a49b2480-7efc-11e9-9ca9-2be44afacda1.png"
                      className="card-img-top rounded-0"
                      alt="Angular pro sidebar"
                    />
                    <div className="card-body text-center">
                      <h6 className="card-title">Angular Pro Sidebar</h6>
                      <a
                        href="https://github.com/azouaoui-med/angular-pro-sidebar"
                        target="_blank"
                        className="btn btn-primary btn-sm"
                      >
                        Github
                      </a>
                      <a
                        href="https://azouaoui-med.github.io/angular-pro-sidebar/demo/"
                        target="_blank"
                        className="btn btn-success btn-sm"
                      >
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div className="card rounded-0 p-0 shadow-sm">
                    <img
                      src="https://user-images.githubusercontent.com/25878302/58369258-33f20900-7ef8-11e9-8ff3-b277cb7ed7b4.PNG"
                      className="card-img-top rounded-0"
                      alt="Angular pro sidebar"
                    />
                    <div className="card-body text-center">
                      <h6 className="card-title">Angular Dashboard</h6>
                      <a
                        href="https://github.com/azouaoui-med/lightning-admin-angular"
                        target="_blank"
                        className="btn btn-primary btn-sm"
                      >
                        Github
                      </a>
                      <a
                        href="https://azouaoui-med.github.io/lightning-admin-angular/demo/"
                        target="_blank"
                        className="btn btn-success btn-sm"
                      >
                        Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              <hr />
              {/* <footer className="text-center">
                <div className="mb-2">
                  <small>
                    © 2020 made with{" "}
                    <i className="fa fa-heart" style={{ color: "red" }} /> by -{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://azouaoui.netlify.com"
                    >
                      Mohamed Azouaoui
                    </a>
                  </small>
                </div>
                <div>
                  <a href="https://github.com/azouaoui-med" target="_blank">
                    <img
                      alt="GitHub followers"
                      src="https://img.shields.io/github/followers/azouaoui-med?label=github&style=social"
                    />
                  </a>
                  <a href="https://twitter.com/azouaoui_med" target="_blank">
                    <img
                      alt="Twitter Follow"
                      src="https://img.shields.io/twitter/follow/azouaoui_med?label=twitter&style=social"
                    />
                  </a>
                </div>
              </footer> */}
            </div>
          </main>
          {/* page-content" */}
        </div>
        {/* page-wrapper */}
      </>
    </div>
  );
}
