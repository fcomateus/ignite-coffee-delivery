import { 
    Container,
    FormWrapper,
    FormContainer,
    CartShowWrapper,
    PaymentMethod,
    Form,
    CartPanel,
    ShowItemInCart,
    CoffeeImageWrapper,
    WishDataAndControls,
    WishControls,
    ButtonRemoveWish
} from "./styles"

import { ControlQuantity } from "../../components/ControlQuantity"

import { useTheme } from "styled-components"
import { MapPinLine } from "@phosphor-icons/react"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

import { formatPriceToBRL } from "../../utils"

export function Checkout() {
        const { 
            items, 
            removeFromCart, 
            addUnitWishInCart, 
            removeUnitWishInCart 
        } = useContext(CartContext)

        const theme = useTheme()
        const mapPinSize = 22

        function handleAddUnitInCart(itemTitle: string) {
            addUnitWishInCart(itemTitle)
        }

        function handleRemoveUnitInCart(itemTitle: string) {
            removeUnitWishInCart(itemTitle)
        }

        return (
        <Container>
            <FormWrapper>
                <h3>Complete seu pedido</h3>

                <FormContainer>
                    <Form>
                        aa
                    </Form>

                    <PaymentMethod>
                        aaa
                    </PaymentMethod>
                </FormContainer>


            </FormWrapper>

            <CartShowWrapper>
                <h3>Cafés selecionados</h3>
                <CartPanel>
                    {
                        items.map(item => {
                            const totalPrice = parseFloat(item.price * item.quantity).toFixed(2)
                            const formattedPrice = formatPriceToBRL(totalPrice)

                            return (
                                <ShowItemInCart key={item.title}>
                                    <CoffeeImageWrapper>
                                        <img src={item.imagePath} alt={item.imageDescription} />
                                    </CoffeeImageWrapper>

                                    <WishDataAndControls>
                                        <label>{ item.title }</label>

                                        <WishControls>
                                            
                                            <ControlQuantity
                                                quantity={ item.quantity }
                                                handleAddQuantity={() => handleAddUnitInCart(item.title)}
                                                handleReduceQuantity={() => handleRemoveUnitInCart(item.title)}
                                            />
                                            
                                            <ButtonRemoveWish>
                                                Remover
                                            </ButtonRemoveWish>
                                            
                                        </WishControls>
                                    </WishDataAndControls>
                                        
                                    <h5>R$ {formattedPrice}</h5>
                                </ShowItemInCart>
                            )
                        })
                    }
                </CartPanel>
            </CartShowWrapper>

        </Container>
    )
}