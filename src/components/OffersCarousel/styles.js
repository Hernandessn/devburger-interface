import styled from "styled-components";


export const Container = styled.div`
    .carousel-item{
        padding-right: 60px;
    }

    padding-left: 40px;
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

export const ContainerItems = styled.div`
    background: url('${props => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-top: 30px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;

    p{
        color: #fff;
        background-color: rgba(0,0,0,0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 15.5px;
        font-weight: bold;
        margin-top: 50px;
    }
`;
