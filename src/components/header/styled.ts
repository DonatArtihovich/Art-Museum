import styled from "styled-components";

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
`

export const LogoImage = styled.img`
    width: 206px;
    height: 63px;
`

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    gap: 4px;
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