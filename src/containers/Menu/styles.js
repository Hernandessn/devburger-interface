import styled from "styled-components";
import BannerHamburger from '../../assets/banner-hamburger.jpg'
import Background from '../../assets/background.png';
import { Link } from "react-router-dom";

export const Container = styled.div` 
   background: 
         url('${Background}');
     background-size: cover;
     background-position: center;
     height: 200vh;
    
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
