import React from "react";

function Header({ title }) {
  return (
    <header>
      <div className="container">
        <dic className="content">
          <h1 className="title">{title}</h1>
          <p className="test">
            This page contains the Rick and Morty characters
          </p>
        </dic>
      </div>
    </header>
  );
}

export default Header;
