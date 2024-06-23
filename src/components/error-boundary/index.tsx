import { useErrorBoundary, withErrorBoundary } from "react-use-error-boundary";
import { ErrorText, ResetButton, Wrapper } from "./styled";

const ErrorBoundary = withErrorBoundary(({ children }: { children: React.ReactNode }) => {
    const [error, resetError] = useErrorBoundary(
        (error, errorInfo) => console.log(error, errorInfo)
    );

    if (error) {
        return (
            <Wrapper>
                <ErrorText>Oops! It's error!</ErrorText>
                <ResetButton onClick={resetError}>Try again</ResetButton>
            </Wrapper>
        );
    }

    return <div>{children}</div>;
});

export default ErrorBoundary;