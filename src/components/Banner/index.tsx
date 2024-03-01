import { Container } from './styles'
import mainImage from '../../assets/main.png'

export function Banner() {
    return(
        <Container>
            <div>
                <h1>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p>Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            
            <img src={mainImage} alt='Grande copo de café'/>
        </Container>
        
    )
}