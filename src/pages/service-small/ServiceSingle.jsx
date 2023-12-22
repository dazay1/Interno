import React, { useState, useRef } from "react";
import "./serviceSingle.css";
import BgImage from "../../components/bgImage/bgImage";
import serviceSingle from "../../img/serviceSingle.jpg";
import List from "../../components/iconList/List";
import video from "../../img/video.mp4";
import like from "../../img/like.jpg";
import { FaPlay } from "react-icons/fa";
import Experience from "../../components/experience/Experience";
import arrowRight from "../../img/arrow-right.svg";

function ServiceSingle() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setShowVideo(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handleVideoEnded = () => {
    setShowVideo(false);
  };

  return (
    <>
      <BgImage
        img={serviceSingle}
        title="Service Single"
        link="serviceSingle"
        text="Service Single"
      />
      <section className="info">
        <div className="container">
          <div className="info-box">
            <h3 className="info-box__title">
              We set the trends of modern living Services.
            </h3>
            <div className="info-box__texts">
              <p className="info-box__text-orange">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page
              </p>
              <p className="info-box__text">
                when lookings at its layouts the points spriof using that it has
                a more less normal.A wonderful serenity has taken pgossession of
                my entire soul, like thesce sweet morndsings of sphring which I
                enjoy with my forwhole heart. I am alone, and feel the charm of
                excgistence in this spot, which was created for the bliss of
                souls like mine.
              </p>
              <p className="info-box__text">
                when lookings at its layouts the points spriof using that it has
                a more less normal.A wonderful serenity has taken pgossession of
                my entire soul, like thesce sweet morndsings of sphring which I
                enjoy with my forwhole heart. I am alone, and feel the charm of
                excgistence in this spot, which was created for the bliss of
                souls like mine.
              </p>
            </div>
          </div>
          <List />
        </div>
      </section>
      <section className="video">
        <div className="container">
          <div className="video-box">
            <div>
              {showVideo ? (
                <div className="video-container">
                  <video
                    ref={videoRef}
                    src={video}
                    controls
                    autoPlay
                    onEnded={handleVideoEnded}
                    className="video__mp4"
                  />
                  {/* <button  onClick={handlePauseVideo}><CiPause1 /></button> */}
                </div>
              ) : (
                <div className="video-box__container">
                  {/* <img src='' alt="" /> */}
                  <div className="video-box__img">
                    <button
                      className="video-box__button"
                      onClick={handlePlayVideo}
                    >
                      <FaPlay />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="idea">
        <div className="container">
          <div className="idea-box">
            <div className="idea-box__list">
              <h3 className="idea-box__list_title">Use of Interior</h3>
              <ul className="idea-box__list_link">
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">1</p>
                  <p className="idea-box__list_link-item__text">
                    We provide high quality design services
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">2</p>
                  <p className="idea-box__list_link-item__text">
                    Project on time and Latest Design
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">3</p>
                  <p className="idea-box__list_link-item__text">
                    Scientific Skills For getting a better result
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">4</p>
                  <p className="idea-box__list_link-item__text">
                    Renovations Benefit of Services
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">5</p>
                  <p className="idea-box__list_link-item__text">
                    We are confident about our projects
                  </p>
                </li>
              </ul>
            </div>
            <div className="idea-box__list_line"></div>
            <div className="idea-box__list">
              <h3 className="idea-box__list_title">Make An Art</h3>
              <ul className="idea-box__list_link">
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">1</p>
                  <p className="idea-box__list_link-item__text">
                    We provide high quality design services
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">2</p>
                  <p className="idea-box__list_link-item__text">
                    Project on time and Latest Design
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">3</p>
                  <p className="idea-box__list_link-item__text">
                    Scientific Skills For getting a better result
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">4</p>
                  <p className="idea-box__list_link-item__text">
                    Renovations Benefit of Services
                  </p>
                </li>
                <li className="idea-box__list_link-item">
                  <p className="idea-box__list_link-item__number">5</p>
                  <p className="idea-box__list_link-item__text">
                    We are confident about our projects
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="like">
        <div className="container">
          <div className="like-box">
            <img className="like-box__img" src={like} alt="" />
            <div className="like-box__info">
              <h3 className="like-box__info_title">
                We love design.That's how we got here.
              </h3>
              <p className="like-box__info_text">
                It is a long established fact that a reader will be distracted
                by the of readable content .
              </p>
              <a href="/about">
                <button className="like-box__info_button">
                  Our Portfolio <img className="arrow" src={arrowRight} alt="" />
                </button>
              </a>
            </div>
          </div>
          <Experience />
        </div>
      </section>
    </>
  );
}

export default ServiceSingle;
