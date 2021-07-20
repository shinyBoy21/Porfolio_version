import React, { useState, useEffect } from "react";
import "./Header.scss";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleMediaQueryChange = () => {
      if (mediaQuery.matches) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    const mediaQuery = window.matchMedia("(max-width:700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  return (
    <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <h3 className="fromLeft">
            <NavLink exact className="menu" activeClassName="active" to="/">
              Home
            </NavLink>
          </h3>
          <h3 className="fromLeft">
            <NavLink className="menu" activeClassName="active" to="/about me">
              About me
            </NavLink>
          </h3>
          <h3 className="fromLeft">
            <NavLink className="menu" activeClassName="active" to="services">
              Services
            </NavLink>
          </h3>
          <h3 className="fromLeft">
            <NavLink className="menu" activeClassName="active" to="projects">
              Projects
            </NavLink>
          </h3>
          <h3 className="fromLeft">
            <NavLink className="menu" activeClassName="active" to="contacts">
              Contacts
            </NavLink>
          </h3>
        </nav>
      </CSSTransition>

      <div className="Burger" onClick={toggleNav}>
        <i
          onClick={handleClick}
          className={click ? "fas fa-times" : "fas fa-bars"}
        ></i>
      </div>
    </header>
  );
};

export default Header;
