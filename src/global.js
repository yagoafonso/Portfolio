import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
:root {

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