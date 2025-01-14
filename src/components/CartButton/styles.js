import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: ${(props) => props.theme.purple};
    width: 100%;
    border: 0;
    border-radius: 5px;
    font-size: 30px;
    color: #ffff;
    

    &:hover{
        background-color: #${(props) => props.theme.secondDarkPurple};
    }

`;