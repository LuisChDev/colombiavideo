import React from 'react';
import { NavContainer } from './styles';
import Logo from 'images/logo.png';

const Navbar = () => {
  return (
    <NavContainer bknd="#e6e6e6">
        <div>
            <img alt="logo" src={Logo}/>
        </div>
        <div>
            Título va aquí
        </div>
        <div>
            botones van aquí
        </div>
    </NavContainer>
  )
}

export default Navbar;
