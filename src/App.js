import React from "react"
import './App.css';
import Home from "./components/Home/Home";
import CandidateProfile from "./components/CandidateProfile/CandidateProfile";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CandidateProfile" element={<CandidateProfile />} />
    </Routes>
  </Router>
  )

}

export default App;
