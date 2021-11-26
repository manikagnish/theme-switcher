import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        /* primary */
        --clr-green: hsl(163, 72%, 41%);
        --clr-red: hsl(356, 69%, 56%);
        --clr-facebook: hsl(208, 92%, 53%);
        --clr-twitter: hsl(203, 89%, 53%);
        --clr-instagram-light: hsl(37, 97%, 70%);
        --clr-instagram-dark: hsl(37, 97%, 70%), hsl(329, 70%, 58%);
        --clr-instagram-gradient: hsl(329, 70%, 58%);
        --clr-youtube: hsl(348, 97%, 39%);
        --clr-toggle-gradient: hsl(210, 78%, 56%), hsl(146, 68%, 55%);
        --clr-white: hsl(0, 0%, 100%);

        /* dark-theme */
        --clr-bg-dark: hsl(230, 17%, 14%);
        --clr-bg-pattern-dark: hsl(232, 19%, 15%);
        --clr-bg-card-dark: hsl(228, 28%, 20%);
        --clr-bg-card-dark-hover: hsl(228, 28%, 25%);
        --clr-text-blue-dark: hsl(228, 34%, 66%);

        /* light-theme */
        --clr-bg-pattern-light: hsl(225, 100%, 98%);
        --clr-bg-card-light: hsl(227, 47%, 96%);
        --clr-bg-card-light-hover: hsl(227, 47%, 90%);
        --clr-text-gray-light: hsl(228, 12%, 44%);
        --clr-text-blue-light: hsl(230, 17%, 14%);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 14px;
        font-family:'Inter', sans-serif; ;
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
        padding: 0 10vw;
    }
`;
