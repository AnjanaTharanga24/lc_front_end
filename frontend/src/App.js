import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./pages/Index";
import Listening from "./pages/Listening";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import Reading from "./pages/Reading";
import Register from "./pages/Register";
import Test from "./pages/Test";
import SignIn from "./pages/SignIn";
import New from "./pages/New";
import ParentDashboard from "./pages/ParentDashboard";
import Children from "./pages/Children";
import BankPayment from "./pages/BankPayment";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/listening" element={<Listening/>}/>
        <Route path="/writing" element={<Writing/>}/>
        <Route path="/speaking" element={<Speaking/>}/>
        <Route path="/reading" element={<Reading/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/parent-dashboard" element={ <ParentDashboard />}/>
        <Route path="/children" element={ <Children />}/>
        <Route path="/bank-payment" element={ <BankPayment />}/>


      

        





      </Routes>
    </BrowserRouter>
  );
}

export default App;
