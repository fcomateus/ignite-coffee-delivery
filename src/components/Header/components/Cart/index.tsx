import { Container, QuantityIndicator } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

export function Cart() {
    const theme = useTheme()

    const { items } = useContext(CartContext)

    return (
        <Container>
            <ShoppingCart 
                size={22}
                color={theme['yellow-dark']}
                weight='fill'
            />

            {
                items.length > 0 ?
                <QuantityIndicator>
                    { items.length }
                </QuantityIndicator>
                :
                <></>
            }

        </Container>
    )
}