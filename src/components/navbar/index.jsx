import React, {useEffect, useState} from 'react'
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavbarLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './navbarElements';

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {

        if (window.scrollY >= 80){
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }

    }

    useEffect(() => {

        window.addEventListener('scroll', changeNav);

    }
    ,[])

    const toggleHome = () => {

        scroll.scrollToTop();

    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavbarLogo to='/' spy="true" smooth="true" onClick={toggleHome}>Razer</NavbarLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="specifications" spy="true" smooth="true">Specifications</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="availability" spy="true" smooth="true">Availability</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="software" spy="true" smooth="true">Software</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="models" spy="true" smooth="true">Models</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signup">Pre-Order</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar;