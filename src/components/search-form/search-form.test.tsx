import { render, waitFor } from "@testing-library/react";

import { SearchForm } from "./index";

describe(SearchForm, () => {
    const setQueryMock = jest.fn();
    const setSortingMock = jest.fn(() => console.log("Set Sorting"));
    const setPageMock = jest.fn();

    it('changes input value', () => {
        const { getByTestId } = render(<SearchForm
            setQuery={setQueryMock}
            setSorting={setSortingMock}
            setPage={setPageMock}
        />);

        const input = getByTestId('search-input') as HTMLInputElement;
        input.value = 'bhfvjdk';

        expect(input.value).toBe('bhfvjdk');
    })

    it('changes sorting mode', async () => {
        const { getByTestId } = render(<SearchForm
            setQuery={setQueryMock}
            setSorting={setSortingMock}
            setPage={setPageMock}
        />)

        const searchSelect = getByTestId('search-select') as HTMLSelectElement;
        searchSelect.value = 'date';

        await waitFor(() =>
            expect(searchSelect.value).toBe('date')
        )
    })
})