import { Container, BenefitsPresentation, InfoWithIconWrapper } from './styles'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'

import { 
    ShoppingCart,
    Package,
    Timer,
    Coffee
} from '@phosphor-icons/react'

import mainImage from '../../../../assets/main.png'
import { useTheme } from 'styled-components'

export function Banner() {
    const theme = useTheme()

    const iconSize = 18

    return(
        <Container>
            <div>

                <div>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>

                <BenefitsPresentation>
                    <InfoWithIconWrapper>
                        <InfoWithIcon
                            icon={<ShoppingCart size={iconSize} weight='fill' color={theme['white']}/>}
                            backgroundColor={theme['yellow-dark']}
                        >
                            
                            <span>Compra simples e segura</span>
                        </InfoWithIcon>

                        <InfoWithIcon
                            icon={<Package size={iconSize} weight='fill' color={theme['white']}/>}
                            backgroundColor={theme['base-subtitle']}
                        >
                            
                            <span>Compra simples e segura</span>
                        </InfoWithIcon>
                    </InfoWithIconWrapper>

                    <InfoWithIconWrapper>
                        <InfoWithIcon
                            icon={<Timer size={iconSize} weight='fill' color={theme['white']}/>}
                            backgroundColor={theme['yellow']}
                        >
                            
                            <span>Compra simples e segura</span>
                        </InfoWithIcon>

                        <InfoWithIcon
                            icon={<Coffee size={iconSize} weight='fill' color={theme['white']}/>}
                            backgroundColor={theme['purple']}
                        >
                            
                            <span>Compra simples e segura</span>
                        </InfoWithIcon>
                    </InfoWithIconWrapper>
                </BenefitsPresentation>

            </div>
            
            <img src={mainImage} alt='Grande copo de café'/>
        </Container>
        
    )
}