import React from "react";

import { ContainerFooter, Button, ContainerButton, Developed, Copyright } from './style'

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return(
    <ContainerFooter>
      <Developed>Desenvolvido por yago afonso</Developed>
      <Copyright>Copyright © 2023 </Copyright>
      <ContainerButton>
        <Button href="https://www.linkedin.com/in/yago-afonso/" target="_blank">
          <AiFillLinkedin color='white'/>
        </Button>
        <Button href="https://github.com/yagoafonso" target="_blank">
          <AiFillGithub color='white'/>
        </Button>
      </ContainerButton>
    </ContainerFooter>
  );
}