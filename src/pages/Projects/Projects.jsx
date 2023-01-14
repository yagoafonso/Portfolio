import React from "react";
import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import  imgProjectFeedback  from "../../assets/projeto_nlw_return.jpg";
import imgProjectIgniteFeed from "../../assets/ignitefeed.jpg";
import imgProjectEsports from "../../assets/projeto_nlw_esports.jpg";
import imgProjectTodoList from "../../assets/todo_list.jpg";

import { 
  ContainerProjects,
  ContainerProjectCards,
  ProjectTitle
} from './style'

export function Projects(){
  return(
    <ContainerProjects>
      <ProjectTitle>Projetos em destaque</ProjectTitle>
      <ContainerProjectCards>
        <ProjectCard 
          src={imgProjectTodoList}
          titleProject="Lista de Tarefas"
          descriptionProject="Aplicação para listar todas as tarefas que você precisar executar. Você pode criar novas tarefas, marcar com concluídas e remover caso necessário."
          linkGitHub="https://github.com/yagoafonso/todo-list"
          linkDemo="https://todo-list-yagoafonso.vercel.app/"
          descriptionTecnologiesUsed="React - typescript - CSS Modules"
        />
        <ProjectCard
          src={imgProjectIgniteFeed}
          titleProject="Ignite Feed"
          descriptionProject="Feed de publicações de uma rede social, nela você consegue comentar e curtir as postagens."
          linkToGitHub="https://github.com/yagoafonso/ignite-feed"
          linkToViewProject="https://ignitefeed-xi.vercel.app/"
          descriptionTecnologiesUsed="React - typescript - CSS Modules"
        />
        <ProjectCard 
          src={imgProjectEsports}
          titleProject="Encontre seu duo"
          descriptionProject="Aplicação ajudar você a encontrar seu duo. Nela você consegue se cadastrar e ver pessoas que estão procurando por duo no game."
          linkToGitHub="https://github.com/yagoafonso/nlw_esports"
          linkToViewProject="https://nlw-esports-nu.vercel.app/"
          descriptionTecnologiesUsed="React - Typescript - Tailwind Css - Node.JS"
        />
        <ProjectCard
          src={imgProjectFeedback}
          titleProject="Feedback"
          descriptionProject="Aplicação de um widget completo e acessível que pode ser utilizado em múltiplos projetos para coletar feedbacks dos usuários."
          linkToGitHub="https://github.com/yagoafonso/nlw_return_impulse"
          linkToViewProject="https://nlw-return-impulse-pink-two.vercel.app/"
          descriptionTecnologiesUsed="React - Typescript - Tailwind CSS"
        />
      </ContainerProjectCards>
    </ContainerProjects>
  );
}