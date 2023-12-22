import React, { useEffect } from "react";
import mixitup from "mixitup";
import "./project.css";
import BgImage from "../../components/bgImage/bgImage";
import Gallery from "../../components/gallery/Gallery";
import project from "../../img/project.jpg";

function Project() {
  useEffect(() => {
    const mixer = mixitup(".project__inner", {
      load: {
        filter: ".category-living",
      },
    });
    return () => {
      mixer.destroy();
    };
  }, []);
  return (
    <>
      <BgImage
        img={project}
        title="Our Project"
        link="/project"
        text="Project"
      />
      <div className="project">
        <div className="container">
          <div className="project__buttons">
            <button className="project__btn" data-filter=".category-bedroom">
              Bathroom
            </button>
            <button className="project__btn" data-filter=".category-living">
              Bed Room
            </button>
            <button className="project__btn" data-filter=".category-office">
              Kitchan
            </button>
            <button className="project__btn" data-filter=".category-dining">
              Living area
            </button>
          </div>
          <ul className="project__inner">
            <div className="project__items mix category-bedroom">
              <Gallery />
            </div>
            <div className="project__items mix category-living">
              <Gallery />
            </div>
            <div className="project__items mix category-office">
              <Gallery />
            </div>
            <div className="project__items mix category-dining">
              <Gallery />
            </div>
            <div className="project__items mix category-chair">
              <Gallery />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Project;
