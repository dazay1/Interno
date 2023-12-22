import React from "react";
import "./gallery.css";
import arrow from "../../img/arrow.svg";
import project1 from "../../img/project-1.png";
import project2 from "../../img/project-2.png";
import project3 from "../../img/project-3.png";
import project4 from "../../img/project-4.png";
import project5 from "../../img/project-5.png";
import project6 from "../../img/project-6.png";
import project7 from "../../img/project-7.png";
import project8 from "../../img/project-8.png";
function Gallery() {
  return (
    <>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project1} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">Minimal Bedroom</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project2} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">Minimal Bedroom</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project3} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">Classic Minimal Bedroom</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project4} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">Modern Bedroom</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project5} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">Minimal Bedroom table</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project6} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">System table</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project7} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">Modern Bedroom</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
      <li className="project__item">
        <a href="/project" className="project__item_link">
          <img src={project8} alt="images" />
          <div className="project__item_box">
            <div className="project__item_box-info">
              <h3 className="project__item_box-info__title">Modern Bedroom</h3>
              <p className="project__item_box-info__text">
                Decor / Artchitecture
              </p>
            </div>
            <div className="project__item_box-img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default Gallery;
