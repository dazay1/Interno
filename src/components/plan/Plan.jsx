import React from "react";
import arrowRight from "../../img/arrow-right.svg";
import './plan.css'
function Plan() {
  return (
    <section className="plan">
      <div className="container">
        <ul className="plan__list">
          <li className="plan__item">
            <h5 className="plan__item-title">Project Plan</h5>
            <p className="plan__item-text">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="/serviceSingle">
              Read More
              <img src={arrowRight} className="arrow" alt="" />
            </a>
          </li>
          <li className="plan__item">
            <h5 className="plan__item-title">Interior Work</h5>
            <p className="plan__item-text">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="/serviceSingle">
              Read More
              <img src={arrowRight} className="arrow" alt="" />
            </a>
          </li>
          <li className="plan__item">
            <h5 className="plan__item-title">Realization</h5>
            <p className="plan__item-text">
              There are many variations of the passages of lorem Ipsum from
              available, majority.
            </p>
            <a href="/serviceSingle">
              Read More
              <img src={arrowRight} className="arrow" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Plan;
