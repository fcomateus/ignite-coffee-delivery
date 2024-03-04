import { useEffect } from "react";
import { Container, LocaleAndCartWrapper } from "./styles";
import { LocaleIndicator } from "./components/LocaleIndicator";
import { Cart } from "./components/Cart";
import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.png'

import { NavLink } from "react-router-dom";

export function Header() {

    let cityName = 'Fortaleza'
    let stateAcronym = 'CE'

    useEffect(() => {
        fetchLocationInfo()
    }, [])

    async function fetchLocationInfo() {
        try {
            const response = await fetch(`https://ipapi.co/json`)
            const data = await response.json()
            cityName = data.city
            stateAcronym = data.region_code
            
        } catch(error) {
            console.log('Failed to fetch location info', error);
        }
    }

    return (
        <Container>
            <NavLink to='/'>
                <img src={coffeDeliveryLogo} alt="Logo Coffee Delivery" />
            </NavLink>

            <LocaleAndCartWrapper>
                <LocaleIndicator 
                    city={cityName}
                    stateAcronym={stateAcronym}
                />

                <NavLink to='/checkout'>
                    <Cart />
                </NavLink>
            </LocaleAndCartWrapper>
        </Container>
    )
}