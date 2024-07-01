import { render } from "@testing-library/react";

import ErrorBoundary from "./index";

describe(ErrorBoundary, () => {
    jest.mock('react-use-error-boundary', () => ({
        ...jest.requireActual('react-use-error-boundary'),
        useErrorBoundary: jest.fn(() => {
            let error = null;
            const resetError = jest.fn();

            const triggerError = (err: Error) => {
                error = err;
            };

            return [error, resetError, triggerError];
        }),
    }));

    const ErrorThrower = () => {
        throw new Error('Test Error');
    }

    it('catches errors', () => {
        const { queryByTestId } = render(
            <ErrorBoundary>
                <ErrorThrower />
            </ErrorBoundary>
        )

        const resetButton = queryByTestId('reset-button');
        expect(resetButton).toBeInTheDocument();
    })
})