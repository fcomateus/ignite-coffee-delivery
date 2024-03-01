import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    max-width: 22rem;
`
interface IconWrapperProps {
    iconbackgroundcolor: string
}

export const IconWrapper = styled.div<IconWrapperProps>`
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    
    background: ${({ iconbackgroundcolor }) => iconbackgroundcolor};
`