import styled from "styled-components"

export const Container = styled.span`
  background: ${({ theme }) => theme['yellow-light']};
  color: ${({ theme }) => theme['yellow-dark']};

  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;

  padding: 4px 8px;
  border-radius: 100px;
`