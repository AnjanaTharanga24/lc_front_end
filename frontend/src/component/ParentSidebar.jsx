import React, { useState, useEffect, useRef } from 'react';

export default function ParentSidebar({ sidebarOpen, toggleSidebar, closeSidebar, sidebarRef }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const sidebarWrapperRef = useRef(null);

  useEffect(() => {
    sidebarRef.current = sidebarWrapperRef.current;
  }, [sidebarRef]);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div
      className={`sidebar-wrapper ${sidebarOpen ? 'toggled' : ''}`}
      ref={sidebarWrapperRef}
    >
      <a
        id="show-sidebar"
        className={`btn btn-sm btn-dark ${sidebarOpen ? 'toggled' : ''}`}
        href="#"
        onClick={toggleSidebar}
      >
        <i className="fas fa-bars" />
      </a>
      <nav id="sidebar" className={`sidebar-wrapper ${sidebarOpen ? 'toggled' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <img
              className="logo-light"
              src="assets/img/logo/ls.png"
              alt="logo"
              style={{ width: "200px" }}
            />
            <div id="close-sidebar" onClick={closeSidebar} style={{ marginLeft: "10px" }}>
              <i className="fas fa-times" />
            </div>
          </div>
          {/* Sidebar content */}
          <div className="sidebar-menu" style={{ fontSize: "17px" }}>
            {/* Sidebar menu items */}
          </div>
        </div>
        {/* sidebar-content */}
        <div className="sidebar-footer">
          {/* Sidebar footer content */}
        </div>
      </nav>
    </div>
  );
}