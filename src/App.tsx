import AppProvider from "@components/app-provider";
import ErrorBoundary from "@components/error-boundary";
import AppRouter from "@utils/react/router"

function App() {
    return (
        <ErrorBoundary>
            <AppProvider>
                <AppRouter />
            </AppProvider>
        </ErrorBoundary>
    );
}

export default App
