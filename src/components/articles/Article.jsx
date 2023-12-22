import React from "react";
import "./article.css";
import arrow from "../../img/arrow.svg";
function Article({ title, text, imageUrl }) {
  return (
    <div className="article">
      <div className="img">
        <img src={imageUrl} alt="" />
        <div className="article__box">
          <p>{title}</p>
        </div>
      </div>
      <div className="article__info">
        <h4 className="article__title">{text}</h4>
        <a href="/blogSmall" className="article__text">
          <p>26 December,2022</p> <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Article;
