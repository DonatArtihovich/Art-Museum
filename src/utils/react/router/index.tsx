import { Path } from "@constants/router";
import ArtworkPage from "@pages/artwork";
import FavoritesPage from "@pages/favourites";
import MainPage from "@pages/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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