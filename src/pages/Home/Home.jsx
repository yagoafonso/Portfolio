import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import  homeLogo  from "../../assets/avatar_home.svg"
import { 
    ContainerHome,
    ContentShow,
    ContentImg
} from './style';
export function Home() {

    return (
        <ContainerHome>
            <ContentShow>
                <div>
                    <h1>Olá, eu sou</h1>
                    <h1><strong>Yago Afonso</strong></h1>              
                </div>
                <div>
                    <span>
                        <Typewriter
                            words={['Desenvolvedor Front-End.']}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={100}                
                        />
                    </span>
                </div>
            </ContentShow>
            <ContentImg>
                <img src={homeLogo} alt="Imagem pessoa sentada em frente ao computador." />
            </ContentImg>
        </ContainerHome>
    );
}