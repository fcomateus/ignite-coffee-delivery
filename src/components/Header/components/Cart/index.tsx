import { Container, QuantityIndicator } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

export function Cart() {
    const theme = useTheme()

    return (
        <Container>
            <ShoppingCart 
                size={22}
                color={theme['yellow-dark']}
                weight='fill'
            />

            <QuantityIndicator>
                3
            </QuantityIndicator>
        </Container>
    )
}