import React, { useEffect, useState } from "react";
import "./randomCharStyles.scss";
import MarvelService from "../../services/MarvelServise";

const mjolnir = require("../../image/mjolnir.png");

/*class RandomChar extends Component {
  state = {
    name: null,
    description: null,
    thumbnail: null,
    homepage: null,
    wiki: null,
  };
  render() {
    const { name, description, thumbnail, homepage, wiki } = this.state;

    const marvelService = new MarvelService();

    updateChar = () => {
        const id = 1011005;
        this.marvelService.getCharacter(id).then(res => {
            this.setState({})
        })
    }

    marvelService.getAllCharacters().then((res) =>
      res.data.results.forEach((element) => {
        console.log(element.name);
      })
    );

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
            <p className="randomchar-description">{description}</p>
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
  }
}*/

const RandomChar = () => {
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
  
}

export default RandomChar;
