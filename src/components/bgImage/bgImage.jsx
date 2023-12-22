import React from 'react'
import './bgImage.css'
function BgImage({img, title, link, text}) {
  return (
    <section className="background">
        <img className='background__img' src={img} alt='' />
        <div className="container">
          <div className="background__box">
            <h2 className="background__title">{title}</h2>
            <p className="background__text">
              <a href="/">Home</a> / <a href={link}>{text}</a>
            </p>
          </div>
        </div>
      </section>
  )
}

export default BgImage