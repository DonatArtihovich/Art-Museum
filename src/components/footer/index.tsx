import { FooterWrapper, LogoImage, ModsenImage } from "./styled";
import logoImage from '@assets/images/light-logo.svg'
import modsenImage from '@assets/images/modsen.svg'

export default function Footer() {
    return (
        <FooterWrapper>
            <LogoImage src={logoImage} />
            <ModsenImage src={modsenImage} />
        </FooterWrapper>
    )
}