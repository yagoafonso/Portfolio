import React from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import  imgProjectFeedback  from "../../assets/projeto_nlw_return.jpg";
import imgProjectIgniteFeed from "../../assets/ignitefeed.jpg";
import imgProjectEsports from "../../assets/projeto_nlw_esports.jpg";

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
          src={imgProjectFeedback}
          title="Feedback"
          text="Durante a 8º edição do evento NLW na trilha Impulse realizado pela Rocketseat, foi desenvolvida um widget completo e acessível que pode ser utilizado em múltiplos projetos para coletar feedbacks dos usuários."
          linkGitHub="https://github.com/yagoafonso/nlw_return_impulse"
          linkDemo="https://nlw-return-impulse-pink-two.vercel.app/"
        />
        <ProjectCard
          src={imgProjectIgniteFeed}
          title="Ignite Feed"
          text="Projeto desenvolvido durante o primeiro módulo do Ignite - Trilha ReactJs oferecido pela Rocketset."
          linkGitHub="https://github.com/yagoafonso/ignite-feed"
          linkDemo="https://ignitefeed-xi.vercel.app/"
        />
        <ProjectCard 
          src={imgProjectEsports}
          text="Na 9ª edição do evento NLW na trilha Ignite realizado pela Rocketseat, o projeto foi voltado para o universo dos games. Na aplicação você consegue se cadastrar e ver as pessoas que estão procurando por um duo no game."
          linkGitHub="https://github.com/yagoafonso/nlw_esports"
          linkDemo="https://nlw-esports-nu.vercel.app/"
        />
      </ContainerProjectCards>
    </ContainerProjects>
  );
}