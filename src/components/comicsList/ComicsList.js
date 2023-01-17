import React from "react";
import './comicsListStyles.scss';

const uw = require('../../image/UW.png');
const xMen = require('../../image/x-men.png');

const ComicsList = () => {
    return(
        <div className="comics-list">
            <ul className="comics-grid">
                <li className="comics-item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics-item-img"/>
                        <div className="comics-item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics-item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics-item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics-item-img"/>
                        <div className="comics-item-name">X-Men: Days of Future Past</div>
                        <div className="comics-item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics-item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics-item-img"/>
                        <div className="comics-item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics-item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics-item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics-item-img"/>
                        <div className="comics-item-name">X-Men: Days of Future Past</div>
                        <div className="comics-item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics-item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics-item-img"/>
                        <div className="comics-item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics-item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics-item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics-item-img"/>
                        <div className="comics-item-name">X-Men: Days of Future Past</div>
                        <div className="comics-item-price">NOT AVAILABLE</div>
                    </a>
                </li>
                <li className="comics-item">
                    <a href="#">
                        <img src={uw} alt="ultimate war" className="comics-item-img"/>
                        <div className="comics-item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                        <div className="comics-item-price">9.99$</div>
                    </a>
                </li>
                <li className="comics-item">
                    <a href="#">
                        <img src={xMen} alt="x-men" className="comics-item-img"/>
                        <div className="comics-item-name">X-Men: Days of Future Past</div>
                        <div className="comics-item-price">NOT AVAILABLE</div>
                    </a>
                </li>
            </ul>
            <button className="button button-main button-long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;