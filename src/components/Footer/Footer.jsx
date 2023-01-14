import React from "react";

import { ContainerFooter, Button, ContainerButton } from './style'

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return(
    <ContainerFooter>
      <p>Desenvolvido por yago afonso</p>
      <p>Copyright © 2023 </p>
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