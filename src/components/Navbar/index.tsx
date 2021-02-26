import React from 'react';
import { NavContainer, StyledTitle } from './styles';
import Logo from 'images/logo.png';

const Navbar = () => {
  return (
    <NavContainer>
        <div>
            <img alt="logo" src={Logo}/>
        </div>
        <StyledTitle>
            El lugar de tus películas favoritas
        </StyledTitle>
        <div>
        </div>
    </NavContainer>
  )
}

export default Navbar;
