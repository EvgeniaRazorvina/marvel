import React from "react";
import './appBanerStyles.scss';

const avengers = require('../../image/Avengers.png');
const avengersLogo = require('../../image/Avengers_logo.png');
const AppBaner = () => {
    return(
        <div className="appBaner">
            <img src={avengers} alt="Avengers"/>
            <div className="appBaner-text">
                New comics every week!<br/>
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="Avengers logo"/>
        </div>
    )
}

export default AppBaner;