import React from 'react';


const Header = ({ handleToggleDarkMode, isDarkMode }) => {
  return (
    <header className={isDarkMode ? "header dark-mode" : "header"}>
      <div className="logo-div">
        <a href="/">
      <img src="https://i.imgur.com/jKvsXlY.gif" alt="Banner" className="logo" />
      </a>
      </div>
      
    </header>
  );
};

export default Header;