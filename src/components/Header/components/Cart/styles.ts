import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    padding: 10px 8px;
    border-radius: 6px;

    background-color: ${({ theme }) => theme['yellow-light']};
`

export const QuantityIndicator = styled.div`
    height: 20px;
    width: 20px;

    display: flex;
    align-items: center;
    justify-content: center; 

    position: absolute;
    
    bottom: 25px;
    left: 25px;

    font-weight: bold;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme['yellow-dark']};

    border-radius: 50%;
    padding: 12px;
`