import React from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import  ImgProjectFeedback  from "../../assets/projeto_nlw_return.jpg";
import ImgProjectIgniteFeed from "../../assets/ignitefeed.jpg";
import ImgProjectCloneTwitter from "../../assets/clone_twitter.jpg"

import { 
  ContainerProjects,
  ContainerProjectCards,
  ProjectTitle,
  ContainerText
} from './style'

export function Projects(){
  return(
    <ContainerProjects>
      <ProjectTitle>Projetos</ProjectTitle>
      <ContainerText>Aqui estão alguns projetos que trabalhei recentemente:</ContainerText>
      <ContainerProjectCards>
        <ProjectCard
          src={ImgProjectFeedback}
          title="Feedback"
          text="Durante a 8º edição do evento na trilha Impulse realizado pela Rocketseat, foi desenvolvida um widget completo e acessível que pode ser utilizado em múltiplos projetos para coletar feedbacks dos usuários."
          linkGitHub="https://github.com/yagoafonso/nlw_return_impulse"
          linkDemo="https://nlw-return-impulse-pink-two.vercel.app/"
        />
        <ProjectCard
          src={ImgProjectIgniteFeed}
          title="Ignite Feed"
          text="Projeto desenvolvido durante o primeiro módulo do Ignite - Trilha ReactJs oferecido pela Rocketset."
          linkGitHub="https://github.com/yagoafonso/ignite-feed"
          linkDemo="https://ignitefeed-xi.vercel.app/"
        />
      </ContainerProjectCards>
    </ContainerProjects>
  );
}