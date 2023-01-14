import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

import { 
  ContainerProjectCard,
  CardImg,
  CardTitle,
  ContainerDescriptionProject,
  DescriptionTecnologiesUsed,
  DescriptionProject,
  ContainerLinks,
  ContainerHead,
  ContainerButton
} from './style';

export function ProjectCard({src, titleProject, linkToGitHub, linkToViewProject, descriptionTecnologiesUsed, descriptionProject}){
  return(
    <ContainerProjectCard>
      <CardImg src={src} alt="" />
      <ContainerHead>
        <CardTitle>{titleProject}</CardTitle>
        <ContainerLinks>
        <ContainerButton href={linkToGitHub} target="_blank" title="Link para ver o repositório no GitHub">
            <AiFillGithub />
        </ContainerButton>
        <ContainerButton href={linkToViewProject} target="_blank" title="Link de apresentação do projeto">
            <AiOutlineLink />
        </ContainerButton  >
      </ContainerLinks>
      </ContainerHead>      
      <ContainerDescriptionProject>
        <DescriptionProject>
          {descriptionProject}
        </DescriptionProject>
        <DescriptionTecnologiesUsed>
          {descriptionTecnologiesUsed}
        </DescriptionTecnologiesUsed>
      </ContainerDescriptionProject>
    </ContainerProjectCard>
  );
}