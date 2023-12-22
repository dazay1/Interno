import React from "react";
import './list.css'
import icon1 from '../../img/01.svg'
import icon2 from '../../img/02.svg'
import icon3 from '../../img/03.svg'
import icon4 from '../../img/04.svg'
import icon5 from '../../img/05.svg'
function List() {
  return (
    <ul className="comments__icon-list">
      <li className="comments__icon-item">
        <img src={icon1} alt="" />
      </li>
      <li className="comments__icon-item">
        <img src={icon2} alt="" />
      </li>
      <li className="comments__icon-item">
        <img src={icon3} alt="" />
      </li>
      <li className="comments__icon-item">
        <img src={icon4} alt="" />
      </li>
      <li className="comments__icon-item">
        <img src={icon5} alt="" />
      </li>
      <li className="comments__icon-item">
        <img src={icon1} alt="" />
      </li>
    </ul>
  );
}

export default List;
