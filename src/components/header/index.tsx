import {
    BurgerButton,
    BurgerLine,
    HeaderContent,
    HeaderWrapper,
    Link,
    LogoImage,
    MenuBackground,
    NavList,
    NavListItem,
    NavListItemImage,
    NavListItemTitle
} from "./styled";
import { LinkProps, useLocation } from "react-router-dom";
import { useState } from "react";
import imagesObj from "@constants/images";

type NavLinkProps = {
    image: string;
    text: string;
} & LinkProps

const NavLink = ({
    image,
    text,
    ...props
}: NavLinkProps) => (
    <Link {...props}>
        <NavListItem>
            <NavListItemImage src={image} />
            <NavListItemTitle>{text}</NavListItemTitle>
        </NavListItem>
    </Link>
)

export default function Header() {
    const location = useLocation()
    const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

    const onBurgerClick = () => {
        setIsBurgerActive(!isBurgerActive);

        if (isBurgerActive) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    }

    const onMenuBackgroundClick = () => {
        setIsBurgerActive(false);
        document.body.style.overflow = 'auto';
    }

    const onLinkClick = () => {
        document.body.style.overflow = 'auto';
    }

    return (
        <HeaderWrapper>
            <HeaderContent>
                <LogoImage src={imagesObj.darkLogo} />
                <nav>
                    <NavList isBurgerActive={isBurgerActive}>
                        {location.pathname !== '/' &&
                            <NavLink
                                to='/'
                                image={imagesObj.homeIcon}
                                text='Home'
                                data-testid="main-link"
                                onClick={onLinkClick}
                            />}
                        <NavLink
                            to='/favorites'
                            image={imagesObj.bookmarkIcon}
                            text='Your favorites'
                            data-testid="favorites-link"
                            onClick={onLinkClick}
                        />
                    </NavList>
                </nav>
                {isBurgerActive && <MenuBackground
                    onClick={onMenuBackgroundClick}
                    data-testid="menu-background"
                />}
                <BurgerButton
                    onClick={onBurgerClick}
                    active={isBurgerActive}
                    data-testid='burger-button'
                >
                    <BurgerLine />
                    <BurgerLine />
                    <BurgerLine />
                </BurgerButton>
            </HeaderContent>
        </HeaderWrapper>
    )
}