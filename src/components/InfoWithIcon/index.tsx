import { ReactNode } from "react";
import { Container, IconWrapper } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode
    iconBackgroundColor: string
    children: ReactNode
}

export function InfoWithIcon({ icon, iconBackgroundColor, children }: InfoWithIconProps) {
    return (
        <Container>
            <IconWrapper
                iconbackgroundcolor={iconBackgroundColor}
            >
                { icon }
            </IconWrapper>
            { children }
        </Container>
    )
    
}