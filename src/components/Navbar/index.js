import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      {/* eslint-disable-next-line */}
      <a className="navbar-title" href="#">
        <h2>Employee Directory</h2>
      </a>
    </nav>
  );
}

export default Navbar;