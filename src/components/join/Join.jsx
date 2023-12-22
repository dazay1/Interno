import React from "react";
import "./join.css";
import arrowRight2 from "../../img/arrow-right-2.svg";

function Join() {
  return (
    <div className="join">
      <div className="container">
        <div className="join__box">
          <h4 className="join__title">Wanna join the interno?</h4>
          <p className="join__text">
            It is a long established fact will be distracted.
          </p>
          <a href="/contact">
            <button className="join__button">
              <a href="/contact">Contact With Us</a>{" "}
              <img className="arrow" src={arrowRight2} alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Join;
