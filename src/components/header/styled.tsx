import styled, { css, keyframes } from "styled-components";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 127px;
    background: linear-gradient(90deg, #343333 16.73%, #484848 58.63%, #282828 98.63%);
`

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    @media (max-width: 1440px) {
        padding: 0 20px;
        width: auto;
    }

    @media (max-width: 700px) {
        justify-content: center;
    }
`

export const LogoImage = styled.img`
    width: 206px;
    height: 63px;
`

const openMenuAnimation = keyframes`
    from {
        transform: translate(-80vw);
    }
    to {
        transform: translate(0);
    }
`

export const NavList = styled(
    ({
        isBurgerActive,
        children,
        ...props
    }: {
        isBurgerActive: boolean;
        children: React.ReactNode[],
        [key: string]: any
    }) =>
        <ul {...props}>{children}</ul>
)`
    display: flex;
    list-style: none;
    gap: 4px;
    margin: 0;
    padding: 0;

    ${({ isBurgerActive }) => isBurgerActive
        ? css`
            animation: 0.5s ${openMenuAnimation} ease;
            left: 0;
        `
        : css`left: -80vw;`
    }

    @media(max-width: 700px) {
        position: absolute;
        flex-direction: column;
        width: 80vw;
        top: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: #343333;
        gap: 30px;
        z-index: 100;
    }
`

export const MenuBackground = styled(
    ({
        isMenuOpened,
        ...props
    }: {
        isMenuOpened: boolean,
        [key: string]: any
    }) =>
        <div {...props} />
)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;
    background: rgb(0, 0, 0, 0.7);
    z-index: 90;

    ${({ isMenuOpened }) => isMenuOpened
        ? css`display: block;`
        : css`display: none;`}
`

export const NavListItem = styled.li`
    display: flex;
    gap: 4px;
    align-items: center;
    min-width: 86px;
`
export const NavListItemTitle = styled.span`
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    color: #fff;
`

export const NavListItemImage = styled.img`
    width: 25px;
    height: 25px;
`

const burgerAnimation = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(90deg);
    }
`

export const BurgerButton = styled(
    ({ active, children, ...props }: { active: boolean, children: React.ReactNode, [key: string]: any }) =>
        <button {...props}>{children}</button>
)`
    position: absolute;
    top: 50px;
    left: 40px;
    width: 45px;
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
    z-index: 120;

    ${({ active }) => active
        ? css`
            animation: 0.5s ${burgerAnimation} ease-in;
            transform: rotate(90deg);
        `
        : ""
    }

    @media(max-width: 700px) {
        display: flex;
    }

    @media(max-width: 440px) {
        left: 25px;
    }
`

export const BurgerLine = styled.span`
    width: 100%;
    height: 2px;
    background-color: var(--secondary-color);
`