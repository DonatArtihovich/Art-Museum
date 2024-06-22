import AppRouter from "@utils/react/router"
import StorageContextProvider from "@utils/react/storage-context/provider";

function App() {
    return (
        <StorageContextProvider>
            <AppRouter />
        </StorageContextProvider>
    );
}

export default App
