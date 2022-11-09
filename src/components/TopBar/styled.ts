import styled from 'styled-components';

const TopBarStyled = styled.header`
    width: 80%;
    .icon-menu {
        display: none;
    }
    div {
        nav {
            ul {
                li {
                    margin-left: 30px;
                }
            }
        }
    }

    @media only screen and (max-width: 600px) {
        width: 80%;
        .icon-menu {
            display: block;
        }

        div {
            nav {
                display: none;
            }
        }
    }
`;

export default TopBarStyled;