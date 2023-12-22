import React from "react";
import "./experience.css";
function Experience() {
  return (
    <div className="experience">
      <div className="container">
        <ul className="experience__list">
          <li className="experience__item">
            <div className="experience__link">
              <h5 className="experience__number">12</h5>
              <p className="experience__text">Years Of Experiance</p>
            </div>
          </li>
          <li className="experience__item">
            <div className="experience__link">
              <h5 className="experience__number">85</h5>
              <p className="experience__text">Success Project</p>
            </div>
          </li>
          <li className="experience__item">
            <div className="experience__link">
              <h5 className="experience__number">15</h5>
              <p className="experience__text">Active Project</p>
            </div>
          </li>
          <li className="experience__item-4">
            <div className="experience__link">
              <h5 className="experience__number">95</h5>
              <p className="experience__text">Happy CUstomers</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
