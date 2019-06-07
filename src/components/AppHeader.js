import React from "react";
import "../App.css";
import footerimg from "../resources/logo.svg";

function AppHeader() {
  return (
    <div id="appheader">
      <div className="header">
        <img src={footerimg} alt="footerimg" />
        <h3>TrapTrivia</h3>
      </div>
    </div>
  );
}

export default AppHeader;
