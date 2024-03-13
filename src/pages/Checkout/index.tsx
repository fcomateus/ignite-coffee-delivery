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
    ButtonRemoveWish,
    PriceLabel
} from "./styles"

import { ControlQuantity } from "../../components/ControlQuantity"

import { useTheme } from "styled-components"
import { MapPinLine, Trash } from "@phosphor-icons/react"
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
    const deliveryTax = 3.50

    function handleAddUnitInCart(itemTitle: string) {
        console.log('handle add unit');
        addUnitWishInCart(itemTitle)
    }

    function handleRemoveUnitInCart(itemTitle: string) {
        console.log('handle remove unit');
        removeUnitWishInCart(itemTitle)
    }

    function handleRemoveFromCart(itemTitle: string) {
        console.log('handle remove from cart');
        removeFromCart(itemTitle)
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
                        items.length > 0 ?
                        items.map(item => {
                            const totalPrice = parseFloat(parseFloat(item.price * item.quantity).toFixed(2))
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
                                            
                                            <ButtonRemoveWish
                                                onClick={() => handleRemoveFromCart(item.title)}
                                            >
                                                <Trash 
                                                    size={mapPinSize}
                                                    color={theme['purple']}
                                                />
                                                Remover
                                            </ButtonRemoveWish>
                                            
                                        </WishControls>
                                    </WishDataAndControls>
                                        
                                    <PriceLabel>R$ {formattedPrice}</PriceLabel>
                                </ShowItemInCart>
                            )
                        })
                        :
                        'Nada por aqui'
                    }
                </CartPanel>
            </CartShowWrapper>

        </Container>
    )
}