import { Container, Form, CartPanel } from "./styles"
import { useTheme } from "styled-components"
import { MapPinLine } from "@phosphor-icons/react"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

export function Checkout() {
        const { items } = useContext(CartContext)

        const theme = useTheme()
        const mapPinSize = 22

        return (
        <Container>
            <div>
                <h3>Complete seu pedido</h3>
                <Form>

                </Form>
            </div>

            <div>
                <h3>Cafés selecionados</h3>
                <CartPanel>
                    <pre>
                    { JSON.stringify(items) }
                    </pre>  
                </CartPanel>
            </div>
        </Container>
    )
}