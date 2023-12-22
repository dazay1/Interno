import React from "react";
import arrowRight from "../../img/arrow-right.svg";
import "./plan.css";
function PlanBig() {
  return (
    <section className="plan">
      <div className="container">
        <div className="plan__lists">
          <ul className="plan__list-big">
            <li className="plan__item-big">
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
            <li className="plan__item-big">
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
            <li className="plan__item-big">
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
            <li className="plan__item-big">
              <h5 className="plan__item-title">2d/3d Art Work</h5>
              <p className="plan__item-text">
                There are many variations of the passages of lorem Ipsum from
                available, majority.
              </p>
              <a href="/serviceSingle">
                Read More
                <img src={arrowRight} className="arrow" alt="" />
              </a>
            </li>
            <li className="plan__item-big">
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
            <li className="plan__item-big">
              <h5 className="plan__item-title">Decoration Work</h5>
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
      </div>
    </section>
  );
}

export default PlanBig;
