import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import {
  ContainerAbout,
  ContentImgAbout,
  ContentTextAbout,
  ContainerSocial,
  ContainerSocialIcon,
  SocialIcon
} from './style'

export function About(){
  return(
    <ContainerAbout>
      <ContentImgAbout>
        <img src="https://github.com/yagoafonso.png" alt="" />
      </ContentImgAbout>
      <ContentTextAbout>
        <h1>Deixa eu me <span>Apresentar</span></h1>
        <p>Olá! sou graduado em Sistemas de Informação pela Universidade Federal de Rondonópolis/MT. Atuo há 5 anos como analista de suporte, mas atualmente estou em transição de área com foco para atuar como desenvolvedor front-end. A minha área de interesse está na construção de novas <strong>Tecnologias e Produtos Web</strong>  utilizando <strong>Node.js</strong> e <strong>React.Js</strong>.</p>
        <ContainerSocial>
          <h2>Me encontre em</h2>
          <p>Sinta-se à vontade para se conectar comigo.</p>
          <ContainerSocialIcon>
            <SocialIcon title="Github" href="https://github.com/yagoafonso" target="_blank">
              <AiFillGithub />         
            </SocialIcon>
            <SocialIcon title="Linkedin" href="https://www.linkedin.com/in/yago-afonso/" target="_blank">
              <FaLinkedinIn />        
            </SocialIcon>
          </ContainerSocialIcon>          
        </ContainerSocial>
      </ContentTextAbout>

    </ContainerAbout>
  );
}