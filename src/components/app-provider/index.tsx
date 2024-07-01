import THEME from "@constants/theme";
import StorageContextProvider from "@utils/react/storage-context/provider";
import { ThemeProvider } from "styled-components";

type AppProviderProps = {
    children: React.ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <ThemeProvider theme={THEME}>
            <StorageContextProvider>
                {children}
            </StorageContextProvider>
        </ThemeProvider>

    )
}

export default AppProvider;