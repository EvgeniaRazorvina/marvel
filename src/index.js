import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MarvelService from './services/MarvelServise';
import './styles/style.scss';

const marvelService = new MarvelService();

//marvelService.getAllCharacters().then(res => console.log(res));
marvelService.getAllCharacters().then(res => res.data.results.forEach(element => {
  console.log(element.name);
}));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
