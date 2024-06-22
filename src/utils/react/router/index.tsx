import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/main";
import FavoritesPage from "@pages/favourites";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/favorites' element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    )
} 