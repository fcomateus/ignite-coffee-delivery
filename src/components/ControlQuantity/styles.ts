import styled from "styled-components";

export const Container = styled.div`
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

