import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillAlt, faHistory } from "@fortawesome/free-solid-svg-icons";
import "../css/BankPayment.css";

export default function BankPayment() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentForm, setCurrentForm] = useState(1); // Initialize with pending payments
  const [selectedMonths, setSelectedMonths] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    // Load data related to pending payments when component mounts
    // Your code to fetch pending payment data goes here
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Function to handle click on Pending Payment card
  const handlePendingPaymentClick = () => {
    setCurrentForm(1); // Set current form to Form 1 (Pending Payment)
  };

  // Function to handle click on Past Payment card
  const handlePastPaymentClick = () => {
    setCurrentForm(2); // Set current form to Form 2 (Past Payment)
  };

  const handleCheckboxChange = (month, isChecked, price) => {
    if (isChecked) {
      setSelectedMonths([...selectedMonths, month]);
      setTotalPayment(totalPayment + price);
    } else {
      setSelectedMonths(selectedMonths.filter(selectedMonth => selectedMonth !== month));
      setTotalPayment(totalPayment - price);
    }
  };

  const getMonthName = (index) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return months[index];
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
              

              {/* sidebar-wrapper  */}
              <main className="page-content" style={{ background: "#f2f2f2" }}>
                <div className="container-fluid">
                  <h2>Bank Payment</h2>
                  <hr />

                  <div className="row">
                    <div className="card" style={{ height: "auto" }}>
                      <div className="d-flex fs-4">
                        <div
                          className="card p-4 mt-3 payment-card"
                          style={{ width: "250px", cursor: "pointer" }}
                          onClick={handlePendingPaymentClick} // Add onClick event listener
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
                          style={{
                            width: "250px",
                            marginLeft: "20px",
                            cursor: "pointer",
                          }}
                          onClick={handlePastPaymentClick} // Add onClick event listener
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
                        {/* Render Form 1 if currentForm is 1 */}
                        {currentForm === 1 && (
                       <div className="wizard-form card p-4 mt-3 mb-4" style={{ height: "auto" }}>
                       <form>
                         {/* Form 1 content */}
                         <div className="p-3">
                           {/* First row: January to April */}
                           <div className="d-flex justify-content-between mb-3">
                             {[...Array(4).keys()].map((monthIndex) => (
                               <div key={monthIndex} className="card" style={{ height: "100px", width: "250px" }}>
                                 <div className="p-3">
                                   <div className="fs-5">
                                     <input
                                       className=""
                                       type="checkbox"
                                       style={{ marginTop: "10px", width: "20px", height: "20px" }}
                                       onChange={(e) => handleCheckboxChange(getMonthName(monthIndex), e.target.checked, 28)}
                                     />
                                     <label style={{ marginLeft: "20px", fontSize: "20px" }}>{getMonthName(monthIndex)}</label>
                                     <div className="d-flex justify-content-between">
                                       <label style={{ fontSize: "15px" }}>2 Child Package</label>
                                       <label style={{ marginTop: "-4px" }}>€28</label>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             ))}
                           </div>
                           {/* Second row: May to August */}
                           <div className="d-flex justify-content-between mb-3">
                             {[...Array(4).keys()].map((monthIndex) => (
                               <div key={monthIndex + 4} className="card" style={{ height: "100px", width: "250px" }}>
                                 <div className="p-3">
                                   <div className="fs-5">
                                     <input
                                       className=""
                                       type="checkbox"
                                       style={{ marginTop: "10px", width: "20px", height: "20px" }}
                                       onChange={(e) => handleCheckboxChange(getMonthName(monthIndex + 4), e.target.checked, 28)}
                                     />
                                     <label style={{ marginLeft: "20px", fontSize: "20px" }}>{getMonthName(monthIndex + 4)}</label>
                                     <div className="d-flex justify-content-between">
                                       <label style={{ fontSize: "15px" }}>2 Child Package</label>
                                       <label style={{ marginTop: "-4px" }}>€28</label>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             ))}
                           </div>
                           {/* Third row: September to December */}
                           <div className="d-flex justify-content-between mb-3">
                             {[...Array(4).keys()].map((monthIndex) => (
                               <div key={monthIndex + 8} className="card" style={{ height: "100px", width: "250px" }}>
                                 <div className="p-3">
                                   <div className="fs-5">
                                     <input
                                       className=""
                                       type="checkbox"
                                       style={{ marginTop: "10px", width: "20px", height: "20px" }}
                                       onChange={(e) => handleCheckboxChange(getMonthName(monthIndex + 8), e.target.checked, 28)}
                                     />
                                     <label style={{ marginLeft: "20px", fontSize: "20px" }}>{getMonthName(monthIndex + 8)}</label>
                                     <div className="d-flex justify-content-between">
                                       <label style={{ fontSize: "15px" }}>2 Child Package</label>
                                       <label style={{ marginTop: "-4px" }}>€28</label>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             ))}
                           </div>
                         </div>
                         {/* Form 1 elements */}
                         {/* Add your form 1 content here */}
                         {/* Back button to go back to card selection */}
                       </form>
                       <div className="mt-1" style={{ height: "100px" }}>
                         <label className="fs-3">Your Payment : {totalPayment} €</label>
                       </div>

                       <div>
  <div className="d-flex">
    <span
      className=""
      style={{ color: "red", fontSize: "40px" }}
    >
      *
    </span>
    <label
      for="formFileLg"
      className="form-label"
      style={{
        marginTop: "14px",
        marginLeft: "10px",
        fontSize: "15px",
      }}
    >
      Add your bank slip here
    </label>
  </div>

  <input
    class="form-control form-control-lg"
    id="formFileLg"
    type="file"
    style={{ marginTop: "-10px" }}
  />
</div>

<div>
  <div className="d-flex" style={{marginTop:"40px"}}>
    <span
      className=""
      style={{ color: "red", fontSize: "40px" }}
    >
      *
    </span>
    <label
      for="formFileLg"
      className="form-label"
      style={{
        marginTop: "14px",
        marginLeft: "10px",
        fontSize: "15px",
      }}
    >
      Bank details
    </label>
  </div>
  <div className="mt-2 d-flex">
    <div
      className="card"
      style={{ height: "180px", width: "350px" }}
    >
      <div className="p-3">
        <div>
        <label>Account Holder Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>N.A.A.T. Samaranayake</label>
        </div>

        <div>
        <label>Bank Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>BOC</label>
        </div>

        <div>
        <label>Account Number </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>2005823659712</label>
        </div>

        <div>
        <label>Branch Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>Nittambuwa</label>
        </div>

        <div>
        <label>Bank Code </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>114</label>
        </div>

       
      </div>
    </div>

    <div
      className="card"
      style={{ height: "180px", width: "350px",marginLeft:"20px" }}
    >
      <div className="p-3">
        <div>
        <label>Account Holder Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>N.A.A.T. Samaranayake</label>
        </div>

        <div>
        <label>Bank Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>BOC</label>
        </div>

        <div>
        <label>Account Number </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>2005823659712</label>
        </div>

        <div>
        <label>Branch Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>Nittambuwa</label>
        </div>

        <div>
        <label>Bank Code </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>114</label>
        </div>

       
      </div>
    </div>

    <div
      className="card"
      style={{ height: "180px", width: "350px",marginLeft:"20px" }}
    >
      <div className="p-3">
        <div>
        <label>Account Holder Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>N.A.A.T. Samaranayake</label>
        </div>

        <div>
        <label>Bank Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>BOC</label>
        </div>

        <div>
        <label>Account Number </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>2005823659712</label>
        </div>

        <div>
        <label>Branch Name </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>Nittambuwa</label>
        </div>

        <div>
        <label>Bank Code </label>
        <label className="" style={{marginLeft:"10px"}}>:</label>
        <label className="" style={{marginLeft:"10px"}}>114</label>
        </div>

       
      </div>
    </div>
  </div>
  </div>
                     </div>
                        )}

                        {/* Render Form 2 if currentForm is 2 */}
                        {currentForm === 2 && (
                          <div
                            className="wizard-form card p-4 mt-3 mb-4"
                            style={{ height: "auto" }}
                          >
                            {/* Form 2 content */}
                            <form>
                              <h1>this is form 2</h1>
                              {/* Form 2 elements */}
                              {/* Add your form 2 content here */}
                              {/* Back button to go back to card selection */}
                            </form>
                          </div>
                        )}
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
