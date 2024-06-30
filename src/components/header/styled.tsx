import styled, { css } from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { HTMLProps } from "react";
import { Breakpoints } from "@constants/style";

export const Link = styled(RouterLink)`
    text-decoration: none;
`

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

type NavListProps = {
    isBurgerActive: boolean;
    children: React.ReactNode[],
} & HTMLProps<HTMLUListElement>

export const NavList = styled(
    ({
        isBurgerActive,
        children,
        ...props
    }: NavListProps) =>
        <ul {...props}>{children}</ul>
)`
    display: flex;
    list-style: none;
    gap: 4px;
    margin: 0;
    padding: 0;
    transition: left 0.5s ease-in;

    ${({ isBurgerActive }) => isBurgerActive
        ? css`
            left: 0;
        `
        : css`
            left: -390px;   
        `
    }

    @media(max-width: ${Breakpoints.S}px) {
        position: absolute;
        flex-direction: column;
        width: 390px;
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

export const MenuBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;  
    background: rgb(0, 0, 0, 0.7);
    z-index: 90;
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
    ${(props) => css`
        color: ${props.theme.colors.otherText};
        font-family: ${props.theme.fonts.primary};
    `}
`

export const NavListItemImage = styled.img`
    width: 25px;
    height: 25px;
`

type BurgerButtonProps = {
    active: boolean,
    children: React.ReactNode,
} & HTMLProps<HTMLButtonElement>

export const BurgerButton = styled(
    ({ active, children, ...props }: BurgerButtonProps) =>
        <button {...props} type='button'>{children}</button>
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
    transition: transform 0.5s ease-in;

    ${({ active }) => active
        && css`
            transform: rotate(90deg);
        `
    }

    @media(max-width: ${Breakpoints.S}px) {
        display: flex;
    }

    @media(max-width: ${Breakpoints.XS}px) {
        left: 25px;
    }
`

export const BurgerLine = styled.span`
    width: 100%;
    height: 2px;
    ${(props) => css`background-color: ${props.theme.colors.secondary};`}
`