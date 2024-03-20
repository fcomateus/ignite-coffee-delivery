import { 
    Container,
    FormWrapper,
    FormContainer,
    TitleWithIcon,
    DeliveryDataSection,
    CartShowWrapper,
    PaymentMethodSection,
    PaymentOptionWrapper,
    PaymentOptions,
    PaymentOption,
    Form,
    CartPanel,
    ShowItemInCart,
    CoffeeImageWrapper,
    WishDataAndControls,
    WishControls,
    ButtonRemoveWish,
    PriceLabel,
    NoWhishes,
    ConfirmWish,
    WishSummary,
    ConfirmWishButton,
    Input
} from "./styles"

import { ControlQuantity } from "../../components/ControlQuantity"

import { useTheme } from "styled-components"
import { 
    MapPinLine, 
    Trash, 
    CurrencyDollarSimple,
    CreditCard,
    Bank,
    Money
} from "@phosphor-icons/react"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"

import { formatPriceToBRL } from "../../utils"

import { useForm } from "react-hook-form"

import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from 'zod'



export function Checkout() {
    const { 
        items, 
        removeFromCart, 
        addUnitWishInCart, 
        removeUnitWishInCart
    } = useContext(CartContext)

    const newWishValidationSchema = zod.object({
        cep: zod.string()
            .min(8, 'O CEP deve ter 8 dígitos')
            .max(8, 'O CEP deve ter 8 dígitos'),
        street: zod.string().min(1, 'Informe a rua'),
        number: zod.string().min(1, 'Informe o número'),
        complement: zod.string().optional(),
        city: zod.string().min(1, 'Informe a cidade'),
        uf: zod.string()
            .min(2, 'A Unidade Federativa (UF) é composta por 2 caracteres')
            .max(2, 'A Unidade Federativa (UF) é composta por 2 caracteres')
    })

    const { handleSubmit, register } = useForm<newWishFormData>({
        resolver: zodResolver(newWishValidationSchema),
        defaultValues: {
            cep: '',
            city: '',
            complement: '',
            number: '',
            street: '',
            uf: ''
        }
    })

    type newWishFormData = zod.infer<typeof newWishValidationSchema>

    const theme = useTheme()
    const iconSize = 22
    const deliveryTax = 3.50
    
    let totalFromItems = 0

    for(const item of items) {
        totalFromItems+= item.price
    }

    const totalToPay = totalFromItems + deliveryTax

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

    function handleCreateNewWish(data: newWishFormData) {
        console.log(data);
        
    }

    return (
        <Container>
            <FormWrapper> 
                <h3>Complete seu pedido</h3>

                <FormContainer onSubmit={handleSubmit(handleCreateNewWish)}>
                    <Form>
                        <TitleWithIcon>
                            <MapPinLine 
                                size={iconSize}
                                color={theme['yellow-dark']}
                            />

                            <section>
                                <h6>Endereço de entrega</h6>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </section>

                        </TitleWithIcon>

                        <DeliveryDataSection>
                            <Input 
                                placeholder="CEP"
                                gridtemplatearea="cep"
                                id="cep"
                                {...register("cep")}
                            />

                            <Input 
                                placeholder="Rua"
                                gridtemplatearea="street"
                                id="street"
                                {...register("street")}
                            />

                            <Input 
                                placeholder="Número"
                                gridtemplatearea="number"
                                id="number"
                                {...register("number")}
                            />

                            <Input 
                                placeholder="Complemento"
                                gridtemplatearea="complement"
                                notification="Opcional"
                                id="complement"
                                {...register("complement")}
                            />

                            <Input 
                                placeholder="Bairro"
                                gridtemplatearea="neighboorhood"
                                id="neighboorhood"
                                {...register("neighboorhood")}
                            />

                            <Input 
                                placeholder="Cidade"
                                gridtemplatearea="city"
                                id="city"
                                {...register("city")}
                            />

                            <Input 
                                placeholder="UF"
                                gridtemplatearea="uf"
                                id="uf"
                                {...register("uf")}
                            />
                        </DeliveryDataSection>

                    </Form>


                    <PaymentMethodSection>
                        <TitleWithIcon>
                            <CurrencyDollarSimple 
                                size={iconSize}
                                color={theme['purple']}
                            />

                            <section>
                                <h6>Endereço de entrega</h6>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </section>

                        </TitleWithIcon>

                        <PaymentOptions>
                            <PaymentOptionWrapper>
                                <PaymentOption type="radio" name="payment-method" id="credit-card"/>
                                <label htmlFor="credit-card">
                                    <CreditCard 
                                        size={iconSize}
                                        color={theme['purple']}
                                    />
                                    Cartão de crédito
                                </label>
                            </PaymentOptionWrapper>

                            <PaymentOptionWrapper>
                                <PaymentOption type="radio" name="payment-method" id="debit-card"/>
                                <label htmlFor="debit-card">
                                    <Bank 
                                        size={iconSize}
                                        color={theme['purple']}
                                    />
                                    Cartão de débito
                                </label>
                            </PaymentOptionWrapper>

                            <PaymentOptionWrapper>
                                <PaymentOption type="radio" name="payment-method" id="money"/>
                                <label htmlFor="money">
                                    <Money 
                                        size={iconSize}
                                        color={theme['purple']}
                                    />
                                    Dinheiro
                                </label>
                            </PaymentOptionWrapper>
                        </PaymentOptions>

                    </PaymentMethodSection>
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
                                                    size={iconSize}
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
                        <NoWhishes>
                            Adicione itens ao seu carrinho!
                        </NoWhishes>
                    }

                    {
                        items.length > 0 ?
                        
                        <ConfirmWish>
                            <WishSummary>
                                <p>Total de itens</p>
                                <p>R$ {formatPriceToBRL(totalFromItems.toFixed(2))}</p>
                            </WishSummary>

                            <WishSummary>
                                <p>Entrega</p>
                                <p>R$ {formatPriceToBRL(deliveryTax)}</p>
                            </WishSummary>

                            <WishSummary>
                                <h3>Total</h3>
                                <h3>R$ {formatPriceToBRL(totalToPay)}</h3>
                            </WishSummary>

                            <ConfirmWishButton>
                                Confirmar pedido
                            </ConfirmWishButton>
                        </ConfirmWish>
                        :
                        ''
                    }
                </CartPanel>
            </CartShowWrapper>

        </Container>
    )
}