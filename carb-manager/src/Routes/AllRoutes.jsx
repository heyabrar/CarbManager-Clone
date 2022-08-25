import { Route, Routes } from "react-router-dom";
import CookBook from "../Pages/CookBook";
import Featuress from "../Pages/Features";
import Premium from "../Pages/Premium";

export default function AllRoutes( ){
    return (
        <Routes>
            <Route path="/" element={<Featuress/>}/>
            <Route path="/premium" element={<Premium/>}/>
            <Route path="/cookbook" element={<CookBook/>}/>
        </Routes>
    )
}