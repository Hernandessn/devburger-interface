import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 100px;
    padding-left: 40px;
    padding-bottom: 40px;

    .carousel-item{
        padding-right: 60px;
    }
    overflow-x: hidden;

    .react-multi-carousel-list{
        overflow: visible;
    }
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
    color: #61a120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-top: 70px;

    &::after{
        content: '';
        position: absolute;
        width: 56px;
        bottom: 0;
        height: 4px;
        background-color: #61a120;
        left: calc(50% - 28px);
    }
`;

