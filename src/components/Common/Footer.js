import React from "react";
// import { BackTop } from 'antd';
//import "./common.css";
import "../Common/common.css";
import "../Home/Views/Views.css";

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <a href="https://www.google.com">Routine Management</a>{" "}
        </div>

        <div className="copyright">copyright &copy; 2021 tech</div>
      </div>
    </div>
  );
}

export default AppFooter;
