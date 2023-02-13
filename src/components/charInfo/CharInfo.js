import React, { Component } from 'react';
import './charInfoStyles.scss';
import '../../styles/button.scss';
import MarvelService from '../../services/MarvelServise';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false,
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar();
        }
    }
    onCharLoaded = char => {
        this.setState({ char, loading: false });
    };

    onCharLoading = () => {
        this.setState({ loading: true });
    };

    onError = () => {
        this.setState({
            loading: false,
            error: true,
        });
    };

    updateChar = () => {
        const { charId } = this.props;
        if (!charId) {
            return;
        }
        this.onCharLoading();

        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError);
    };

    render() {
        const { char, loading, error } = this.state;

        const skeleton = char || loading || error ? null : <Skeleton />;
        const errorMessage = error ? <ErrorMessage /> : null;
        const spiner = loading ? <Spinner /> : null;
        const content = !(loading || error || !char) ? (
            <View char={char} />
        ) : null;
        return (
            <div className="char-info">
                {skeleton}
                {errorMessage}
                {spiner}
                {content}
            </div>
        );
    }
}
const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki, comics } = char;
    let res = thumbnail.includes('image_not_available');
    return (
        <>
            <div className="char-basics">
                <img
                    className={res ? "img-contain" : "img"}
                    src={thumbnail}
                    alt={name}
                    width="150px"
                    height="150px"
                />
                <div>
                    <div className="char-info-name">{name}</div>
                    <div className="char-btns">
                        <a href={homepage} className="button button-main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button-secondary">
                            <div className="inner">wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char-description">{description}</div>
            <div className="char-comics">Comics:</div>
            <ul className="char-comics-list">
                {comics
                    ? comics
                          .map((item, index) => (
                              <li className="char-comics-item" key={index}>
                                  {item.name}
                              </li>
                          ))
                          .splice(0, 10)
                    : 'No comics'}
            </ul>
        </>
    );
};

export default CharInfo;
