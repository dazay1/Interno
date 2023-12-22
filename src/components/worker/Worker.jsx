import React from "react";
import "./worker.css";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import linkedin from "../../img/linkedin.svg";
import instagram from "../../img/instagram.svg";
function Worker({imageUrl, title}) {
  return (
    <div className="worker">
      <img className="worker-img" src={imageUrl} alt="" />
      <div className="worker-info">
        <h4 className="worker-info__title">{title}</h4>
        <p className="worker-info__text">Design, Australia</p>
        <ul className="worker-info__list">
          <li className="worker-info__item">
            <img src={facebook} alt="" />
          </li>
          <li className="worker-info__item">
            <img src={twitter} alt="" />
          </li>
          <li className="worker-info__item">
            <img src={linkedin} alt="" />
          </li>
          <li className="worker-info__item">
            <img src={instagram} alt="" />
          </li>
        </ul>
        <p className="worker-info__phone">+1 (378) 400-1234</p>
        <p className="worker-info__address">julie@email.com</p>
      </div>
    </div>
  );
}

export default Worker;
