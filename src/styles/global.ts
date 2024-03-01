import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme['background'] };
        color: ${({ theme }) => theme['base-text'] };
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme['base-title'] };
        font-family: 'Baloo 2', sans-serif;
    }

    h1 {
        font-size: 3rem;
        line-height: 130%;
    }

    label {
        color: ${({ theme }) => theme['base-subtitle'] };
    }
`