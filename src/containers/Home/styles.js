import styled from "styled-components";

import BannerHome from '../../assets/banner-home.jpg';
import Background from '../../assets/background.png';

export const Banner = styled.div`
    background: 
        linear-gradient(
            rgba(0, 0, 0, 0.5), /* Máscara preta com 50% de opacidade */
            rgba(0, 0, 0, 0.5)
        ),
        url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 50vh;

    h1{
        font-family: "Road Rage", serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;

export const Container = styled.section`
    background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
), url('${Background}');
    background-size: cover;
    background-position: center;
    height: 150vh;
    padding-top: 50px; /* Distância extra para o conteúdo */
    

`;

export const Content = styled.div`
    padding-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
    gap: 100px;
`;