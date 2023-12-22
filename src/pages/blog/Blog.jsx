import React from "react";
import "./blog.css";
import BgImage from "../../components/bgImage/bgImage";
import Article from "../../components/articles/Article";
import news from "../../img/news.png";
import post from "../../img/post.png";
import arrow from "../../img/arrow.svg";
import article1 from "../../img/article-1.png";
import article2 from "../../img/article-2.png";
import article3 from "../../img/article-3.png";
import article4 from "../../img/article-4.png";
import article5 from "../../img/article-5.png";
import article6 from "../../img/article-6.png";

function Blog() {
  return (
    <>
      <BgImage img={news} title="Articles & News" link="blog" text="Blog" />
      <section className="post">
        <div className="container">
          <h3 className="post-title">Latest Post</h3>
          <div className="post-box">
            <div className="post-box__img">
              <img className="post-box__img_img" src={post} alt="" />
            </div>
            <div className="post-box__info">
              <h4 className="post-box__info_title">
                Low Cost Latest Invented Interior Designing Ideas
              </h4>
              <p className="post-box__info_text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpis dignissim maximus.posuere in.Contrary to popular belief.
              </p>
              <p className="post-box__info_text">
                Lorem Ipsum is not simply random text. It has roots in a piece
                of classica.
              </p>
              <p className="article__text">
                <p>26 December,2022</p> <img src={arrow} alt="" />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="news">
        <div className="container">
          <h3 className="news-title">Articles & News</h3>
          <div className="news-box">
            {/* <div className="news-box__row"></div> */}
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
            <Article
              imageUrl={article4}
              title="Kitchan Design"
              text="Let’s Get Solution For Building Construction Work"
            />
            <Article
              imageUrl={article5}
              title="Interior Design"
              text="Low Cost Latest Invented Interior Designing Ideas."
            />
            <Article
              imageUrl={article6}
              title="Interior Design"
              text="Best For Any Office & Business Interior solution"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
