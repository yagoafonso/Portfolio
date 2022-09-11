import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

import { 
  ContainerProjectCard,
  CardImg,
  CardTitle,
  CardText,
  ContainerLinks,
  ContainerButton
} from './style';

export function ProjectCard({src, title, text, linkGitHub, linkDemo}){
  return(
    <ContainerProjectCard>
      <CardImg src={src} alt="" />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
      <ContainerLinks>
        <ContainerButton href={linkGitHub} target="_blank" title="Link para ver o repositório no GitHub">
            <AiFillGithub />
            GitHub
        </ContainerButton>
        <ContainerButton href={linkDemo} target="_blank" title="Link de apresentação do projeto">
            <CgWebsite />
            Demo
        </ContainerButton  >
      </ContainerLinks>
    </ContainerProjectCard>
  );
}