import styled from "styled-components";
import { Link } from 'react-router-dom'
import  breakpoints  from "../../breakpoints";

export const NavbarContainer = styled.nav`
    width: 100vw;
    max-width: ${breakpoints.device.laptop};
    height: ${(props) => (props.extendNavbar ? "40vh" : "10vh")};
    display: flex;
    flex-direction: column;
    top: 0;
    background-color: var(--black-900);

    @media (min-width: ${breakpoints.device.tablet} ){
        height: 10vh;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    padding-left: 5%;
    a{
        text-decoration: none;
        color: var(--white);
        font-weight: 400;
        line-height: 24px;

        :hover{
            color: var(--blueviolet-800);
            transition: 0.3s;
        }
    }    
`;
export const RightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
    height: 10vh;
    align-items: center;
`;

export const NavbarLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 10px;
    transition: 0.2s;

    :hover {
        color: var(--blueviolet-800);
    }

    @media (max-width: ${breakpoints.device.tablet}) {
    display: none;
    }
`

export const NavbarLinkExtend = styled(Link)`
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 10px;

    display: flex;
    align-items: center;

    :hover {
        color: var(--blueviolet-800);
    }
`;

export const OpensLinksButton = styled.button`
    width: 100px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 50px;
    cursor: pointer;
    top: 0;

    @media (min-width: ${breakpoints.device.tablet}) {
    display: none;
    }
`;
export const NavbarExtendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${breakpoints.device.tablet}) {
        display: none;
    }
`;
export const ButtonSwitchTheme = styled.div`
    display: flex;
    margin: 10px;

    :hover{
        color: var(--blueviolet-800);
        transition: 0.3s;
        cursor: pointer;
    }
`
