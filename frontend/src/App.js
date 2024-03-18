import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Listening from "./pages/Listening";
import Writing from "./pages/Writing";
import Speaking from "./pages/Speaking";
import Reading from "./pages/Reading";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/listening" element={<Listening/>}/>
        <Route path="/writing" element={<Writing/>}/>
        <Route path="/speaking" element={<Speaking/>}/>
        <Route path="/reading" element={<Reading/>}/>




        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
