import React, { Component } from 'react';
import './charListStyles.scss';
import '../../styles/button.scss';
import MarvelService from '../../services/MarvelServise';

class CharList extends Component {
    state = {
        charList: [],
    };

    marvelService = new MarvelService();

    updateCharList = () => {
        this.marvelService.getAllCharacters().then(this.onCharListLoaded);
    };

    onCharListLoaded = charList => {
        this.setState({ charList });
    };

    componentDidMount() {
        this.updateCharList();
    }
    render() {
        const { charList } = this.state;
        {
            return (
                <div className="char-list">
                    <ul className="char-grid">
                        {charList.map((item) => (
                            <li className="char-item">
                                <img src={item.thumbnail} alt="abyss" />
                                <div className="char-name">{item.name}</div>
                            </li>
                        )).slice(0,9)}
                        {/*
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
        </li>*/}
                    </ul>
                    <button className="button button-main button-long">
                        <div className="inner">load more</div>
                    </button>
                </div>
            );
        }
    }
}

export default CharList;
