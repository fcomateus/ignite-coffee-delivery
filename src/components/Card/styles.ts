import styled from "styled-components";

export const Container = styled.div`
    min-height: 310px;
    min-width: 256px;

    /* max-height: 310px; */
    max-width: 256px;

    padding: 0 24px 20px;
    
    border-radius: 6px 36px;
    background: ${({ theme }) => theme['base-card']};
    
`

export const ImageWrapper = styled.div`
    margin: -20px auto;
    text-align: center;
`

export const TagsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;


    margin: 24px auto;
`

export const DescriptionWrapper = styled.div`
    text-align: center;

    h3 {
        color: ${({ theme }) => theme['base-subtitle']};
    }

    p {
        margin-top: 8px;
        font-size: 0.875rem;
        color: ${({ theme }) => theme['base-label']};
    }
`

export const PriceAndActionsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const PriceWrapper = styled.div`
    display: flex;

    margin-top: 2rem;

    p {
        font-size: 0.875rem;
    }

    span {
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Baloo 2', sans-serif;
    }
`

export const ActionsWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

`

export const ButtonControls = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    padding: 12px 8px;

    border-radius: 6px;

    background: ${({ theme }) => theme['base-button']};

    button:hover svg{
        fill: ${({ theme }) => theme['purple-dark']};
    }

`

export const AddToCartButton = styled.button`
    background: ${({ theme }) => theme['purple-dark']};
    padding: 8px;
    border-radius: 6px;

    &:hover {
        background: ${({ theme }) => theme['purple']};
    }
`