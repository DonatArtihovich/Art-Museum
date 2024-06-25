import {
    BurgerButton,
    BurgerLine,
    HeaderContent,
    HeaderWrapper,
    LogoImage,
    MenuBackground,
    NavList,
    NavListItem,
    NavListItemImage,
    NavListItemTitle
} from "./styled";
import logoImage from '@assets/images/dark-logo.svg';
import homeImage from '@assets/images/home.svg'
import bookmarkImage from '@assets/images/bookmark.svg'
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const NavLink = ({
    link,
    image,
    text,
    ...props
}: {
    link: string;
    image: string;
    text: string;
    [key: string]: any;
}) => (
    <Link to={link} style={{ textDecoration: 'none' }} {...props}>
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
                <LogoImage src={logoImage} />
                <nav>
                    <NavList isBurgerActive={isBurgerActive}>
                        {location.pathname !== '/' &&
                            <NavLink
                                link='/'
                                image={homeImage}
                                text='Home'
                                data-testid="main-link"
                                onCLick={onLinkClick}
                            />}
                        <NavLink
                            link='/favorites'
                            image={bookmarkImage}
                            text='Your favorites'
                            data-testid="favorites-link"
                            onCLick={onLinkClick}
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