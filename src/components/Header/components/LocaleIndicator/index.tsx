import { Container } from "./styles";
import { MapPin } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
interface LocaleIndicatorProps {
    city: string
    stateAcronym: string
}

export function LocaleIndicator({ city, stateAcronym }:LocaleIndicatorProps) {
    const theme = useTheme()

    return (
        <Container>
            <MapPin 
                size={22} 
                weight="fill"
                color={theme.purple}
            />
            <span>{city}, {stateAcronym}</span>
        </Container>
    )
}