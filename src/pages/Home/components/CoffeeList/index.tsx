import { Container } from "./styles";
import { Card } from "../../../../components/Card";

import expresso from '../../../../assets/expresso.png'

export function CoffeeList() {
    return (
        <Container>
            <Card 
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
                price={19.90}
                tags={['Tradicional', 'Com leite']}
                imagePath={expresso}
                imageDescription="Expresso tradicional"

            />
            <Card 
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
                price={9.90}
                tags={['Tradicional']}
                imagePath={expresso}
                imageDescription="Expresso tradicional"

            />
            <Card 
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
                price={9.90}
                tags={['Tradicional']}
                imagePath={expresso}
                imageDescription="Expresso tradicional"

            />
            <Card 
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
                price={9.90}
                tags={['Tradicional']}
                imagePath={expresso}
                imageDescription="Expresso tradicional"

            />
            <Card 
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
                price={9.90}
                tags={['Tradicional']}
                imagePath={expresso}
                imageDescription="Expresso tradicional"

            />
        </Container>
    )
}