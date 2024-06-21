import { HeaderContent, HeaderWrapper, LogoImage, NavList, NavListItem, NavListItemImage, NavListItemTitle } from "./styled";
import logoImage from '@assets/images/dark-logo.svg';
import homeImage from '@assets/images/home.svg'
import bookmarkImage from '@assets/images/bookmark.svg'
import { Link, useLocation } from "react-router-dom";

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

    return (
        <HeaderWrapper>
            <HeaderContent>
                <LogoImage src={logoImage} />

                <nav>
                    <NavList>
                        {location.pathname !== '/' && <NavLink
                            link='/'
                            image={homeImage}
                            text='Home'
                        />}
                        <NavLink
                            link='/favourites'
                            image={bookmarkImage}
                            text='Your favourites'
                        />
                    </NavList>
                </nav>
            </HeaderContent>

        </HeaderWrapper>
    )
}