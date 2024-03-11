import { 
    Container, 
    ImageWrapper,
    TagsWrapper,
    DescriptionWrapper,
    PriceAndActionsWrapper,
    PriceWrapper,
    ActionsWrapper,
    AddToCartButton
} from "./styles";

import { ControlQuantity } from "../ControlQuantity";

import { Tag } from "../Tag/index";

import { ShoppingCart } from '@phosphor-icons/react'

import { useTheme } from "styled-components";
import { useState, useContext, useEffect } from "react";

import { CartContext } from "../../contexts/CartContext";

import { formatPriceToBRL } from "../../utils";
interface CardProps {
    title: string,
    description: string,
    price: number,
    tags: string[],
    imagePath: string,
    imageDescription: string
}

export function Card({ title, description, price, tags, imagePath, imageDescription }: CardProps) {

    const { addToCart, items } = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)

    const theme = useTheme()

    const priceFormatted = formatPriceToBRL(price)

    function handleAddQuantity() {
        setQuantity(state => state + 1)
    }

    function handleReduceQuantity() {
        if(quantity > 1) {
            setQuantity(state => state - 1)
        }
    }

    function handleAddToCart() {
        const item = {
            title,
            imagePath,
            price,
            quantity
        }
        addToCart(item)
        
    }

    useEffect(() => {
        const coffeeInList = items.find(item => item.title === title)

        if(coffeeInList) {
            setQuantity(coffeeInList.quantity)
        }

    }, [items])

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

                    <ControlQuantity 
                        quantity={quantity}
                        handleAddQuantity={handleAddQuantity}
                        handleReduceQuantity={handleReduceQuantity}
                    />
                    <AddToCartButton onClick={handleAddToCart}>
                        <ShoppingCart weight='fill' color={theme['white']} size={22}/>
                    </AddToCartButton>

                </ActionsWrapper>

            </PriceAndActionsWrapper>

        </Container>
    )
}