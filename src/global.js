import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
:root {
    --white: #ffffff;
    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;

    --blueviolet-300: #893dd0;
    --blueviolet-500: #8a2be2;
    --blueviolet-800: #6f1abd;


    --red-500: #F75A68;


}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    color: var(--white);
    -webkit-font-smoothing: antialiased;
}
body,input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
}
`