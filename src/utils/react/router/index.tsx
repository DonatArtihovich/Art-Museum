import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/main";
import FavouritesPage from "@pages/favourites";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/favorites' element={<FavouritesPage />} />
            </Routes>
        </BrowserRouter>
    )
} 