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
    text
}: {
    link: string;
    image: string;
    text: string;
}) => (
    <Link to={link} style={{ textDecoration: 'none' }}>
        <NavListItem>
            <NavListItemImage src={image} />
            <NavListItemTitle>{text}</NavListItemTitle>
        </NavListItem>
    </Link>
)

export default function Header() {
    const location = useLocation()
    const [isBurgerActive, setIsBurgerActive] = useState<boolean>(false);

    const onBurgerClick = () => setIsBurgerActive(!isBurgerActive);

    return (
        <HeaderWrapper>
            <HeaderContent>
                <LogoImage src={logoImage} />
                <nav>
                    <NavList isBurgerActive={isBurgerActive}>
                        {location.pathname !== '/' && <NavLink
                            link='/'
                            image={homeImage}
                            text='Home'
                        />}
                        <NavLink
                            link='/favorites'
                            image={bookmarkImage}
                            text='Your favorites'
                        />
                    </NavList>
                </nav>
                <MenuBackground
                    isMenuOpened={isBurgerActive}
                    onClick={() => setIsBurgerActive(false)}
                />
                <BurgerButton
                    onClick={onBurgerClick}
                    active={isBurgerActive}
                >
                    <BurgerLine />
                    <BurgerLine />
                    <BurgerLine />
                </BurgerButton>
            </HeaderContent>
        </HeaderWrapper>
    )
}