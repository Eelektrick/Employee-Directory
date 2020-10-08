import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
        <Navbar /> 
          <Route path="/" component={Index} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;