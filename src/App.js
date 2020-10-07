//import React, { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper> 
          <Route exact path="/" component={Index} />
          <Footer />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;