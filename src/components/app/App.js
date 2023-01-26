import React from "react";
import AppHeader from '../appHeader/AppHeader';
import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';

import './app.scss';

const decoration = require('../../image/vision.png');

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <main>
                <RandomChar />
                <div className="char-content">
                    <CharList />
                    <CharInfo />
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App;