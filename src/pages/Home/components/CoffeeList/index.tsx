import { Container } from "./styles";
import { Card } from "../../../../components/Card";

import { coffeeMock } from "../../../../mocks/coffees";

export function CoffeeList() {
    return (
        <Container>

            {
                coffeeMock.map(mockItem => {
                    return (
                        <Card 
                            key={mockItem.title}
                            title={mockItem.title}
                            description={mockItem.description}
                            price={mockItem.price}
                            tags={mockItem.tags}
                            imagePath={mockItem.imagePath}
                            imageDescription={mockItem.imageDescription}
                        />
                    )
                })
            }

        </Container>
    )
}