import React from "react";
import "./about.css";
import sign from "../../img/sign.svg";
import arrowRight from "../../img/arrow-right.svg";
import work from "../../img/work.png";
import work2 from "../../img/work-2.jpg";
import Worker from "../../components/worker/Worker";
import worker1 from "../../img/worker-1.jpg";
import worker2 from "../../img/worker-2.jpg";
import worker3 from "../../img/worker-3.jpg";
import aboutImage from '../../img/about.jpg'
import BgImage from "../../components/bgImage/bgImage";

function About() {
  return (
    <>
      <BgImage img={aboutImage} title='About Us' link='about' text='About Us' />
      <section className="fact">
        <div className="container">
          <div className="fact__inner">
            <img src={sign} alt="" />
            <h6 className="fact__title">
              I like an interior that defies labeling. I don't really want
              someone to walk into a room and know that I did it
            </h6>
            <p className="fact__people">BUNNY WILLIAMS</p>
          </div>
        </div>
      </section>
      <section className="work">
        <div className="container">
          <div className="work__box">
            <div className="work__info">
              <h3 className="work__info-title">What We Do</h3>
              <p className="work__info-text">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <button className="work__info-button">
                <a href="/about">Our Concept</a>{" "}
                <img className="arrow" src={arrowRight} alt="" />
              </button>
            </div>
            <img className="work__info-img" src={work} alt="" />
          </div>
          <div className="work__box-2">
            <img className="work__info-img" src={work2} alt="" />
            <div className="work__info">
              <h3 className="work__info-title">The End Result</h3>
              <p className="work__info-text">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <button className="work__info-button">
                <a href="/about">Our Portfolio</a>{" "}
                <img className="arrow" src={arrowRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mind">
        <div className="container">
          <div className="mind__info">
            <h3 className="mind__info-title">What the People Thinks</h3>
            <h3 className="mind__info-title">About Us</h3>
          </div>
          <div className="mind__list">
            <div className="mind__item-1">
              <Worker imageUrl={worker1} title="Charlotte Levi" />
            </div>
            <div className="mind__item-2">
              <Worker imageUrl={worker2} title="Nattasha Julie" />
            </div>
            <div className="mind__item-3">
              <Worker imageUrl={worker3} title="Nora Owen" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
