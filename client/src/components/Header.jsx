import React from 'react';


function Header() {
  return (
    <div className="header">
      <div className="logo-div">
        <img className='logo' src="https://i.imgur.com/MlsbVKq.jpeg" alt="Logo" />
        <img className='banner' src='https://i.imgur.com/oiuZJmO.jpeg' alt='Banner' />
      </div>
      <div className="title">
        <h1>MERNival</h1>
      </div>
    </div>
  );
}

export default Header;