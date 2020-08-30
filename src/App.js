import React from "react";
//import PropTypes from "prop-types";

import "./sb-admin-2.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Sidebar from "./components/Sidebar/Sidebar";
import TopBar from "./components/TopBar/TopBar";

import useToggle from "./hooks/useToggle";

function App() {
  const [toggle, setToggle] = useToggle();
  return (
    <>
      <div id="wrapper">
        <Sidebar toggle={toggle} handleSidebarToggle={setToggle} />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar handleSidebarToggle={setToggle} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
