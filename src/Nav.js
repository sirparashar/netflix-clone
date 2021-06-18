import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          onClick={() => history.push("/")}
          className="nav_logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fred-netflix-logo-text-png-3.png&f=1&nofb=1"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7K2jAR0dvTfJaCY6J2KMCAHaHa%26pid%3DApi&f=1"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
