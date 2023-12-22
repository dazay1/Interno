import React, { useState } from "react";
import blogSmall from "../../img/blog-small.jpg";
import "./blogSmall.css";
import small1 from "../../img/small-1.png";
import small2 from "../../img/small-2.png";
import arrowBrown from "../../img/arrow-brown.svg";
import searchBrown from "../../img/search-brown.svg";
import facebook from "../../img/facebook.svg";
import twitter from "../../img/twitter.svg";
import linkedin from "../../img/linkedin.svg";
import instagram from "../../img/instagram.svg";
function BlogSmall() {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <img className="blog-small" src={blogSmall} alt="" />
      <section className="small">
        <div className="container">
          <div className="small-box">
            <div className="small-box__info-information">
              <div className="container-fluid">
                <div className="small-box__info">
                  <h3 className="small-box__info_title">
                    Let’s Get Solution for Building Construction Work
                  </h3>
                  <img className="small-box__info_img" src={small1} alt="" />
                  <div className="small-box__info_list">
                    <p className="small-box__info_number">26 December,2022 </p>
                    <a href="/blogSmall">Interior / Design / Home / Decore</a>
                  </div>
                  <p className="small-box__info_text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by
                    injecthumour, or randomised words which don't look even
                    slightly believable.
                  </p>
                  <p className="small-box__info_text">
                    Embarrassing hidden in the middle of text. All the Lorem
                    Ipsum generators on the Internet tend to repeat predefined
                    chunks as necessary.
                  </p>
                  <div className="small-box__info_italic">
                    <img
                      className="small-box__info_italic-img"
                      src={arrowBrown}
                      alt=""
                    />
                    <p className="small-box__info_italic-text">
                      The details are not the details. They make the design.
                    </p>
                  </div>
                  <h3 className="small-box__info_title">
                    Design sprints are great
                  </h3>
                  <p className="small-box__info_text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered.
                  </p>
                  <ul className="small-box__info_lists">
                    <li className="small-box__info_item">
                      <p className="small-box__info_item-number">1</p>
                      <p className="small-box__info_item-text">
                        Contrary to popular belief.There are many variations of
                        passages of Lorem Ipsum available, but the majority have
                        suffered.
                      </p>
                    </li>
                    <li className="small-box__info_item">
                      <p className="small-box__info_item-number">2</p>
                      <p className="small-box__info_item-text">
                        Contrary to popular belief.There are many variations of
                        passages of Lorem Ipsum available, but the majority have
                        suffered.
                      </p>
                    </li>
                    <li className="small-box__info_item">
                      <p className="small-box__info_item-number">3</p>
                      <p className="small-box__info_item-text">
                        Contrary to popular belief.There are many variations of
                        passages of Lorem Ipsum available, but the majority have
                        suffered.
                      </p>
                    </li>
                  </ul>
                  <img className="small-box__info_img" src={small2} alt="" />
                  <p className="small-box__info_text">
                    Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are
                    many variations of passages of Lorem Ipsum available, but
                    the majority have suffered.
                  </p>
                  <div className="small-box__info_list">
                    <div className="small-box__info_list-box">
                      <h3 className="small-box__info_list-box__title">Tags</h3>
                      <button
                        className={
                          isClicked
                            ? "small-box__info_list-box__button"
                            : "small-box__info_list-box__button-brown"
                        }
                        onClick={handleClick}
                      >
                        Kitchan
                      </button>
                      <button
                        className={
                          isClicked
                            ? "small-box__info_list-box__button"
                            : "small-box__info_list-box__button-brown"
                        }
                        onClick={handleClick}
                      >
                        Bedroom
                      </button>
                    </div>
                    <ul className="small__information-list">
                      <li className="small__information-item">
                        <img src={facebook} alt="" />
                      </li>
                      <li className="small__information-item">
                        <img src={twitter} alt="" />
                      </li>
                      <li className="small__information-item">
                        <img src={linkedin} alt="" />
                      </li>
                      <li className="small__information-item">
                        <img src={instagram} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="small-box__search">
                <div className="small-box__search_input">
                  <input
                    className="small-box__search_input"
                    placeholder="Search"
                  />
                  <img className="arrow" src={searchBrown} alt="" />
                </div>
                <h3 className="small-box__search_title">Latest News</h3>
                <div className="small-box__search_text">
                  <h3 className="small-box__search_text-title">
                    We Focus On Comfort And Gorgeous
                  </h3>
                  <p className="small-box__search_text-number">06/02/2020</p>
                </div>
                <div className="small-box__search_text">
                  <h3 className="small-box__search_text-title">
                    We Focus On Comfort And Gorgeous
                  </h3>
                  <p className="small-box__search_text-number">06/02/2020</p>
                </div>
                <div className="small-box__search_text">
                  <h3 className="small-box__search_text-title">
                    We Focus On Comfort And Gorgeous
                  </h3>
                  <p className="small-box__search_text-number">06/02/2020</p>
                </div>
                <div className="small-box__search_category">
                  <h3 className="small-box__search_category-title">
                    Categories
                  </h3>
                  <p className="small-box__search_category-info__title">
                    Decoration
                  </p>
                  <p className="small-box__search_category-info__title">
                    Door Windows
                  </p>
                  <p className="small-box__search_category-info__title">
                    Home Land
                  </p>
                  <p className="small-box__search_category-info__title">
                    Roof Installation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSmall;
