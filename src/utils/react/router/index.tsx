import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/main";
import FavoritesPage from "@pages/favourites";
import ArtworkPage from "@pages/artwork";
import { Path } from "@constants/router";

type RouteProps = {
    path: Path;
    element: React.ReactNode;
}

const routes: RouteProps[] = [
    {
        path: Path.MAIN,
        element: <MainPage />
    },
    {
        path: Path.FAVORITES,
        element: <FavoritesPage />
    },
    {
        path: Path.ARTWORK,
        element: <ArtworkPage />
    },
]

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(route => <Route {...route} key={route.path} />)}
            </Routes>
        </BrowserRouter>
    )
} 