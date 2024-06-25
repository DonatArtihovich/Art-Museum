import { render, fireEvent } from '@testing-library/react'
import { Pagination } from '.'

describe(Pagination, () => {
    it("increments page number on right arrow click", () => {
        const setPageMock = jest.fn();
        const { getByTestId } = render(<Pagination
            page={1}
            setPage={setPageMock}
            totalPages={5}
        />)

        const rightArrowButton = getByTestId('right-arrow');

        fireEvent.click(rightArrowButton);

        expect(setPageMock).toHaveBeenCalledWith(2);
    })

    it("decrements page number on left arrow click", () => {
        const setPageMock = jest.fn();
        const { getByTestId } = render(<Pagination
            page={2}
            setPage={setPageMock}
            totalPages={5}
        />)

        const leftArrowButton = getByTestId('left-arrow');

        fireEvent.click(leftArrowButton)

        expect(setPageMock).toHaveBeenCalledWith(1);
    })

    it("changes page number on number button click", () => {
        const setPageMock = jest.fn();
        const { getByText } = render(<Pagination
            page={2}
            setPage={setPageMock}
            totalPages={5}
        />)

        const numberButton = getByText('3');

        fireEvent.click(numberButton)

        expect(setPageMock).toHaveBeenCalledWith(3);
    })
})