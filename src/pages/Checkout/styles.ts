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

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 12px;

`

export const Form = styled.div`
  background-color: ${({ theme }) => theme['base-card']};
  padding: 2.5rem;
`

export const PaymentMethodSection = styled.section`
  padding: 2.5rem;
  background-color: ${({ theme }) => theme['base-card']};
`

export const PaymentOptions = styled.div`
  display: flex;
  gap: 12px;
`

export const PaymentOptionWrapper = styled.div`
  background: ${({ theme }) => theme['base-button']};
  width: 12rem;
  border-radius: 6px;

  border: 1px solid transparent;

  transition: all 200ms;

  label {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;

    padding: 1rem;

    width: 100%;
    height: 100%;

  }

  &:hover {
    background: ${({ theme }) => theme['base-hover']};
  }

  &:has(input[type="radio"]:checked) {
    border-color: ${({ theme }) => theme['purple']};
    background: ${({ theme }) => theme['purple-light']};
  }
`

export const PaymentOption = styled.input`
  display: none;
`

export const TitleWithIcon = styled.div`
  display: flex;
  gap: 8px;

  margin-bottom: 2rem;

  section {
    line-height: 130%;
  }
  
  section h6 {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }

  section p {
    font-size: 0.9rem;
  }
`

interface InputStyleProps {
  gridtemplatearea: "cep" | "street" | "number" | "complement" | "neighboorhood" | "city" | "uf"
  notification?: string
}

export const Input = styled.input<InputStyleProps>`
  grid-area: ${({ gridtemplatearea }) => gridtemplatearea};
  padding: 12px;

  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme['base-button']};

  background: ${({ theme }) => theme['base-input']};

  &:focus {
    outline: 1px solid ${({ theme }) => theme['yellow-dark']};
  }
`

export const DeliveryDataSection = styled.section`
  display: grid;
  grid-template-areas: 
  "cep . ."
  "street street street"
  "number complement complement"
  "neighboorhood city uf";

  grid-template-columns: 35% 49% 16%;

  gap: 8px;
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

export const NoWhishes = styled.div`
  text-align: center;
`

export const ConfirmWish = styled.div`
  margin-top: 1.5rem;
`

export const WishSummary = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  h3 {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
  }
`

export const ConfirmWishButton = styled.button`
  background: ${({ theme }) => theme['yellow']};

  text-transform: uppercase;
  font-weight: bold;
  color: ${({ theme }) => theme['white']};

  width: 100%;
  padding: 0.8rem 0;

  border-radius: 6px;

  &:hover {
  background: ${({ theme }) => theme['yellow-dark ']};
  }
`