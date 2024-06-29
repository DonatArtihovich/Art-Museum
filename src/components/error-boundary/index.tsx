import { useErrorBoundary, withErrorBoundary } from "react-use-error-boundary";
import { ErrorText, ResetButton, Wrapper } from "./styled";
import {
    ERROR_BOUNDARY_BUTTON_TITLE,
    ERROR_BOUNDARY_TITLE
} from "@constants/const";

type ErrorBoundaryProps = {
    children: React.ReactNode;
}

const ErrorBoundary = withErrorBoundary(({ children }: ErrorBoundaryProps) => {
    const [error, resetError] = useErrorBoundary(
        (error, errorInfo) => { console.log(error, errorInfo) }
    );

    if (error) {
        return (
            <Wrapper>
                <ErrorText>{ERROR_BOUNDARY_TITLE}</ErrorText>
                <ResetButton
                    onClick={resetError}
                    data-testid='reset-button'
                >
                    {ERROR_BOUNDARY_BUTTON_TITLE}
                </ResetButton>
            </Wrapper>
        );
    }

    return <div>{children}</div>;
});

export default ErrorBoundary;