import React from "react";
import './singleComicStyles.scss';

const xMen = require('../../image/x-men.png');

const SingleComic = () => {
    return(
        <div className="single-comic">
        <img src={xMen} alt="x-men" className="single-comic-img"/>
        <div className="single-comic-info">
            <h2 className="single-comic-name">X-Men: Days of Future Past</h2>
            <p className="single-comic-description">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
            <p className="single-comic-description">144 pages</p>
            <p className="single-comic-description">Language: en-us</p>
            <div className="single-comic-price">9.99$</div>
        </div>
        <a href="#" className="single-comic-back">Back to all</a>
    </div>

    )
}

export default SingleComic;