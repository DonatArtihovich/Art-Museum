import ErrorBoundary from "@components/error-boundary";
import AppRouter from "@utils/react/router"
import StorageContextProvider from "@utils/react/storage-context/provider";

function App() {
    return (
        <ErrorBoundary>
            <StorageContextProvider>
                <AppRouter />
            </StorageContextProvider>
        </ErrorBoundary>
    );
}

export default App
