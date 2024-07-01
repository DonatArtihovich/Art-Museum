import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Header from "./index";
// import { describe, expect, it } from '@jest/globals'

describe(Header, () => {
    const mockUseLocation = jest.fn();
    mockUseLocation.mockReturnValue({
        pathname: '/'
    });

    beforeEach(() => {
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useLocation: mockUseLocation,
        }));
    });

    it('modal background is hidden on not-active burger', () => {
        const { queryByTestId } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const menuBackground = queryByTestId('menu-background');
        expect(menuBackground).not.toBeInTheDocument();
    })

    it('shows modal background on active burger', () => {
        const { queryByTestId, getByTestId } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const burger = getByTestId('burger-button');

        fireEvent.click(burger);

        const menuBackground = queryByTestId('menu-background');

        expect(menuBackground).toBeInTheDocument();
    })

    it('no main page link when user is at main page', () => {
        const { queryByTestId } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const mainLink = queryByTestId('main-link');

        expect(mainLink).not.toBeInTheDocument();
    })

    mockUseLocation.mockReturnValue({
        pathname: '/favorites'
    });

    it('main page link when user isn\'t at main page', () => {
        const { queryByTestId, getByTestId } = render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const favoritesLink = getByTestId('favorites-link')
        fireEvent.click(favoritesLink);

        const mainLink = queryByTestId('main-link');
        expect(mainLink).toBeInTheDocument();
    })
})