import { useTheme } from "styled-components";
import { Container } from "./styles";
import { Plus, Minus } from '@phosphor-icons/react'

interface ControlQuantityProps {
  quantity: number,
  handleAddQuantity: (itemTitle?: string) => void,
  handleReduceQuantity: (itemTitle?: string) => void
}

export function ControlQuantity({ quantity, handleAddQuantity, handleReduceQuantity }: ControlQuantityProps) {

  const controlButtonsSize = 16

  const theme = useTheme()

  return (
    <Container>
      <button onClick={handleReduceQuantity}>
          <Minus size={controlButtonsSize} color={theme['purple']} />
      </button>
      <p>{quantity}</p>
      <button onClick={handleAddQuantity}>
          <Plus size={controlButtonsSize} color={theme['purple']} />
      </button>
    </Container>
  )
}