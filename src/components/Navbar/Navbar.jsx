import React, { useState } from "react";

import { BsFillSunFill } from "react-icons/bs";

import { 
    NavbarContainer,
    LeftContainer, 
    RightContainer, 
    NavbarExtendContainer, 
    NavbarInnerContainer, 
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpensLinksButton,
    NavbarLinkExtend,
    ButtonSwitchTheme
} from './style';



export function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false)

    return(
        <NavbarContainer extendNavbar ={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <p><a href="/">Yago Afonso</a></p>
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                            <NavbarLink to="" >Home</NavbarLink>
                            <NavbarLink to="/projects" >Projetos</NavbarLink>
                            <NavbarLink to="/about" >Sobre</NavbarLink>
                            <ButtonSwitchTheme><BsFillSunFill /></ButtonSwitchTheme>
                            
                            <OpensLinksButton
                                onClick={() => {
                                    setExtendNavbar((curr => !curr));
    
                                }}                   
                            >                            
                                {extendNavbar ? <> &#10005;</> : <> &#8801;</>}
                            </OpensLinksButton>
                        </NavbarLinkContainer>                    
                </RightContainer>
            </NavbarInnerContainer>
            { extendNavbar && (
                <NavbarExtendContainer>
                    <NavbarLinkExtend to="/">Home</NavbarLinkExtend>
                    <NavbarLinkExtend to="/projects" >Projetos</NavbarLinkExtend>
                    <NavbarLinkExtend to="/about" >Sobre</NavbarLinkExtend>
                    
                </NavbarExtendContainer>
            )}
        </NavbarContainer>
    );
}