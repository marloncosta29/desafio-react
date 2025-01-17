import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    .App {
    text-align: center;
    }

    .App-logo {
    height: 40vmin;
    pointer-events: none;
    }

    @media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
    }

    .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    }

    .App-link {
    color: #61dafb;
    }

    @keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    }

    #text-area{
        &:focus {
            border: 1px solid ${(props) => props.theme.colors.green500};
            box-shadow: 0 0 5px ${(props) => props.theme.colors.green500};
        }
    }

`;
