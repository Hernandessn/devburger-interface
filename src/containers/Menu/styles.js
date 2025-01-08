import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburger.jpg'
import Background from '../../assets/background.png';
import { Link } from "react-router-dom";

export const Container = styled.div` 
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
), url('${Background}');
background-size: cover;
background-position: center top; /* Coloca a imagem mais para cima */
background-attachment: fixed; /* Fixar a imagem de fundo enquanto rola */
height: 350vh;





    
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    position: relative;

    background:  linear-gradient(
            rgba(0, 0, 0, 0.6), /* Máscara preta com 50% de opacidade */
            rgba(0, 0, 0, 0.6)
        ), url('${BannerHamburger}') no-repeat;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;
        left: 20%;
        top: 30%;
    }
    
    span{
        display: block;
        color: #fff;
        font-size: 20px;

    }


`;

export const CategoryMenu = styled.div`
     display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
   text-decoration: none;
   cursor: pointer;
    background: none;
    color:${(props)=>props.$isActiveCategory ? '#9758a6' : '#696969'} ;
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props)=> props.$isActiveCategory && '3px solid #9758a6'} ;

`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1200px;
    gap: 60px;
    margin: 50px auto;

`;

export const ButtonHome = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 150px;
    bottom: -5px;
    width: 5%;
    height: 52px;
    border: 0;
    border-radius: 5px;
    background-color: #9758a6;

    font-size: 30px;
    color: #fff;

    &:hover{
        background-color: #6f3576;
       
        border-radius: 5px;
    }
`;