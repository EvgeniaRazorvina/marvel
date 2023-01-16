import React from "react";
import './appHeaderStyles.scss';

const AppHeader = () => {
  return (
    <header className="app-header">
      <h1 className="app-title">
        <a href="#">
          <span>Marvel</span> information portal
        </a>
      </h1>
      <nav className="app-menu">
        <ul>
          <li>
            <a href="#">Characters</a>
          </li>
          /
          <li>
            <a href="#">Comics</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
