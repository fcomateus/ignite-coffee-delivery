import { 
    Container, 
    ImageWrapper,
    TagsWrapper,
    DescriptionWrapper,
    PriceAndActionsWrapper,
    PriceWrapper,
    ActionsWrapper,
    ButtonControls,
    AddToCartButton
} from "./styles";

import { Tag } from "../Tag/index";

import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'

import coffeeImage from '../../assets/americano.png'
import { useTheme } from "styled-components";
import { useState } from "react";

interface CardProps {
    title: string,
    description: string,
    price: number,
    tags: string[],
    imagePath: string,
    imageDescription: string
}

export function Card({ title, description, price, tags, imagePath, imageDescription }: CardProps) {

    const [quantity, setQuantity] = useState(1)

    const theme = useTheme()

    const controlButtonsSize = 16

    const splitedPrice = price.toString().split('.')
    
    const integerPartPrice = splitedPrice[0]
    const floatPartPrice = splitedPrice[1].padEnd(2, '0')

    const priceFormatted = `${integerPartPrice},${floatPartPrice}`    


    function handleAddQuantity() {
        setQuantity(state => state + 1)
    }

    function handleReduceQuantity() {
        if(quantity > 1) {
            setQuantity(state => state - 1)
        }
    }

    return (
        <Container>
            <ImageWrapper>
                <img src={imagePath} />
            </ImageWrapper>

            <TagsWrapper>
                {
                    tags.map(tag => {
                        return (
                            <Tag
                                key={tag}
                                title={tag}
                            />
                        )
                    })
                }

            </TagsWrapper>

            <DescriptionWrapper>
                <h3>{ title }</h3>
                <p>{ description }</p>
            </DescriptionWrapper>

            <PriceAndActionsWrapper>
                <PriceWrapper>
                    <p>R$ <span>{priceFormatted}</span></p>
                </PriceWrapper>

                <ActionsWrapper>
                    <ButtonControls>
                        <button onClick={handleReduceQuantity}>
                            <Minus size={controlButtonsSize} color={theme['purple']} />
                        </button>
                        <p>{quantity}</p>
                        <button onClick={handleAddQuantity}>
                            <Plus size={controlButtonsSize} color={theme['purple']} />
                        </button>
                    </ButtonControls>

                    <AddToCartButton>
                        <ShoppingCart weight='fill' color={theme['white']} size={22}/>
                    </AddToCartButton>

                </ActionsWrapper>

            </PriceAndActionsWrapper>

        </Container>
    )
}