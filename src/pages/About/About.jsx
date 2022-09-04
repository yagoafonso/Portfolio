import React from "react";

import {
  ContainerAbout,
  ContentImgAbout,
  ContentTextAbout
} from './style'

export function About(){
  return(
    <ContainerAbout>
      <ContentImgAbout>
        <img src="https://github.com/yagoafonso.png" alt="" />
      </ContentImgAbout>
      <ContentTextAbout>
        <h1>Sobre mim</h1>
        <p>Olá! sou graduado em Sistemas de Informação pela Universidade Federal de Rondonópolis/MT. Atuo há 5 anos como analista de suporte, mas atualmente estou em transição de área com foco para atuar como desenvolvedor front-end. Atualmente estou focado estudando ReactJS.</p>
      </ContentTextAbout>
    </ContainerAbout>
  );
}