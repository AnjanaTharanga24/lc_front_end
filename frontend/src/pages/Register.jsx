import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
    <>
      {/* Navbar Area Start */}
      <div className="navbar-area" id="navbar">
        <div className="navbar-top">
          <div className="container">
            <div className="main-max-width " style={{ width: "1500px" }}>
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-7 col-lg-7 col-md-6 ">
                  <ul className="navbar-contact d-lg-flex align-items-lg-center list-unstyle ">
                    <li>
                      <a className="navbar-brand xs-none" href="index.html">
                        <img
                          className="logo-light"
                          src="assets/img/logo/ls.png"
                          alt="logo"
                          style={{ height: "60px" }}
                        />
                      </a>
                    </li>
                    <li className="" style={{}}>
                      <i className="ri-map-pin-2-fill " />
                      <span>Road 405 Huston. USA</span>
                    </li>
                    <li className="" style={{}}>
                      <i className="ri-time-line" />
                      Mon - Fri: 9am 7 Pm
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5">
                  <div className="navbar-right d-flex align-items-center justify-content-center justify-content-lg-end">
                    <span className="fs-16 fc-main">Follow Us:</span>
                    <div className="option-item">
                      <ul className="social-profile list-unstyle position-relative">
                        <li>
                          <a href="https://www.fb.com" target="_blank">
                            <i className="ri-facebook-fill" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com" target="_blank">
                            <i className="ri-twitter-x-fill" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com" target="_blank">
                            <i className="ri-instagram-line" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com" target="_blank">
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
        <div className="container">
          <div className="main-max-width" style={{ width: "2000px" }}>
            <nav className="navbar insocour-nav navbar-expand-lg">
              <a className="navbar-brand lg-none" href="index.html">
                <img
                  className="logo-light"
                  src="assets/img/logo/ls.png"
                  alt="logo"
                  style={{ height: "60px" }}
                />
              </a>
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
              <div className="collapse navbar-collapse justify-content-between">
                <ul className="navbar-nav ms-1">
                  <li className="nav-item">
                    <a
                      href="javascript:void(0)"
                      className="dropdown-toggle nav-link"
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
                        <a href="index-2.html" className="nav-link">
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
                    <a href="about.html" className="nav-link">
                      About
                    </a>
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
                      <span>Skills</span>
                    </a>
                    <ul className="dropdown-menu list-unstyle">
                      <Link to="/listening">
                        <li className="nav-item">
                          <a className="nav-link">Listening</a>
                        </li>
                      </Link>

                      <Link to="/reading">
                        <li className="nav-item">
                          <a className="nav-link">Reading</a>
                        </li>
                      </Link>

                      <Link to="/writing">
                        <li className="nav-item">
                          <a href="blog-details.html" className="nav-link">
                            Writing
                          </a>
                        </li>
                      </Link>

                      <Link to="/speaking">
                        <li className="nav-item">
                          <a href="blog-details.html" className="nav-link">
                            Speaking
                          </a>
                        </li>
                      </Link>
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

                  <Link to='register'>
                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Register
                    </a>
                  </li>
                  </Link>
                </ul>
                <div className="option-item">
                  <a href="contact.html" className="serarch-btn">
                    <i className="ri-user-3-line" />
                  </a>
                  <a href="cart.html" className="shop-btn">
                    <i className="ri-shopping-cart-2-line" />
                    <span className="cart-number">1</span>
                  </a>
                  <a href="contact.html" className="btn style-one box-shadow-1">
                    Free Consulting
                  </a>
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
              <a href="javascript:void(0);">Home</a>
              <ul className="responsive-menu-items">
                <li>
                  <a href="index.html">Home One</a>
                </li>
                <li>
                  <a href="index-2.html">Home Two</a>
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
              <a href="javascript:void(0);" className="active">
                Blog
              </a>
              <ul className="responsive-menu-items">
                <li>
                  <a href="blog.html" className="active">
                    Blog
                  </a>
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
            <div className="option-item">
              <a href="contact.html" className="btn style-one w-100">
                Free Consulting
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Responsive Navbar End */}

      {/*  Page Title Area Start*/}
      {/* <section className="page-title-area position-relative">
        <div className="container">
          <div className="main-max-width">
            <div className="page-title-content">
              <h2>Blog</h2>
              <ul className="page-breadcrumb align-items-center list-unstyle">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item" />
                <li className="primery-link">Blog</li>
              </ul>
              <div className="shape-1 moveHorizontal">
                <img src="assets/img/icon/shape-2.svg" alt="image" />
              </div>
              <div className="shape-2">
                <img src="assets/img/icon/section-icon-1.svg" alt="image" />
              </div>
              <div className="shape-3 bounce">
                <img src="assets/img/icon/section-icon-2.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*  Page Title Area End*/}
      {/* Blog Section Start */}
      
      <div className="blog-section ptb-100">

        {/* <div className="container">
          <div className="main-max-width">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="single-blog-box">
                  <div className="image position-relative">
                    <a href="blog-details.html">
                      <img src="assets/img/all-img/blog-1.png" alt="image" />
                    </a>
                    <div className="cr-tag">
                      <a href="author.html">Design</a>
                    </div>
                    <div className="author">
                      <a href="author.html">
                        <img
                          src="assets/img/all-img/blog-user-1.png"
                          alt="image"
                        />
                        <span>Eleanor Pena</span>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-20">
                        <a href="author.html">
                          <i className="ri-chat-1-line" />
                          <span>54 Message</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-calendar-2-line" />
                        <span>31 December 2023</span>
                      </li>
                    </ul>
                    <h3 className="mb-15 fs-20">
                      <a href="blog-details.html">
                        Business modeless and pricing strategies are
                        essential.
                      </a>
                    </h3>
                    <p>
                      This immersive course is crafted to provide participants
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-blog-box">
                  <div className="image position-relative">
                    <a href="blog-details.html">
                      <img src="assets/img/all-img/blog-2.png" alt="image" />
                    </a>
                    <div className="cr-tag">
                      <a href="author.html">Design</a>
                    </div>
                    <div className="author">
                      <a href="author.html">
                        <img
                          src="assets/img/all-img/blog-user-1.png"
                          alt="image"
                        />
                        <span>Eleanor Pena</span>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-20">
                        <a href="author.html">
                          <i className="ri-chat-1-line" />
                          <span>54 Message</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-calendar-2-line" />
                        <span>31 December 2023</span>
                      </li>
                    </ul>
                    <h3 className="mb-15 fs-20">
                      <a href="blog-details.html">
                        Business modeless and pricing strategies are
                        essential.
                      </a>
                    </h3>
                    <p>
                      This immersive course is crafted to provide participants
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-blog-box">
                  <div className="image position-relative">
                    <a href="blog-details.html">
                      <img src="assets/img/all-img/blog-3.png" alt="image" />
                    </a>
                    <div className="cr-tag">
                      <a href="author.html">Design</a>
                    </div>
                    <div className="author">
                      <a href="author.html">
                        <img
                          src="assets/img/all-img/blog-user-1.png"
                          alt="image"
                        />
                        <span>Eleanor Pena</span>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-20">
                        <a href="author.html">
                          <i className="ri-chat-1-line" />
                          <span>54 Message</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-calendar-2-line" />
                        <span>31 December 2023</span>
                      </li>
                    </ul>
                    <h3 className="mb-15 fs-20">
                      <a href="blog-details.html">
                        Business modeless and pricing strategies are
                        essential.
                      </a>
                    </h3>
                    <p>
                      This immersive course is crafted to provide participants
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-blog-box">
                  <div className="image position-relative">
                    <a href="blog-details.html">
                      <img src="assets/img/all-img/blog-4.png" alt="image" />
                    </a>
                    <div className="cr-tag">
                      <a href="author.html">Design</a>
                    </div>
                    <div className="author">
                      <a href="author.html">
                        <img
                          src="assets/img/all-img/blog-user-1.png"
                          alt="image"
                        />
                        <span>Eleanor Pena</span>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-20">
                        <a href="author.html">
                          <i className="ri-chat-1-line" />
                          <span>54 Message</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-calendar-2-line" />
                        <span>31 December 2023</span>
                      </li>
                    </ul>
                    <h3 className="mb-15 fs-20">
                      <a href="blog-details.html">
                        Business modeless and pricing strategies are
                        essential.
                      </a>
                    </h3>
                    <p>
                      This immersive course is crafted to provide participants
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-blog-box">
                  <div className="image position-relative">
                    <a href="blog-details.html">
                      <img src="assets/img/all-img/blog-5.png" alt="image" />
                    </a>
                    <div className="cr-tag">
                      <a href="author.html">Design</a>
                    </div>
                    <div className="author">
                      <a href="author.html">
                        <img
                          src="assets/img/all-img/blog-user-1.png"
                          alt="image"
                        />
                        <span>Eleanor Pena</span>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-20">
                        <a href="author.html">
                          <i className="ri-chat-1-line" />
                          <span>54 Message</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-calendar-2-line" />
                        <span>31 December 2023</span>
                      </li>
                    </ul>
                    <h3 className="mb-15 fs-20">
                      <a href="blog-details.html">
                        Business modeless and pricing strategies are
                        essential.
                      </a>
                    </h3>
                    <p>
                      This immersive course is crafted to provide participants
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="single-blog-box">
                  <div className="image position-relative">
                    <a href="blog-details.html">
                      <img src="assets/img/all-img/blog-6.png" alt="image" />
                    </a>
                    <div className="cr-tag">
                      <a href="author.html">Design</a>
                    </div>
                    <div className="author">
                      <a href="author.html">
                        <img
                          src="assets/img/all-img/blog-user-1.png"
                          alt="image"
                        />
                        <span>Eleanor Pena</span>
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-20">
                        <a href="author.html">
                          <i className="ri-chat-1-line" />
                          <span>54 Message</span>
                        </a>
                      </li>
                      <li>
                        <i className="ri-calendar-2-line" />
                        <span>31 December 2023</span>
                      </li>
                    </ul>
                    <h3 className="mb-15 fs-20">
                      <a href="blog-details.html">
                        Business modeless and pricing strategies are
                        essential.
                      </a>
                    </h3>
                    <p>
                      This immersive course is crafted to provide participants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <ul className="page-nav list-style text-center mt-40">
          <li>
            <a href="blog.html">
              <img src="assets/img/icon/long-arrow.svg" alt="icon" />
            </a>
          </li>
          <li>
            <a className="active" href="blog.html">
              01
            </a>
          </li>
          <li>
            <a href="blog.html">02</a>
          </li>
          <li>
            <a href="blog.html">03</a>
          </li>
          <li>
            <a href="blog.html">04</a>
          </li>
          <li>
            <a href="blog.html">
              <img src="assets/img/icon/long-arrow.svg" alt="icon" />
            </a>
          </li>
        </ul> */}


<div className="page-content wizard-v7-content shadow-lg  mb-5 bg-white rounded" style={{width:"850px", marginLeft:"400px"}}>
  <div className="wizard-form" >
    <form className="form-register" action="#" method="post">
      <div id="form-total" >
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
        <section >
          <div className="inner ">
            <div className="wizard-header">
              <h3 className="heading">Parent Details</h3>
            </div>

            <div className="form-row " >
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

            <div className="form-row " >
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

            <div className="form-row " >
              <div className="form-holder form-holder-2">
                <label htmlFor="">Country</label>
                <select className="form-control" 
                  
                  >
                    <option value="">Your Country</option>
                    <option value="">Sri Lanka</option>
                    <option value="">Italy</option>
                    <option value="">Australia</option>
                    <option value="">England</option>
                  </select>
              </div>
            </div>

            <div className="form-row " >
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

            <div className="form-row " >
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

            <div className="form-row " >
              <div className="form-holder form-holder-2">
                <label htmlFor="">Intake</label>
                <select className="form-control" 
                  
                  >
                    <option value="">Select Intake</option>
                    <option value="">June Intake</option>
                    <option value="">Regular Intake</option>
                  </select>
              </div>
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
                <label htmlFor="confirm_password">Confirm Password</label>
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


            {/* <div className="form-row">
              <div className="form-holder form-holder-2">
                <label htmlFor="card_name">Card Holder Name</label>
                <input
                  type="text"
                  name="card_name"
                  id="card_name"
                  placeholder="Taylor Fuller"
                  className="form-control"
                  required=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-holder form-holder-2">
                <label htmlFor="card_number">Card Number</label>
                <input
                  type="text"
                  name="card_number"
                  id="card_number"
                  placeholder="4224-3228-6160-5079"
                  className="form-control"
                  required=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-holder form-holder-2">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="password"
                  name="cvc"
                  id="cvc"
                  className="form-control"
                  required=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-holder form-holder-2">
                <label htmlFor="expiration">Expiration(MM/YYYY)</label>
                <input
                  type="text"
                  name="expiration"
                  id="expiration"
                  placeholder="MM/YYYY"
                  className="form-control"
                  required=""
                />
              </div>
            </div> */}







          </div>
        </section>
        {/* SECTION 3 */}
        <h2>
          <p className="step-icon">
            <span>3</span>
          </p>
          <div className="step-text">
            <span className="step-inner-1">Agreement</span>
            <span className="step-inner-2">Our site policy</span>
          </div>
        </h2>
        <section>
          <div className="inner">
            <div className="wizard-header">
              <h3 className="heading">Agreement</h3>
            </div>
            <div className="form-row">
              <div className="form-holder form-holder-2">
                <div className="content-inner">
                  <p>
                    Massa placerat duis ultricies lacus sed turpis tin Elementum
                    sagittis vitae et leo duis ut diam quam nulla. Viverra
                    mauris in aliquam sem fringilla ut. Id leo in vitae turpis
                    massa sed elementum tempus. Aliquet enim tortor at auctor
                    urna nunc id cursus. Nulla aliquet enim tortor at auctor
                    .Consquat nisl vel pretium lectus quam id leo.
                  </p>
                  <div className="form-checkbox">
                    <label className="container">
                      <p>I read agreement and i have not any objection.</p>
                      <input type="checkbox" name="checkbox" />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
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
  )
}
