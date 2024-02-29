import { Container } from "./styles";
import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.png'
import { useEffect } from "react";

export function Header() {

    let cityName = 'Fortaleza'
    let stateAcronym = 'CE'

    useEffect(() => {
        fetchLocationInfo()
    }, [])

    // async function getVisitorIP() {
    //     try {
    //         const response = await fetch('https://api.ipify.org')
    //         const visitorIp = await response.text()
    //         await fetchIPInfo(visitorIp)
    //     } catch(error) {
    //         console.log('Failed to fetch IP', error);
    //     }
    // }

    async function fetchLocationInfo() {
        try {
            // const response = await fetch(`http://ip-api.com/json/${ip}`)
            const response = await fetch(`https://ipapi.co/json`)
            const data = await response.json()
            cityName = data.city
            stateAcronym = data.region_code
            console.log('location data', data);
            
        } catch(error) {
            console.log('Failed to fetch location info', error);
        }
    }

    return (
        <Container>
            <img src={coffeDeliveryLogo} alt="Logo Coffee Delivery" />
            <hr />
            <span>{cityName}</span>
            <span>{stateAcronym}</span>
        </Container>
    )
}