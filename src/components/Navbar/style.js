import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display:  flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 80px;
    }
`;

export const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;

`;

export const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;

`;

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: large;
    font-family: Roboto, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px) {
    display: none;
    }
`;

export const NavbarLinkExtend = styled(Link)`
    color: white;
    font-size: large;
    font-family: Roboto, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`;

export const Logo = styled.div`
    color: white;
    font-size: x-large;
    font-family: Roboto, Helvetica, sans-serif;
    margin: 25px;
    max-width: 180px;
    height: auto;
    color: blueviolet;
    white-space: nowrap;
`;
export const OpensLinksButton = styled.button`
    width: 80px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px) {
    display: none;
    }
`;
export const NavbarExtendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;