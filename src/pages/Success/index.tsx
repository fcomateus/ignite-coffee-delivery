import { Container, ContentWrapper, ShowWishDetails, InfoWithIconContentWrapper } from "./styles";

import { InfoWithIcon } from "../../components/InfoWithIcon";

import { MapPin, Timer, CurrencyDollarSimple } from "@phosphor-icons/react";

import { useTheme } from "styled-components";

import { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";

import deliveryGuy from '../../assets/delivery_guy.png'

export function Success() {
    const theme = useTheme()

    const {
        address
    } = useContext(CartContext)

    const {
        city,
        neighboorhood,
        number,
        paymentMethod,
        street,
        uf,
    } = address

    const paymentMethodFormatted = formatPaymentMethod(paymentMethod)

    const iconSize = 18

    function formatPaymentMethod(paymentMethod: string) {
        const paymentMethodTranslator = {
            'credit-card' : 'Cartão de Crédito',
            'debit-card' : 'Cartão de Débito',
            'money' : 'Dinheiro' 
        }

        return paymentMethodTranslator[paymentMethod]
    }

    return (
        <Container>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <ContentWrapper>
                <ShowWishDetails>
                    <InfoWithIcon 
                        icon={<MapPin size={iconSize} weight="fill" color={theme['white']}/>}
                        iconBackgroundColor={theme['purple']}
                    >
                        
                        <InfoWithIconContentWrapper>
                            <span>Entrega em <b>{street}, {number}</b></span>
                            <span>{neighboorhood} - {city}, {uf}</span>
                        </InfoWithIconContentWrapper>
                    </InfoWithIcon>

                    <InfoWithIcon 
                        icon={<Timer size={iconSize} weight="fill" color={theme['white']}/>}
                        iconBackgroundColor={theme['yellow']}
                    >
                        <InfoWithIconContentWrapper>
                            <span>Previsão de entrega</span>
                            <b>20 min - 30 min</b>
                        </InfoWithIconContentWrapper>
                    </InfoWithIcon>

                    <InfoWithIcon 
                        icon={<CurrencyDollarSimple size={iconSize} weight="regular" color={theme['white']}/>}
                        iconBackgroundColor={theme['yellow-dark']}
                    >
                        <InfoWithIconContentWrapper>
                            <span>Pagamento na entrega</span>
                            <b>{paymentMethodFormatted}</b>
                        </InfoWithIconContentWrapper>
                    </InfoWithIcon>

                </ShowWishDetails>

                <div>
                    <img src={deliveryGuy} alt="Desenho de entregador" />
                </div>

            </ContentWrapper>
        </Container>
    )
}