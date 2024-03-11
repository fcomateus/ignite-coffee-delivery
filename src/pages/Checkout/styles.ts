import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`

export const FormWrapper = styled.main`
  width: 60%;

  h3 {
    margin-bottom: 1rem;
  }

`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;
`

export const Form = styled.form`
  background-color: ${({ theme }) => theme['base-card']};
`

export const PaymentMethod = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
`

export const titleWithIcon = styled.div`

`

export const Input = styled.input`

`

export const CartShowWrapper = styled.div`
  width: 40%;

  h3 {
    margin-bottom: 1rem;
  }
`

export const CartPanel = styled.aside`
  background-color: ${({ theme }) => theme['base-card']};

  padding: 2.5rem;
`

export const ShowItemInCart = styled.div`
  display: flex;
`

export const CoffeeImageWrapper = styled.div`
  height: 64px;
  width: 64px;

  img {
    max-width: 100%;
  }
`
export const WishDataAndControls = styled.div`
  display: flex;
  flex-direction: column;
`

export const WishControls = styled.div`
  display: flex;
  gap: 8px;
`

export const ButtonRemoveWish = styled.button`

`