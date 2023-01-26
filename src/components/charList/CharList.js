import React from "react";
import "./charListStyles.scss";
import "../../styles/button.scss";

const abyss = require("../../image/abyss.jpg");

const CharList = () => {
  return (
    <div className="char-list">
      <ul className="char-grid">
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item char-item_selected">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
        <li className="char-item">
          <img src={abyss} alt="abyss" />
          <div className="char-name">Abyss</div>
        </li>
      </ul>
      <button className="button button-main button-long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
