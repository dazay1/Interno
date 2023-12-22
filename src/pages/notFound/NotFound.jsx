import React from "react";
import "./notFound.css";
import arrowRight from "../../img/arrow-right.svg";
import notFound from "../../img/notFound.jpg";
function NotFound() {
  return (
    <div className="find">
      <div className="container">
        <div className="find-box">
          <div className="find-box__info">
            <h3 className="find-box__info_title">404</h3>
            <p className="find-box__info_text">
              We are sorry, but the page you requested was not found
            </p>
            <a href="/">
              <button className="find-box__info_button">
                Back to home <img src={arrowRight} alt="" />{" "}
              </button>
            </a>
          </div>
          <div className="find-box__img">
            <img className="find-box__img_img" src={notFound} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
