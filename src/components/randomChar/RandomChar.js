import React from "react";
import './randomCharStyles.scss';

const thor = require('../../image/thor.jpeg');
const mjolnir = require('../../image/mjolnir.png');

const RandomChar = () => {
    return(
        <div className="randomchar">
        <div className="randomchar-block">
            <img src={thor} alt="Random character" className="randomchar-img"/>
            <div className="randomchar-info">
                <p className="randomchar-name">Thor</p>
                <p className="randomchar-description">
                    As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                </p>
                <div className="randomchar-btns">
                    <a href="#" className="button button-main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href="#" className="button button-secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
        <div className="randomchar-static">
            <p className="randomchar-title">
                Random character for today!<br/>
                Do you want to get to know him better?
            </p>
            <p className="randomchar-title">
                Or choose another one
            </p>
            <button className="button button-main">
                <div className="inner">try it</div>
            </button>
            <img src={mjolnir} alt="mjolnir" className="randomchar-decoration"/>
        </div>
    </div>

    )
}

export default RandomChar;
