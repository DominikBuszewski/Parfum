import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
        width: 100vw;
        overflow-x: hidden;
    }



    * {
        margin: 0px;
	    padding: 0px;
	    box-sizing: border-box;
	    font-family: "Dancing Script", cursive;
    }


`;

export default GlobalStyle;
