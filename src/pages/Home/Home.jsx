import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import homeLogo from "../../assets/home-main.svg"
import { 
    ContainerHome,
    ContentShow,
    ContentImg
} from './style';
export function Home() {

    return (
        <ContainerHome>
            <ContentShow>
                <h1>Olá, sou<br/>
                <strong>Yago Afonso</strong><br/>
                <span style={{ color: 'var(--blueviolet-500)', fontWeight: '700' }}>
                    <Typewriter
                        words={['Desenvolvedor Front-End.']}
                        cursor
                        cursorStyle='|'
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={100}                
                    />
                </span>
                </h1>
            </ContentShow>
            <ContentImg>
                <img src={homeLogo} alt="" />
            </ContentImg>
        </ContainerHome>
    );
}