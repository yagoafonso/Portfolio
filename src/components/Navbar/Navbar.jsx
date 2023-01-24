import React, { useState } from "react";

import { AiFillHome,AiOutlineFundProjectionScreen,AiOutlineUser } from "react-icons/ai";

import { 
    Container,
    Content, 
    Logo, 
    NavbarExtendContainer, 
    NavbarContainer,
    NavbarLink,
    OpensLinksButton,
    NavbarLinkExtend,
} from './style';



export function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false)

    const showSidebar = () => setExtendNavbar(!extendNavbar)

    return(
        <Container extendNavbar={extendNavbar}>
            <Content>
                <Logo>
                    <a href="/">Yago Afonso</a>
                </Logo>
                <NavbarContainer>
                    <NavbarLink to="" ><AiFillHome /> Home </NavbarLink>
                    <NavbarLink to="/projects" ><AiOutlineFundProjectionScreen /> Projetos </NavbarLink>
                    <NavbarLink to="/about" ><AiOutlineUser /> Sobre </NavbarLink>

                    <OpensLinksButton onClick={showSidebar}>
                        {extendNavbar ? <> &#10005;</> : <> &#8801;</>}
                    </OpensLinksButton>
                </NavbarContainer>
            </Content>
            {extendNavbar && (
                <NavbarExtendContainer>
                    <NavbarLinkExtend to="/"><AiFillHome /> Home </NavbarLinkExtend>
                    <NavbarLinkExtend to="/projects" ><AiOutlineFundProjectionScreen /> Projetos </NavbarLinkExtend>
                    <NavbarLinkExtend to="/about" ><AiOutlineUser /> Sobre </NavbarLinkExtend>
                </NavbarExtendContainer>
            )}
        </Container>
    );
}