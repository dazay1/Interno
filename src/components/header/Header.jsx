import React, { useState } from "react";
import "./header.css";
import logo from "../../img/Logo.svg";
import search from "../../img/search.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="/" className="nav__logo">
            <img src={logo} alt="" />
          </a>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/">Home</a>
            </li>
            <li className="nav__item">
              <a href="/team">Team</a>
            </li>
            <li className="nav__item">
              <a href="/services">Services</a>
            </li>
            <li className="nav__item">
              <a href="/project">Project</a>
            </li>
            <li className="nav__item">
              <a href="/blog">Blog</a>
            </li>
            <li className="nav__item">
              <a href="/contact">Contact</a>
            </li>
            <li className="nav__item">
              <a href="/">
                <img className="nav__item-img" src={search} alt="" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            {toggleMenu ? (
              <RiCloseLine className="close"   size={35} onClick={() => setToggleMenu(false)} />
            ) : (
              <RiMenu3Line  className="open" size={35} onClick={() => setToggleMenu(true)} />
            )}
            {toggleMenu && (
              <ul className={toggleMenu ? "menu-open" : "menu-closed"}>
                <li className="nav__item">
                  <a href="/">Home</a>
                </li>
                <li className="nav__item">
                  <a href="/team">Team</a>
                </li>
                <li className="nav__item">
                  <a href="/services">Services</a>
                </li>
                <li className="nav__item">
                  <a href="/project">Project</a>
                </li>
                <li className="nav__item">
                  <a href="/blog">Blog</a>
                </li>
                <li className="nav__item">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
