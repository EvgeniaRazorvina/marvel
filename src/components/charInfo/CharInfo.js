import React from "react";
import './charInfoStyles.scss';

const thor = require("../../image/thor.jpeg");

const CharInfo = () => {
  return (
    <div className="char-info">
      <div className="char-basics">
        <img className= "img" src={thor} alt="abyss" width='150px' height='150px'/>
        <div>
          <div className="char-info-name">THOR</div>
          <div className="char-btns">
            <a href="#" className="button button-main">
              <div className="inner">homepage</div>
            </a>
            <a href="#" className="button button-secondary">
              <div className="inner">wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char-description">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </div>
      <div className="char-comics">Comics:</div>
      <ul className="char-comics-list">
                <li className="char-comics-item">
                    All-Winners Squad: Band of Heroes (2011) #3
                </li>
                <li className="char-comics-item">
                    Alpha Flight (1983) #50
                </li>
                <li className="char-comics-item">
                    Amazing Spider-Man (1999) #503
                </li>
                <li className="char-comics-item">
                    Amazing Spider-Man (1999) #504
                </li>
                <li className="char-comics-item">
                    AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
                </li>
                <li className="char-comics-item">
                    Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
                </li>
                <li className="char-comics-item">
                    Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
                </li>
                <li className="char-comics-item">
                    Vengeance (2011) #4
                </li>
                <li className="char-comics-item">
                    Avengers (1963) #1
                </li>
                <li className="char-comics-item">
                    Avengers (1996) #1
                </li>
            </ul>
    </div>
  );
};

export default CharInfo;
