import "Styles/Header.css";
import React from "react";
import logo from "Assets/img/logo.svg";

function Header({ handleToggleDarkMode, theme }) {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Notes App</h3>
        </div>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="save"
        >
          {theme ? "Modo Oscuro" : "Modo Claro"}
        </button>
      </div>
    </div>
  );
}

export default Header;
