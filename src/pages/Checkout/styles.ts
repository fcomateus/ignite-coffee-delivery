import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;

  div h3 {
    margin-bottom: 1rem;
  }

  div:nth-child(1) {
    width: 60%;
  }

  div:nth-child(2) {
    width: 40%;
  }
`

export const Form = styled.form`
  border: 1px solid red;
`

export const CartPanel = styled.aside`
  border: 1px solid blue;
`