import styled from "styled-components";

export const Container = styled.main`

    h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme['yellow-dark']};   
    }
`

export const ContentWrapper = styled.div`
    margin-top: 2.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const ShowWishDetails = styled.section`
    border: 1px solid;
    border-radius: 0 36px;
    border-image: linear-gradient(45deg, purple, orange) 1;
    
    padding: 2.5rem 12rem 2.5rem 2.5rem;
    
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;


    
`

export const InfoWithIconContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`