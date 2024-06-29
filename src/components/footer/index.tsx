import imagesObj from "@constants/images";
import { FooterWrapper, LogoImage, ModsenImage } from "./styled";

export default function Footer() {
    return (
        <FooterWrapper>
            <LogoImage src={imagesObj.lightLogo} />
            <ModsenImage src={imagesObj.modsenLogo} />
        </FooterWrapper>
    )
}