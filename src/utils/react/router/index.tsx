import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/main";
import FavoritesPage from "@pages/favourites";
import ArtworkPage from "@pages/artwork";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
                <Route path='/artworks/:id' element={<ArtworkPage />} />
            </Routes>
        </BrowserRouter>
    )
} 