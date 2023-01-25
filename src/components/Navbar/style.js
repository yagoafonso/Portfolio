import styled from "styled-components";
import { Link } from 'react-router-dom'
import  breakpoints  from "../../breakpoints";

export const Container = styled.nav`
    max-width: ${breakpoints.device.laptop};
    display: flex;

    @media (max-width: ${breakpoints.device.tablet}) {
        flex-direction: column;
    }
`;

export const Content = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Logo = styled.div`
    padding: 25px 0;
    a{
        color: var(--white);
        text-decoration: none;        
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.5rem;

        :hover{
            color: var(--blueviolet-800);
            transition: 0.3s;
        }
    }  
`;

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarLink = styled(Link)`
    display: flex;
    gap: 5px;
    margin: 10px;

    color: white;
    text-decoration: none;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.5rem;

    :hover {
        color: var(--blueviolet-800);
        transition: 0.3s;
    }

    @media (max-width: ${breakpoints.device.tablet}) {
    display: none;
    }
`

export const NavbarLinkExtend = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;

    color: white;
    font-size: 1.5rem;
    text-decoration: none;
    margin: 10px;

    :hover {
        color: var(--blueviolet-800);
    }
`;

export const OpensLinksButton = styled.button`
    width: 50px;
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
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.device.tablet}) {
        display: none;
    }
`;

