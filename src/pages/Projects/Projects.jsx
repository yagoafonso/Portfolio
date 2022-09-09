import React from "react";
import { ProjectCard } from "../../components/Project/ProjectCard";
import  ProjectFeedback  from "../../assets/projeto_nlw_return.jpg"

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
          src={ProjectFeedback}
          title="Feedback"
          text="Projeto desenvolvido durante o evento NLW Return promovido pela Rocketseat. O front-end foi desenvolvido utilizando ReactJS TailwindCSS e Headless UI. Na parte de back-end foi utilizado Node.js e TypeScript aplicando os conceitos de SOLID e testes automatizados, e como a gravar informações no banco de dados utilizando o prisma."
          linkGitHub="https://github.com/yagoafonso/nlw_return_impulse"
          linkDemo="https://nlw-return-impulse-pink-two.vercel.app/"
        />
                <ProjectCard
          src={ProjectFeedback}
          title="Feedback"
          text="Projeto desenvolvido durante o evento NLW Return promovido pela Rocketseat. O front-end foi desenvolvido utilizando ReactJS TailwindCSS e Headless UI. Na parte de back-end foi utilizado Node.js e TypeScript aplicando os conceitos de SOLID e testes automatizados, e como a gravar informações no banco de dados utilizando o prisma."
          linkGitHub="https://github.com/yagoafonso/nlw_return_impulse"
          linkDemo="https://nlw-return-impulse-pink-two.vercel.app/"
        />
                <ProjectCard
          src={ProjectFeedback}
          title="Feedback"
          text="Projeto desenvolvido durante o evento NLW Return promovido pela Rocketseat. O front-end foi desenvolvido utilizando ReactJS TailwindCSS e Headless UI. Na parte de back-end foi utilizado Node.js e TypeScript aplicando os conceitos de SOLID e testes automatizados, e como a gravar informações no banco de dados utilizando o prisma."
          linkGitHub="https://github.com/yagoafonso/nlw_return_impulse"
          linkDemo="https://nlw-return-impulse-pink-two.vercel.app/"
        />
                        <ProjectCard
          src={ProjectFeedback}
          title="Feedback"
          text="Projeto desenvolvido durante o evento NLW Return promovido pela Rocketseat. O front-end foi desenvolvido utilizando ReactJS TailwindCSS e Headless UI. Na parte de back-end foi utilizado Node.js e TypeScript aplicando os conceitos de SOLID e testes automatizados, e como a gravar informações no banco de dados utilizando o prisma."
          linkGitHub="https://github.com/yagoafonso/nlw_return_impulse"
          linkDemo="https://nlw-return-impulse-pink-two.vercel.app/"
        />
      </ContainerProjectCards>
    </ContainerProjects>
  );
}