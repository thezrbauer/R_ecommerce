import React from 'react'
import {Heading, LogoWrapper, Wrapper, IconWrapper} from './styles/Header.styled'
import logo from '../images/logo.svg'
import avatar from "../images/image-avatar.png"
import cartLogo from "../images/icon-cart.svg"

export default function Header() {
    return (
        <Heading>
        <LogoWrapper>
             <img className="logo" src={logo} alt="logo"></img>
           </LogoWrapper>
          <Wrapper>
            <ul>
            <li><a href="#">Collectors</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
          </Wrapper>
          <div className="smart-wrapper"></div>
          <IconWrapper>
           <div className="cart"><img src={cartLogo} ></img></div>
           <div className="avatar"><img src={avatar}></img></div>
          </IconWrapper>
        </Heading>
    )
}
