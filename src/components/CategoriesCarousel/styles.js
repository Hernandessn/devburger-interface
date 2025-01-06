import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
    .carousel-item {
        padding-right: 50px; /* Reduzido para otimizar espaço */
    }

    padding-left: 15px; /* Alinha o início */
    max-width: 100%; /* Garante que o contêiner não seja maior que a tela */
    overflow: hidden; /* Evita estouro visual */

    .react-multiple-carousel__arrow--left{
        left: 15px;
        top: 10px;
    }
    .react-multiple-carousel__arrow--right{
        right: 15px;
        top: 10px;
    }

`;


export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;

    &::after{
        content: '';
        position: absolute;
        width: 56px;
        bottom: 0;
        height: 4px;
        background-color: #9758a6;
        left: calc(50% - 28px);
    }
`;

export const ContainerItems = styled.div`
    background: url('${props => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-top: 30px;
    cursor: grab;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;


`;

export const CategoryButton = styled(Link)`
        color: #fff;
        background-color: rgba(0,0,0,0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 15.5px;
        font-weight: bold;
        margin-top: 50px;
        text-decoration: none;

        &:hover{
            background-color: #9758a6;
        }

`;