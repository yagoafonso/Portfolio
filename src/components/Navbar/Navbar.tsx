import React, { useState } from "react";
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
} from './style';



export function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState (false)


    return(
        <NavbarContainer extendNavbar ={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/" >Home</NavbarLink>
                        <NavbarLink to="/projects" >Projetos</NavbarLink>
                        <NavbarLink to="/about" >Sobre</NavbarLink>
                        <OpensLinksButton
                            onClick={() => {
                                setExtendNavbar((curr => !curr));
                            }}
                        
                        >                            
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpensLinksButton>
                    </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    <Logo>Yago Afonso</Logo>
                </RightContainer>
            </NavbarInnerContainer>
            { extendNavbar && (
                <NavbarExtendContainer>
                    <NavbarLinkExtend to="/">Home</NavbarLinkExtend>
                    <NavbarLinkExtend to="/products" >Projetos</NavbarLinkExtend>
                    <NavbarLinkExtend to="/about" >Sobre</NavbarLinkExtend>
                </NavbarExtendContainer>
            )}
        </NavbarContainer>
    );
}