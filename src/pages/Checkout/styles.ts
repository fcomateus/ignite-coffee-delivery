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

  padding: 1rem 2.5rem;
`

export const ShowItemInCart = styled.div`
  display: flex;
  gap: 20px;
  position: relative;

  padding: 1.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme['base-button']};
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
  gap: 8px;
`

export const WishControls = styled.div`
  height: 2rem;
  display: flex;
  gap: 8px;
`

export const ButtonRemoveWish = styled.button`
  background: ${({ theme }) => theme['base-button']};
  
  border-radius: 6px;
  padding: 6.5px 8px;

  text-transform: uppercase;

  color: ${({ theme }) => theme['base-text']};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }
`

export const PriceLabel = styled.h4`
  position: absolute;
  right: 0;
  top: 1.5rem;
  color: ${({ theme }) => theme['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
`