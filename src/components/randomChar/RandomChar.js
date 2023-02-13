import React, { Component } from "react";
import "./randomCharStyles.scss";
import MarvelService from "../../services/MarvelServise";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const mjolnir = require("../../image/mjolnir.png");

class RandomChar extends Component {

  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount () {
    this.updateChar();
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onCharLoading = () => {
    this.setState({loading: true});
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.onCharLoading();
    this.marvelService.getCharacter(id).then(this.onCharLoaded).catch(this.onError);
  };

  render() {
    const {
      char,
      loading,
      error,
    } = this.state;

    const errorMessage = error ? <ErrorMessage/> : null;
    const spiner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View char={char}/> : null;

    return (
      <div className="randomchar">
        {errorMessage}
        {spiner}
        {content}
        <div className="randomchar-static">
          <p className="randomchar-title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar-title">Or choose another one</p>
          <button className="button button-main" onClick={this.updateChar}>
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar-decoration" />
        </div>
      </div>
    );
  }
}

const View = ({ char }) => {
  const {name, description, thumbnail, homepage,wiki} = char;
  let res = thumbnail.includes('image_not_available');

  return (
    <div className="randomchar-block">
      <img src={thumbnail} alt="Random character" className={res ? "randomchar-img-contain" : "randomchar-img"} />
      <div className="randomchar-info">
        <p className="randomchar-name">{name}</p>
        <p className="randomchar-description">
          {description ? description : "Data about character is not found"}
        </p>
        <div className="randomchar-btns">
          <a href={homepage} className="button button-main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button-secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

/*const RandomChar = () => {
    const [name,setName] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');
    const [homepage, setHomepage] = useState('');
    const [wiki, setWiki] = useState('');

    const marvelService = new MarvelService();

    const updateChar = async () => {
        const id = Math.floor(Math.random() * (1011400-1011000)+1011000);
        const obj = marvelService.getCharacter(id);
        obj.then((result) => {
          setName(result.name);
          setThumbnail(result.thumbnail);
          setDescription(result.description);
          setHomepage(result.homepage);
          setWiki(result.wiki);
          console.log(result);
        });
        
        
    }

    useEffect(() => {
      updateChar();
    }, []);

    return (
      <div className="randomchar">
        <div className="randomchar-block">
          <img
            src={thumbnail}
            alt="Random character"
            className="randomchar-img"
          />
          <div className="randomchar-info">
            <p className="randomchar-name">{name}</p>
            <p className="randomchar-description">
              {description ? description : "Data about character is not found"}
            </p>
            <div className="randomchar-btns">
              <a href={homepage} className="button button-main">
                <div className="inner">homepage</div>
              </a>
              <a href={wiki} className="button button-secondary">
                <div className="inner">Wiki</div>
              </a>
            </div>
          </div>
        </div>
        <div className="randomchar-static">
          <p className="randomchar-title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar-title">Or choose another one</p>
          <button className="button button-main">
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar-decoration" />
        </div>
      </div>
    );
  
}*/

export default RandomChar;
