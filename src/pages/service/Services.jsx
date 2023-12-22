import React from "react";
import BgImage from "../../components/bgImage/bgImage";
import "./service.css";
import PlanBig from "../../components/plan/PlanBig";
import Join from "../../components/join/Join";
import service from "../../img/service.jpg";
import details1 from "../../img/details-1.png";
import details2 from "../../img/details-2.png";
import details3 from "../../img/details-3.png";
import details4 from "../../img/details-4.png";
import icon1 from "../../img/details-icon1.svg";
import icon2 from "../../img/details-icon2.svg";
import icon3 from "../../img/details-icon3.svg";
import icon4 from "../../img/details-icon4.svg";
function Services() {
  return (
    <>
      <BgImage img={service} title="Services" link="services" text="Services" />
      <PlanBig />
      <section className="details">
        <div className="container">
          <div className="details-box">
            <div className="details-box__info">
              <h3 className="details-box__info_title">How We Work</h3>
              <p className="details-box__info_text">
                It is a long established fact will be distracted.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <ul className="details-list">
              <li className="details-item">
                <img src={details1} alt="" />
                <div className="details-item__info">
                  <div className="details-item__info-img">
                    <img src={icon1} alt="" />
                    <h4 className="details-item__info-img_number">01</h4>
                  </div>
                  <div className="details-item__img">
                    <h4 className="details-item__info-title">
                      Concept & Details
                    </h4>
                    <p className="details-item__info-text">
                      It is a long established fact will be distracted. Lorem
                      Ipsum is simply dummy from text of the and typesetting
                      indufstry.
                    </p>
                  </div>
                </div>
              </li>
              <li className="details-item">
                <div className="details-item__info">
                  <div className="details-item__info-img">
                    <img src={icon2} alt="" />
                    <h4 className="details-item__info-img_number">02</h4>
                  </div>
                  <div className="details-item__img">
                    <h4 className="details-item__info-title">Idea for Work</h4>
                    <p className="details-item__info-text">
                      It is a long established fact will be distracted. Lorem
                      Ipsum is simply dummy from text of the and typesetting
                      indufstry.
                    </p>
                  </div>
                </div>
                <img src={details2} alt="" />
              </li>
              <li className="details-item">
                <img src={details3} alt="" />
                <div className="details-item__info">
                  <div className="details-item__info-img">
                    <img src={icon3} alt="" />
                    <h4 className="details-item__info-img_number">03</h4>
                  </div>
                  <div className="details-item__img">
                    <h4 className="details-item__info-title">Design</h4>
                    <p className="details-item__info-text">
                      It is a long established fact will be distracted. Lorem
                      Ipsum is simply dummy from text of the and typesetting
                      indufstry.
                    </p>
                  </div>
                </div>
              </li>
              <li className="details-item">
                <div className="details-item__info">
                  <div className="details-item__info-img">
                    <img src={icon4} alt="" />
                    <h4 className="details-item__info-img_number">04</h4>
                  </div>
                  <div className="details-item__img">
                    <h4 className="details-item__info-title">Idea for Work</h4>
                    <p className="details-item__info-text">
                      It is a long established fact will be distracted. Lorem
                      Ipsum is simply dummy from text of the and typesetting
                      indufstry.
                    </p>
                  </div>
                </div>
                <img src={details4} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Join />
    </>
  );
}

export default Services;
