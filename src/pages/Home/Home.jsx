import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import  homeLogo  from "../../assets/avatar_home.svg"
import { 
    Container,
    ContentInfo,
    ContentImg,
    Developer,
    Intro,
    Img,
    Name,
    Span
} from './style';
export function Home() {

    return (
        <Container>
            <ContentInfo>
                <Intro>
                    <Span>Olá, eu sou</Span>
                    <Name>Yago Afonso</Name>
                </Intro>
                <Developer>
                    <Typewriter
                        words={['Desenvolvedor Front-End.']}
                        cursor
                        loop={1}
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={10}
                        delaySpeed={100}
                    />
                </Developer>
            </ContentInfo>
            <ContentImg>
                <Img src={homeLogo} alt="Imagem pessoa sentada em frente ao computador." />
            </ContentImg>
        </Container>
    );
}