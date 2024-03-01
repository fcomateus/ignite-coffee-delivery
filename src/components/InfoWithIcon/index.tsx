import { ReactNode } from "react";
import { Container, IconWrapper } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode
    backgroundColor: string
    children: ReactNode
}

export function InfoWithIcon({ icon, backgroundColor, children }: InfoWithIconProps) {
    return (
        <Container>
            <IconWrapper
                iconBackgroundColor={backgroundColor}
            >
                { icon }
            </IconWrapper>
            { children }
        </Container>
    )
    
}