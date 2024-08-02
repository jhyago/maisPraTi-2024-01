import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: #F2F5E5;
    --color-primary: #9A9E51;
    --color-secundary: #DAE069;
    --color-hover-button: #656832;
    --color-disabled-button: gray;
  }
  
  body{
    background-color: var(--color-primary);
    font-family: "Merriweather Sans", sans-serif;
  }
`;

const GlobalCss = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            {children}
        </>
    );
};


export default GlobalCss;