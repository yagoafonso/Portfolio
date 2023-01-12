import React from "react";

import { ContainerFooter, ContainerButton } from './style'

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function Footer() {
  return(
    <ContainerFooter>
      <p>Desenvolvido por yago afonso</p>
      <p>Copyright © 2023 </p>
      <div>
        <ContainerButton href="https://www.linkedin.com/in/yago-afonso/" target="_blank">
          <AiFillLinkedin color='white'/>
        </ContainerButton>
        <ContainerButton href="https://github.com/yagoafonso" target="_blank">
          <AiFillGithub color='white'/>
        </ContainerButton>
      </div>
    </ContainerFooter>
  );
}