import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../component/SideBar";

function Index() {
  return (
    <div>
      {/* Navbar Area Start */}
      {/* <div className="navbar-area" id="navbar">
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
                    <Link to='signin'>
                  <li className="nav-item">
                    <a
                     
                      className=" nav-link"
                    >
                      Sign in
                    </a>
                    
                  </li>
                  </Link>

                  <Link to='register'>
                  <li className="nav-item" style={{marginLeft:"10px"}}>
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
      </div> */}
       <SideBar/>
      {/* Navbar Area End */}
      {/* Responsive Navbar Start */}
      {/* <div
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
      </div> */}
      {/* Responsive Navbar End */}

      {/* Hero Section Start */}
      <div class="hero-section hero-bg position-relative">
        <div class="container">
          <div class="main-max-width">
            <div className="owl-item active" style={{ width: 1170 }}>
              <div className="silde-item">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="content ">
                      <h4 className="sub-title mb-25  ">
                        KEY TO THE FUTURE FOR
                      </h4>
                      
                      
                      
                      <h1 className="fs-50 mb-25 p-2">
                        TEENAGE <span className="gradient-style">STUDENTS</span>{" "}
                       
                      </h1>
                      

                      <p>
                        WE ALWAYS PROVIDE THE BEST ENGLISH EDUCATION FOR OUR TEENAGE STUDENTS AS THEY CAN FACE ANY KIND OF CHALLENGE IN THEIR LIVES AND AS A BRIDGE TO THE WORLD
                      </p>
                      
                      
                      <div className="her-btns mt-40">
                        <a
                          href="course-details.html"
                          className="btn style-one mr-20"
                        >
                          Browser Course{" "}
                          <img
                            src="assets/img/icon/long-arrow.svg"
                            alt="Image"
                          />
                        </a>
                        <a href="about.html" className="btn style-two">
                          Explore More
                          <img
                            src="assets/img/icon/long-arrow.svg"
                            alt="Image"
                          />
                        </a>
                      </div>
                      <div className="book-icon bounce">
                        <img src="assets/img/icon/book.svg" alt="image" />
                      </div>
                      <div className="idea-icon">
                        <img src="assets/img/icon/idea.svg" alt="image" />
                      </div>
                      <div className="global-icon rotate">
                        <img src="assets/img/icon/global.svg" alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section End */}

      {/* Category Section Start */}
      <div className="category-section ptb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <div className="row">
                <div className="col-lg-7 col-sm-7">
                  <div className="content">
                    <h4 className="sub-title mb-25"># Browse Category</h4>
                    <h2 className="mb-0 fs-35">Top Courses Categories</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-5">
                  <div className="section-btn text-end">
                    <a
                      href="courses.html"
                      className="btn style-one box-shadow-1"
                    >
                      All Categories{" "}
                      <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <img src="assets/img/icon/catg-icon-1.svg" alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16">
                      <a href="courses-grid.html">Finance &amp; Accounting</a>
                    </h4>
                    <p className="m-0 fs-15">
                      15 Courses{" "}
                      <img src="assets/img/icon/long-arrow-2.svg" alt="Image" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <img src="assets/img/icon/catg-icon-2.svg" alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16">
                      <a href="courses-grid.html">Management</a>
                    </h4>
                    <p className="m-0 fs-15">
                      30 Courses{" "}
                      <img src="assets/img/icon/long-arrow-2.svg" alt="Image" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <img src="assets/img/icon/catg-icon-3.svg" alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16">
                      <a href="courses-grid.html">Learn Art &amp; Design</a>
                    </h4>
                    <p className="m-0 fs-15">
                      30 Courses{" "}
                      <img src="assets/img/icon/long-arrow-2.svg" alt="Image" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <img src="assets/img/icon/catg-icon-1.svg" alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16">
                      <a href="courses-grid.html">Foreign Languages</a>
                    </h4>
                    <p className="m-0 fs-15">
                      15 Courses{" "}
                      <img src="assets/img/icon/long-arrow-2.svg" alt="Image" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <img src="assets/img/icon/catg-icon-1.svg" alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16">
                      <a href="courses-grid.html">Marketing &amp; sales</a>
                    </h4>
                    <p className="m-0 fs-15">
                      15 Courses{" "}
                      <img src="assets/img/icon/long-arrow-2.svg" alt="Image" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="cetg-card d-flex align-items-center position-relative mb-25 box-shadow-2">
                  <div className="icon">
                    <img src="assets/img/icon/catg-icon-1.svg" alt="icon" />
                  </div>
                  <div className="text">
                    <h4 className="fs-16">
                      <a href="courses-grid.html">Lifestyle &amp; Fashion</a>
                    </h4>
                    <p className="m-0 fs-15">
                      15 Courses{" "}
                      <img src="assets/img/icon/long-arrow-2.svg" alt="Image" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Category Section End */}

      {/* About Section Start */}
      <div className="about-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <h4 className="sub-title mb-25"># About Us</h4>
                  <h2 className="mb-50 fs-35">Why Will You Choose Our?</h2>
                  <p className="mb-30">
                    Delve into Insocour guided by industry experts and seasoned
                    professionals. Our carefully curated curriculum is Designed
                    to impart not just theoretical knowledge but practical
                    insights gained from real-world experience.
                  </p>
                  <p className="mb-30">
                    Learn by doing. Our course emphasizes hands-on projects,
                    case studies, and interactive sessions to ensure you can
                    apply your newfound knowledge directly to real-world
                    scenarios.
                  </p>
                </div>
                <div className="about-meta d-flex align-items-center mt-40">
                  <div className="about-btn mr-20">
                    <a href="about.html" className="btn style-one box-shadow-1">
                      About More
                      <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                    </a>
                  </div>
                  <div className="info">
                    <div className="d-flex align-items-center">
                      <h5 className="count">16</h5>
                      <h5>+</h5>
                    </div>
                    <h5>Years Of Experiences</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-wrapper">
                  <div className="card about-card active" id="my-element1">
                    <h4 className="heading">Learn From The Experts</h4>
                    <div className="description">
                      <div className="icon">
                        <img src="assets/img/icon/about-icon.svg" alt="icon" />
                      </div>
                      <h4>Learn From The Experts</h4>
                      <p>
                        Stay committed to lifelong learning. Fields evolve, and
                        staying informed about the latest Developments.
                      </p>
                      <a className="btn" href="about.html">
                        Read More{" "}
                        <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                      </a>
                    </div>
                  </div>
                  <div className="card about-card" id="my-element2">
                    <h4 className="heading">Seven Easy Rules Of Education</h4>
                    <div className="description">
                      <div className="icon">
                        <img src="assets/img/icon/about-icon.svg" alt="icon" />
                      </div>
                      <h4>Seven Easy Rules Of Education</h4>
                      <p>
                        Stay committed to lifelong learning. Fields evolve, and
                        staying informed about the latest Developments.
                      </p>
                      <a className="btn" href="about.html">
                        Read More{" "}
                        <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                      </a>
                    </div>
                  </div>
                  <div className="card about-card" id="my-element3">
                    <h4 className="heading">Explore our Beliefs</h4>
                    <div className="description">
                      <div className="icon">
                        <img src="assets/img/icon/about-icon.svg" alt="icon" />
                      </div>
                      <h4>Explore our Beliefs</h4>
                      <p>
                        Stay committed to lifelong learning. Fields evolve, and
                        staying informed about the latest Developments.
                      </p>
                      <a className="btn" href="about.html">
                        Read More{" "}
                        <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section End */}

      {/* Course Section Start */}
      <div className="course-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50 position-relative">
              <h4 className="sub-title mb-25"># Our Courses List</h4>
              <h2 className="fs-35">Broad Selection Of Course</h2>
              <div className="sorting-menu">
                <ul>
                  <li className="filter active" data-filter="all">
                    All Courses
                  </li>
                  <li className="filter" data-filter=".Design">
                    UI&amp;UX Design
                  </li>
                  <li className="filter" data-filter=".Business">
                    Business
                  </li>
                  <li className="filter" data-filter=".Development">
                    Development
                  </li>
                </ul>
              </div>
            </div>
            <div id="mix-wrapper" className="course-mix-wrapper">
              <div className="row">
                <div
                  className="col-lg-4 col-sm-6 mix-target Business Design"
                  style={{ display: "inline-block" }}
                  data-bound=""
                >
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <a href="course-details.html" className="d-block">
                        <img
                          src="assets/img/all-img/course-1.png"
                          alt="image"
                        />
                      </a>
                      <div className="cr-option">
                        <a href="courses-list.html">
                          <i className="ri-heart-fill" />
                        </a>
                        <a href="courses-list.html">
                          <i className="ri-shopping-basket-fill" />
                        </a>
                      </div>
                      <div className="cr-tag">
                        <a href="course-details.html">Engineering</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <img
                            src="assets/img/all-img/user-1.png"
                            alt="image"
                          />
                          <span>Eleanor Pena</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <a href="course-details.html">
                          Full web Designing Course with 42 web Template.
                        </a>
                      </h3>
                      <div className="ratings mb-20">
                        <ul className="d-flex list-unstyle p-0">
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill" />{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line" /> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-sm-6 mix-target Development Design"
                  style={{ display: "inline-block" }}
                  data-bound=""
                >
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <a href="course-details.html" className="d-block">
                        <img
                          src="assets/img/all-img/course-2.png"
                          alt="image"
                        />
                      </a>
                      <div className="cr-option">
                        <a href="courses-list.html">
                          <i className="ri-heart-fill" />
                        </a>
                        <a href="courses-list.html">
                          <i className="ri-shopping-basket-fill" />
                        </a>
                      </div>
                      <div className="cr-tag">
                        <a href="course-details.html">Engineering</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <img
                            src="assets/img/all-img/user-2.png"
                            alt="image"
                          />
                          <span>Jerome Bell</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <a href="course-details.html">
                          Full web Designing Course with 42 web Template.
                        </a>
                      </h3>
                      <div className="ratings mb-20">
                        <ul className="d-flex list-unstyle p-0">
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill" />{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line" /> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-sm-6 mix-target Development Business"
                  style={{ display: "inline-block" }}
                  data-bound=""
                >
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <a href="course-details.html" className="d-block">
                        <img
                          src="assets/img/all-img/course-3.png"
                          alt="image"
                        />
                      </a>
                      <div className="cr-option">
                        <a href="courses-list.html">
                          <i className="ri-heart-fill" />
                        </a>
                        <a href="courses-list.html">
                          <i className="ri-shopping-basket-fill" />
                        </a>
                      </div>
                      <div className="cr-tag">
                        <a href="course-details.html">Engineering</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <img
                            src="assets/img/all-img/user-3.png"
                            alt="image"
                          />
                          <span>Jacob Jones</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <a href="course-details.html">
                          Full web Designing Course with 42 web Template.
                        </a>
                      </h3>
                      <div className="ratings mb-20">
                        <ul className="d-flex list-unstyle p-0">
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill" />{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line" /> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-sm-6 mix-target Business Design Development"
                  style={{ display: "inline-block" }}
                  data-bound=""
                >
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <a href="course-details.html" className="d-block">
                        <img
                          src="assets/img/all-img/course-4.png"
                          alt="image"
                        />
                      </a>
                      <div className="cr-option">
                        <a href="courses-list.html">
                          <i className="ri-heart-fill" />
                        </a>
                        <a href="courses-list.html">
                          <i className="ri-shopping-basket-fill" />
                        </a>
                      </div>
                      <div className="cr-tag">
                        <a href="course-details.html">Engineering</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <img
                            src="assets/img/all-img/user-4.png"
                            alt="image"
                          />
                          <span>Esther Howard</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <a href="course-details.html">
                          Full web Designing Course with 42 web Template.
                        </a>
                      </h3>
                      <div className="ratings mb-20">
                        <ul className="d-flex list-unstyle p-0">
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill" />{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line" /> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-sm-6 mix-target Design Development"
                  style={{ display: "inline-block" }}
                  data-bound=""
                >
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <a href="course-details.html" className="d-block">
                        <img
                          src="assets/img/all-img/course-5.png"
                          alt="image"
                        />
                      </a>
                      <div className="cr-option">
                        <a href="courses-list.html">
                          <i className="ri-heart-fill" />
                        </a>
                        <a href="courses-list.html">
                          <i className="ri-shopping-basket-fill" />
                        </a>
                      </div>
                      <div className="cr-tag">
                        <a href="course-details.html">Engineering</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <img
                            src="assets/img/all-img/user-5.png"
                            alt="image"
                          />
                          <span>Wade Warren</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <a href="course-details.html">
                          Full web Designing Course with 42 web Template.
                        </a>
                      </h3>
                      <div className="ratings mb-20">
                        <ul className="d-flex list-unstyle p-0">
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill" />{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line" /> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-sm-6 mix-target Business Development"
                  style={{ display: "inline-block" }}
                  data-bound=""
                >
                  <div className="single-courses-box mb-25 box-shadow-2">
                    <div className="image mb-20 position-relative">
                      <a href="course-details.html" className="d-block">
                        <img
                          src="assets/img/all-img/course-6.png"
                          alt="image"
                        />
                      </a>
                      <div className="cr-option">
                        <a href="courses-list.html">
                          <i className="ri-heart-fill" />
                        </a>
                        <a href="courses-list.html">
                          <i className="ri-shopping-basket-fill" />
                        </a>
                      </div>
                      <div className="cr-tag">
                        <a href="course-details.html">Engineering</a>
                      </div>
                    </div>
                    <div className="content">
                      <div className="meta-info mb-20 d-flex align-items-center justify-content-between">
                        <div className="author d-flex align-items-center">
                          <img
                            src="assets/img/all-img/user-6.png"
                            alt="image"
                          />
                          <span>Robert Fox</span>
                        </div>
                        <div className="cr-price">
                          <h5 className="fs-16">
                            <span className="price">$100/</span>{" "}
                            <span className="old-price">$400</span>
                          </h5>
                        </div>
                      </div>
                      <h3 className="mb-15 fs-20">
                        <a href="course-details.html">
                          Full web Designing Course with 42 web Template.
                        </a>
                      </h3>
                      <div className="ratings mb-20">
                        <ul className="d-flex list-unstyle p-0">
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <i className="ri-star-fill" />
                          </li>
                          <li>
                            <span>(45)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="cr-items d-flex list-unstyle">
                      <li className="mr-15">
                        <i className="ri-vidicon-fill" />{" "}
                        <span>(45) lesson</span>{" "}
                      </li>
                      <li>
                        <i className="ri-time-line" /> <span>10 Week</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Section End */}

      {/* Testimonial Section Start */}
      <div className="testimonial-section custom-nav pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-5">
                <div className="content">
                  <h4 className="sub-title mb-25"># Client’s Testimonials</h4>
                  <h2 className="mb-30 fs-35">Let's what our student says</h2>
                  <p className="mb-50">
                    The community created within the program is supportive and
                    collaborative. I've had the opportunity to connect with
                    fellow learners, share experiences, and even collaborate on
                    projects. It truly feels like a learning journey.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="testimonial-cards owl-carousel owl-theme owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div
                      className="owl-stage"
                      style={{
                        transition: "all 0s ease 0s",
                        width: 2424,
                        transform: "translate3d(-519px, 0px, 0px)",
                      }}
                    >
                      <div
                        className="owl-item cloned"
                        style={{ width: "326.25px", marginRight: 20 }}
                      >
                        <div className="testimonial-box">
                          <div className="info mb-25 d-flex align-items-center justify-content-between">
                            <div className="image d-flex align-items-center">
                              <img
                                src="assets/img/all-img/student-rev.png"
                                alt="image"
                              />
                              <div className="content">
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                            </div>
                            <div className="icon">
                              <img
                                src="assets/img/icon/quate-icon.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="box-content">
                            <p>
                              The impact of consulting services was evident in
                              the measurable results we achieved. Our
                              organization is now better positioned for success,
                              and our team is equipped with the knowledge and
                              tools needed to navigate future challenges.
                            </p>
                          </div>
                          <div className="ratings">
                            <ul className="d-flex list-unstyle p-0">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "326.25px", marginRight: 20 }}
                      >
                        <div className="testimonial-box">
                          <div className="info mb-25 d-flex align-items-center justify-content-between">
                            <div className="image d-flex align-items-center">
                              <img
                                src="assets/img/all-img/student-rev.png"
                                alt="image"
                              />
                              <div className="content">
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                            </div>
                            <div className="icon">
                              <img
                                src="assets/img/icon/quate-icon.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="box-content">
                            <p>
                              The impact of consulting services was evident in
                              the measurable results we achieved. Our
                              organization is now better positioned for success,
                              and our team is equipped with the knowledge and
                              tools needed to navigate future challenges.
                            </p>
                          </div>
                          <div className="ratings">
                            <ul className="d-flex list-unstyle p-0">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active center"
                        style={{ width: "326.25px", marginRight: 20 }}
                      >
                        <div className="testimonial-box">
                          <div className="info mb-25 d-flex align-items-center justify-content-between">
                            <div className="image d-flex align-items-center">
                              <img
                                src="assets/img/all-img/student-rev.png"
                                alt="image"
                              />
                              <div className="content">
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                            </div>
                            <div className="icon">
                              <img
                                src="assets/img/icon/quate-icon.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="box-content">
                            <p>
                              The impact of consulting services was evident in
                              the measurable results we achieved. Our
                              organization is now better positioned for success,
                              and our team is equipped with the knowledge and
                              tools needed to navigate future challenges.
                            </p>
                          </div>
                          <div className="ratings">
                            <ul className="d-flex list-unstyle p-0">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item active"
                        style={{ width: "326.25px", marginRight: 20 }}
                      >
                        <div className="testimonial-box">
                          <div className="info mb-25 d-flex align-items-center justify-content-between">
                            <div className="image d-flex align-items-center">
                              <img
                                src="assets/img/all-img/student-rev.png"
                                alt="image"
                              />
                              <div className="content">
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                            </div>
                            <div className="icon">
                              <img
                                src="assets/img/icon/quate-icon.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="box-content">
                            <p>
                              The impact of consulting services was evident in
                              the measurable results we achieved. Our
                              organization is now better positioned for success,
                              and our team is equipped with the knowledge and
                              tools needed to navigate future challenges.
                            </p>
                          </div>
                          <div className="ratings">
                            <ul className="d-flex list-unstyle p-0">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item"
                        style={{ width: "326.25px", marginRight: 20 }}
                      >
                        <div className="testimonial-box">
                          <div className="info mb-25 d-flex align-items-center justify-content-between">
                            <div className="image d-flex align-items-center">
                              <img
                                src="assets/img/all-img/student-rev.png"
                                alt="image"
                              />
                              <div className="content">
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                            </div>
                            <div className="icon">
                              <img
                                src="assets/img/icon/quate-icon.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="box-content">
                            <p>
                              The impact of consulting services was evident in
                              the measurable results we achieved. Our
                              organization is now better positioned for success,
                              and our team is equipped with the knowledge and
                              tools needed to navigate future challenges.
                            </p>
                          </div>
                          <div className="ratings">
                            <ul className="d-flex list-unstyle p-0">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "326.25px", marginRight: 20 }}
                      >
                        <div className="testimonial-box">
                          <div className="info mb-25 d-flex align-items-center justify-content-between">
                            <div className="image d-flex align-items-center">
                              <img
                                src="assets/img/all-img/student-rev.png"
                                alt="image"
                              />
                              <div className="content">
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                            </div>
                            <div className="icon">
                              <img
                                src="assets/img/icon/quate-icon.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="box-content">
                            <p>
                              The impact of consulting services was evident in
                              the measurable results we achieved. Our
                              organization is now better positioned for success,
                              and our team is equipped with the knowledge and
                              tools needed to navigate future challenges.
                            </p>
                          </div>
                          <div className="ratings">
                            <ul className="d-flex list-unstyle p-0">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="owl-item cloned"
                        style={{ width: "326.25px", marginRight: 20 }}
                      >
                        <div className="testimonial-box">
                          <div className="info mb-25 d-flex align-items-center justify-content-between">
                            <div className="image d-flex align-items-center">
                              <img
                                src="assets/img/all-img/student-rev.png"
                                alt="image"
                              />
                              <div className="content">
                                <h5 className="fs-16">Jonson Maxwell</h5>
                                <p className="mb-0">Customer</p>
                              </div>
                            </div>
                            <div className="icon">
                              <img
                                src="assets/img/icon/quate-icon.svg"
                                alt="icon"
                              />
                            </div>
                          </div>
                          <div className="box-content">
                            <p>
                              The impact of consulting services was evident in
                              the measurable results we achieved. Our
                              organization is now better positioned for success,
                              and our team is equipped with the knowledge and
                              tools needed to navigate future challenges.
                            </p>
                          </div>
                          <div className="ratings">
                            <ul className="d-flex list-unstyle p-0">
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                              <li>
                                <i className="ri-star-fill" />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="owl-nav">
                    <button
                      type="button"
                      role="presentation"
                      className="owl-prev"
                      fdprocessedid="2r6olf"
                    >
                      <div className="benefits-next">
                        <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                      </div>
                    </button>
                    <button
                      type="button"
                      role="presentation"
                      className="owl-next"
                      fdprocessedid="cry6e"
                    >
                      <div className="benefits-prev">
                        <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                      </div>
                    </button>
                  </div>
                  <div className="owl-dots disabled" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section End */}

      {/* Contributor Section Start */}
      <div className="contributor-section pb-100">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-6">
                <div className="contributor-content position-relative box-shadow-2">
                  <span>Top Teacher</span>
                  <h3>Free Online Courses From School To Education</h3>
                  <p>
                    Free online courses have significantly transformed the
                    landscape of education,
                  </p>
                  <a
                    href="instructor.html"
                    className="btn style-one box-shadow-1"
                  >
                    Become A Instructor{" "}
                    <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                  </a>
                  <div className="shape" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contributor-content style-two position-relative box-shadow-2">
                  <span>Top Teacher</span>
                  <h3>Online Courses From History.</h3>
                  <p>
                    Free online courses have significantly <br /> transformed
                    the landscape of education,
                  </p>
                  <a
                    href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr"
                    className="btn style-one popup-youtube paly box-shadow-1"
                  >
                    <i className="ri-play-fill" />
                  </a>
                  <div className="shape-image">
                    <img src="assets/img/all-img/shape-img.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contributor Section End */}

      {/* Video Section Start */}
      <div className="video-section">
        <div className="container">
          <div className="main-max-width">
            <div className="play">
              <a
                className="btn style-one popup-youtube"
                href="https://youtu.be/LlCwHnp3kL4?si=jZCEB5Ge_effUhpr"
              >
                <i className="ri-play-fill" /> Watch Our Video
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Video Section End */}

      {/* Score Area Start */}
      <div className="score-area">
        <div className="container">
          <div className="main-max-width">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-yl-clr">
                    <img src="assets/img/icon/counter-icon-1.svg" alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">15525</div>
                    <p>Happy Student</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-rd-clr">
                    <img src="assets/img/icon/counter-icon-1.svg" alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">586</div>
                    <p>Good Comment</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-gr-clr">
                    <img src="assets/img/icon/counter-icon-1.svg" alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">35200</div>
                    <p>Services Download</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="counter-box">
                  <div className="icon icon-pr-clr">
                    <img src="assets/img/icon/counter-icon-1.svg" alt="image" />
                  </div>
                  <div className="content">
                    <div className="count">55</div>
                    <p>Best Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Score Area End */}

      {/* Blog Section Start */}
      <div className="blog-section pb-75">
        <div className="container">
          <div className="main-max-width">
            <div className="section-title mb-50">
              <div className="row">
                <div className="col-lg-7 col-sm-7">
                  <div className="content">
                    <h4 className="sub-title mb-25"># Blog</h4>
                    <h2 className="mb-0 fs-35">Latest News &amp; Articles</h2>
                  </div>
                </div>
                <div className="col-lg-5 col-sm-5">
                  <div className="section-btn text-end">
                    <a href="blog.html" className="btn style-one box-shadow-1">
                      View All{" "}
                      <img src="assets/img/icon/long-arrow.svg" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                        Business modeless and pricing strategies are essential.
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
                        Business modeless and pricing strategies are essential.
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
                        Business modeless and pricing strategies are essential.
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
        </div>
      </div>
      {/* Blog Section End */}

      {/* Subscribe Section Start */}
      <div className="subscribe-area position-relative z-1">
        <div className="container">
          <div className="main-max-width">
            <div className="subscribe-info">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="content">
                    <h3 className="fs-20 mb-20">
                      Sign up to get The Latest Updates
                    </h3>
                    <p>
                      Our approach to it is unique around how to work and how to
                      get hands-on with you like
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form className="subscribe-from d-flex align-items-center">
                    <input
                      className="from-control"
                      type="email"
                      placeholder="type your email address"
                      required=""
                    />
                    <button className="btn style-one" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Subscribe Section End */}

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
                        <img src="assets/img/logo/white-logo.svg" alt="image" />
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
                        <a href="instructor-details.html">Meet Your Experts</a>
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
    </div>
  );
}

export default Index;
