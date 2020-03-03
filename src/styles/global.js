import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
    
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
    }

    body {
        font-family: "Roboto";
        background: linear-gradient(0deg, #000, #FFC500)
    }
`;
