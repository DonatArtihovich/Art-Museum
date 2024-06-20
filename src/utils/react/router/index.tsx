import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "@pages/main";
import FavouritesPage from "@pages/favourites";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Route path='/' element={<MainPage />} />
            <Route path='/favorites' element={<FavouritesPage />} />
        </BrowserRouter>
    )
} 