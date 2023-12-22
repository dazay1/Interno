import "./App.css";
import arrowRight from "./img/arrow-right.svg";
import callIcon from "./img/call-icon.svg";
import information from "./img/information.png";
import comments1 from "./img/comments-1.png";
import comments2 from "./img/comments-2.png";
import comments3 from "./img/comments-3.png";
import follow2 from "./img/follow-2.png";
import follow3 from "./img/follow-3.png";
import follow4 from "./img/follow-4.png";
import follow1 from "./img/follow-1.jpg";
import arrow from "./img/arrow.svg";
import List from "./components/iconList/List";
import Plan from "./components/plan/Plan";
import Experience from "./components/experience/Experience";
import Article from "./components/articles/Article";
import article1 from "./img/article-1.png";
import article2 from "./img/article-2.png";
import article3 from "./img/article-3.png";
import Join from "./components/join/Join";

function App() {
  return (
    <>
      <section className="home">
        <div className="container">
          <div className="home__inner">
            <h1 className="home__title">Let Your Home Be Unique</h1>
            <p className="home__text">
              There are many variations of the passages of lorem Ipsum
              fromavailable,variations of the passages.
            </p>
            <button className="home__button button">
              <a href="/">Get Started</a>
              <img className="arrow" src={arrowRight} alt="icon" />
            </button>
          </div>
        </div>
      </section>
      <Plan />
      <section className="information">
        <div className="container">
          <div className="information">
            <div className="information__info">
              <h3 className="information__info-title">
                We Create The Art Of Stylish Living Stylishly
              </h3>
              <p className="information__info-text">
                It is a long established fact that a reader will be distracted
                by the of readable content of a page when lookings at its
                layouts the points of using that it has a more-or-less normal.
              </p>
              <div className="information__info-link">
                <img src={callIcon} alt="" />
                <p className="information__info-number">
                  <h4>012345678</h4> Call Us Anytime
                </p>
              </div>
              <button className="information__info-button button">
                <a href="/">Get Free Estimate</a>{" "}
                <img className="arrow" src={arrowRight} alt="" />
              </button>
            </div>
            <img className="information__img" src={information} alt="" />
          </div>
        </div>
      </section>

      <section className="comments">
        <div className="container">
          <div className="comments__inner">
            <h3 className="comments__title">What the People Thinks About Us</h3>
            <ul className="comments__list">
              <li className="comments__item">
                <div className="comments__head">
                  <img src={comments1} alt="" />
                  <p className="comments__text arrow">
                    <h5>Nattasha Mith</h5>
                    Berlin, Germany
                  </p>
                </div>
                <p className="comments__info">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </li>
              <li className="comments__item">
                <div className="comments__head">
                  <img src={comments2} alt="" />
                  <p className="comments__text arrow">
                    <h5>Raymond Galario</h5>
                    Sydney, Australia
                  </p>
                </div>
                <p className="comments__info">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </li>
              <li className="comments__item">
                <div className="comments__head">
                  <img src={comments3} alt="" />
                  <p className="comments__text arrow">
                    <h5>Benny Roll</h5>
                    New York, USA
                  </p>
                </div>
                <p className="comments__info">
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </li>
            </ul>
          </div>
          <List />
        </div>
      </section>

      <section className="follow">
        <div className="container">
          <div className="follow__inner">
            <div className="follow__info">
              <h3 className="follow__info-title">Follow Our Projects</h3>
              <p className="follow__info-text">
                It is a long established fact that a reader will be distracted
                by the of readable content of page lookings at its layouts
                points.
              </p>
            </div>
            <ul className="follow__list">
              <li className="follow__item">
                <img className="follow__item-img" src={follow1} alt="" />
                <div className="follow__item-info">
                  <p className="follow__item-text">
                    <h6>Modern Kitchan</h6>
                    Decor / Artchitecture
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </li>
              <li className="follow__item">
                <img className="follow__item-img" src={follow2} alt="" />
                <div className="follow__item-info">
                  <p className="follow__item-text">
                    <h6>Modern Kitchan</h6>
                    Decor / Artchitecture
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </li>
              <li className="follow__item">
                <img className="follow__item-img" src={follow3} alt="" />
                <div className="follow__item-info">
                  <p className="follow__item-text">
                    <h6>Modern Kitchan</h6>
                    Decor / Artchitecture
                  </p>
                  <img src={arrow} alt="" />
                </div>
              </li>
              <li className="follow__item">
                <a href="/">
                  <img className="follow__item-img" src={follow4} alt="" />
                </a>
                <div className="follow__item-info">
                  <p className="follow__item-text">
                    <a href="/">
                      <h6>Modern Kitchan</h6>
                    </a>
                    Decor / Artchitecture
                  </p>
                  <a href="/">
                    <img src={arrow} alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Experience />
      </section>
      <section className="news">
        <div className="container">
          <div className="news__info">
            <h3 className="news__info-title">Articles & News</h3>
            <p className="news__info-text">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using.
            </p>
          </div>
          <div className="article__list">
            <Article
              imageUrl={article1}
              title="Kitchan Design"
              text="Let’s Get Solution For Building Construction Work"
            />
            <Article
              imageUrl={article2}
              title="Living Design"
              text="Low Cost Latest Invented Interior Designing Ideas."
            />
            <Article
              imageUrl={article3}
              title="Interior Design"
              text="Best For Any Office & Business Interior solution"
            />
          </div>
        </div>
        <Join />
      </section>
    </>
  );
}

export default App;
