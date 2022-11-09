import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const globalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 600px) {
        .main-news-side-news {
            flex-direction: column;
        }
    }
`;

export default globalStyled;