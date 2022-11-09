import styled from 'styled-components';

const SideNewsStyled = styled.aside`
    width: 63%;
    background-color: rgb(2, 0, 24);
    color: #fff;
    h2 {
        color: #eca651;
    }
    div {
        .item-aside-news:hover .title-news{
            color: #eca651;
        }
        div  {
            p {
                color: #d3d3d3;
            }
            hr {
                color: #d3d3d3;
            }
        }
    }
`;

export default SideNewsStyled;