import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import  AboutImg  from "../../assets/about.png"

import {
  ContainerAbout,
  ContentImgAbout,
  Img,
  ContentTextAbout,
  ContainerSocial,
  ContainerSocialIcon,
  SocialIcon
} from './style'

export function About(){
  return(
    <ContainerAbout>
      <ContentTextAbout>
        <p>Olá! sou graduado em Sistemas de Informações pela Universidade Federal de Rondonópolis. Recentemente iniciei uma pós-graduação em Projetos de Aplicativos Móveis Multiplataforma.</p>
        <p>Estou em busca da minha primeira oportunidade como desenvolvedor front-end.</p>
        <p>A minha área de interesse está na construção de novas Tecnologias e Produtos Web utilizando <strong>React</strong>, <strong>React Native</strong> e <strong>Node.js</strong>.</p>
        <ContainerSocial>
          <p>Sinta-se à vontade para se conectar comigo.</p>
          <ContainerSocialIcon>
            <SocialIcon title="Linkedin" href="https://www.linkedin.com/in/yago-afonso/" target="_blank">
              <FaLinkedinIn />
              Linkedin
            </SocialIcon>
            <SocialIcon title="Github" href="https://github.com/yagoafonso" target="_blank">
              <AiFillGithub />
              GitHub
            </SocialIcon>
          </ContainerSocialIcon>
        </ContainerSocial>
      </ContentTextAbout>
      <ContentImgAbout>
        <Img src={AboutImg} alt="Imagem de perfil" />
      </ContentImgAbout>
    </ContainerAbout>
  );
}