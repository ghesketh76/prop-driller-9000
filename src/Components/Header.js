import React from 'react';

function Header(props) {

  const handleClick = () => {
    props.button()
  }


  return (
    <header>
      
        <img
          src = {props.logo}
          alt = "logo"
          onClick={handleClick}
        />
      
    </header>
  );
}


export default Header;
