import React from "react";
import "./footer.css";
import logo from "../../img/Logo.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import linkedin from "../../img/linkedin.svg";
import instagram from "../../img/instagram.svg";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__information">
            <a href="/" className="footer__logo">
              <img src={logo} alt="" />
            </a>
            <p className="footer__information-text">
              It is a long established fact that a reader will be distracted
              lookings.
            </p>
            <ul className="footer__information-list">
              <li className="footer__information-item">
                <img src={facebook} alt="" />
              </li>
              <li className="footer__information-item">
                <img src={twitter} alt="" />
              </li>
              <li className="footer__information-item">
                <img src={linkedin} alt="" />
              </li>
              <li className="footer__information-item">
                <img src={instagram} alt="" />
              </li>
            </ul>
          </div>
          <div className="footer__list">
            <div>
              <h3 className="footer__title">Pages</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <a href="/about" className="footer__link">
                    About Us
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/project" className="footer__link">
                    Our Projects
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/team" className="footer__link">
                    Our Team
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/contact" className="footer__link">
                    Contact Us
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/services" className="footer__link">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <h3 className="footer__title">Services</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <a href="/blogSmall" className="footer__link">
                    Kitchan
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/blogSmall" className="footer__link">
                    Living Area
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/blogSmall" className="footer__link">
                    Bathroom
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/blogSmall" className="footer__link">
                    Dinning Hall
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/blogSmall" className="footer__link">
                    Bedroom
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__contact">
              <h3 className="footer__title">Contact</h3>
              <ul className="footer__links">
                <li className="footer__link">
                  <a href="/" className="footer__link">
                    55 East Birchwood Ave. Brooklyn, New York 11201
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/" className="footer__link">
                    contact@interno.com
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/" className="footer__link">
                    (123) 456 - 7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
