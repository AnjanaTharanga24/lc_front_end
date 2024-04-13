import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
      {/* Navbar Area Start */}
      <div className="navbar-area style-one style-2" id="navbar">
        <div className="container">
          <div className="main-max-width">
            <nav className="navbar insocour-nav navbar-expand-lg">
              <Link to="/">
                <a className="navbar-brand" href="index.html">
                  <img
                    className="logo-light "
                    src="assets/img/logo/ls.png"
                    alt="logo"
                    style={{ width: "200px" }}
                  />
                </a>
              </Link>
              <div className="other-options d-flex flex-wrap justify-content-end align-items-center d-lg-none">
                <div className="option-item d-flex">
                  <a href="contact.html" className="serarch-btn">
                    <i className="ri-user-3-line" />
                  </a>
                  <a href="cart.html" className="shop-btn">
                    <i className="ri-shopping-cart-2-line" />
                    <span className="cart-number">1</span>
                  </a>
                  <a
                    className="navbar-toggler"
                    data-bs-toggle="offcanvas"
                    href="#navbarOffcanvas"
                    role="button"
                    aria-controls="navbarOffcanvas"
                  >
                    <span className="burger-menu">
                      <span className="top-bar" />
                      <span className="middle-bar" />
                      <span className="bottom-bar" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="collapse navbar-collapse align-items-center justify-content-between">
                <ul className="navbar-nav ms-1">
                  <li className="nav-item">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-toggle nav-link active"
                    >
                      Home
                    </a>
                    <ul className="dropdown-menu list-unstyle">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">
                          Home One
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link active">
                          Home Two
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">
                          Home Three
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-toggle nav-link"
                    >
                      Courses
                    </a>
                    <ul className="dropdown-menu list-unstyle">
                      <li className="nav-item">
                        <a href="courses.html" className="nav-link">
                          Courses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="courses-list.html" className="nav-link">
                          Course List
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="courses-grid.html" className="nav-link">
                          Courses Grid
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="course-details.html" className="nav-link">
                          Course Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-toggle nav-link"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu list-unstyle">
                      <li className="nav-item">
                        <a href="shop.html" className="nav-link">
                          Shop
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="shop-filtter.html" className="nav-link">
                          Shop Sidebar
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="single-product.html" className="nav-link">
                          Product Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="cart.html" className="nav-link">
                          Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="checkout.html" className="nav-link">
                          Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="success.html" className="nav-link">
                          Success
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-toggle nav-link"
                    >
                      <span>Blog</span>
                    </a>
                    <ul className="dropdown-menu list-unstyle">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-list.html" className="nav-link">
                          Blog List
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-toggle nav-link"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu list-unstyle">
                      <li className="nav-item">
                        <a href="about.html" className="nav-link">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sign-in.html" className="nav-link">
                          Sign in
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="sign-up.html" className="nav-link">
                          Sign Up
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="javascript:void(0)"
                          className="dropdown-toggle nav-link"
                        >
                          Instructor
                        </a>
                        <ul className="dropdown-menu list-unstyle">
                          <li className="nav-item">
                            <a href="instructor.html" className="nav-link">
                              Instructor
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="instructor2.html" className="nav-link">
                              Instructor Tow
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="instructor-sidebar.html"
                              className="nav-link"
                            >
                              Instructor Sidebar
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="instructor-details.html"
                              className="nav-link"
                            >
                              Instructor Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="javascript:void(0)"
                          className="dropdown-toggle nav-link"
                        >
                          Error
                        </a>
                        <ul className="dropdown-menu list-unstyle">
                          <li className="nav-item">
                            <a href="error-404.html" className="nav-link">
                              Error One
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="error-sidebar-404.html"
                              className="nav-link"
                            >
                              Error Two
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li> */}
                </ul>
                <div className="option-item style-2 d-flex align-items-center">
                  <form>
                    <div className="form-group position-relative z-1">
                      <input
                        type="text"
                        className="from-control"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        className="border-0 box-shadow-0 bg-transparent"
                      >
                        <i className="ri-search-line" />
                      </button>
                    </div>
                  </form>
                  <Link to="/signin">
                    <a href="" className="btn style-one style-2">
                      Sign in
                    </a>
                  </Link>
                  <Link to="/register">
                    <a href="" className="btn style-one style-2">
                      Sign up
                    </a>
                  </Link>

                  <Link to="/parent-dashboard">
                    <a href="" class="serarch-btn" style={{margin:"20px"}}>
                      <i class="ri-user-3-line"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Navbar Area End */}
      {/* Responsive Navbar Start */}
      <div
        className="responsive-navbar offcanvas offcanvas-end border-0"
        data-bs-backdrop="static"
        tabIndex={-1}
        id="navbarOffcanvas"
      >
        <div className="offcanvas-header">
          <a href="index.html" className="logo d-inline-block">
            <img
              className="logo-light"
              src="assets/img/logo/logo.svg"
              alt="Image"
            />
          </a>
          <button
            type="button"
            className="close-btn bg-transparent position-relative lh-1 p-0 border-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="ri-close-line" />
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="responsive-menu">
            <li className="responsive-menu-list">
              <a href="javascript:void(0);" className="active">
                Home
              </a>
              <ul className="responsive-menu-items">
                <li>
                  <a href="index.html">Home One</a>
                </li>
                <li>
                  <a href="index-2.html" className="active">
                    Home Two
                  </a>
                </li>
                <li>
                  <a href="index-3.html">Home Three</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li className="responsive-menu-list">
              <a href="javascript:void(0);">Courses</a>
              <ul className="responsive-menu-items">
                <li>
                  <a href="courses.html">Courses</a>
                </li>
                <li>
                  <a href="courses-list.html">Course List</a>
                </li>
                <li>
                  <a href="courses-grid.html">Courses Grid</a>
                </li>
                <li>
                  <a href="course-details.html">Course Details</a>
                </li>
              </ul>
            </li>
            <li className="responsive-menu-list">
              <a href="javascript:void(0);">Shop</a>
              <ul className="responsive-menu-items">
                <li>
                  <a href="shop.html">Shop</a>
                </li>
                <li>
                  <a href="shop-filtter.html">Shop Sidebar</a>
                </li>
                <li>
                  <a href="single-product.html">Product Details</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="success.html">Success</a>
                </li>
              </ul>
            </li>
            <li className="responsive-menu-list">
              <a href="javascript:void(0);">Blog</a>
              <ul className="responsive-menu-items">
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="blog-list.html">Blog List</a>
                </li>
                <li>
                  <a href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li className="responsive-menu-list">
              <a href="javascript:void(0);">Pages</a>
              <ul className="responsive-menu-items">
                <li>
                  <a href="sign-in.html">Sign in</a>
                </li>
                <li>
                  <a href="sign-up.html">Sign Up</a>
                </li>
                <li className="responsive-menu-list">
                  <a href="javascript:void(0);">Instructor</a>
                  <ul className="responsive-menu-items">
                    <li>
                      <a href="instructor.html">Instructor</a>
                    </li>
                    <li>
                      <a href="instructor2.html">Instructor Tow</a>
                    </li>
                    <li>
                      <a href="instructor-sidebar.html">Instructor Sidebar</a>
                    </li>
                    <li>
                      <a href="instructor-details.html">Instructor Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="faq.html">FAQ</a>
                </li>
                <li className="responsive-menu-list">
                  <a href="javascript:void(0);">Error</a>
                  <ul className="responsive-menu-items">
                    <li>
                      <a href="error-404.html">Error One</a>
                    </li>
                    <li>
                      <a href="error-sidebar-404.html">Error Tow</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>

          <div className="other-option d-md-flex align-items-center">
            <div className="option-item  text-center">
              <a href="" className="btn style-one style-2">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Navbar End */}
    </div>
  );
}

export default SideBar;
