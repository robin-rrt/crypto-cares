import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavLogo} from './NavbarElements';
import logo from '../../images/logo.png'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">
          <img src={logo} alt='logo'></img>
        </NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/donate" activeStyle>
            Donate
          </NavLink>
          <NavLink to="/create-service" activeStyle>
            Create Service
          </NavLink>
          <NavLink to="/my-services" activeStyle>
            My Services
          </NavLink>
          <NavLink to="/redeem" activeStyle>
            Redeem
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/connect-wallet'>Connect Wallet</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;