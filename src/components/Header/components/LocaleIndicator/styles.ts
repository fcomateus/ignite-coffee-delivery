import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    
    padding: 10px 8px;
    border-radius: 6px;

    background: ${({ theme }) => theme['purple-light']};
    color: ${({ theme }) => theme['purple-dark']};
`