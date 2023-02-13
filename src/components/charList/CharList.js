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
        return (
            <div className="char-list">
                <ul className="char-grid">
                    {charList
                        .map(item => {
                            let res = item.thumbnail.includes('image_not_available');
                            return (
                                <li
                                    className="char-item"
                                    key={item.id}
                                    onClick={() =>
                                        this.props.onCharSelected(item.id)
                                    }
                                >
                                    <img src={item.thumbnail} alt={item.name} className={res ? "img-contain" : "img"}/>
                                    <div className="char-name">{item.name}</div>
                                </li>
                            );
                        })
                        .slice(0, 9)}
                </ul>
                <button className="button button-main button-long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

export default CharList;
