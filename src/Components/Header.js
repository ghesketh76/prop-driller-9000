import React from 'react';

function Header() {

  const handleClick = () => {
    props.button()
  }


  return (
    <header>
      <button>
        <img
          src = {props.logo}
          alt = "logo"
          onClick={handleClick}
        />
      </button>
    </header>
  );
}


export default Header;
