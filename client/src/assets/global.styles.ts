import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 20px 60px;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Open Sans Condensed",
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    } 

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    a {
        text-decoration: none;
        color: black;
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
