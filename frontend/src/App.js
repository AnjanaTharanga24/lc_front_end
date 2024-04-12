import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./pages/Index";
import Listening from "./pages/Listening";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import Reading from "./pages/Reading";
import Register from "./pages/Register";


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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
