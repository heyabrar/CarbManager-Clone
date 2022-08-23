import { Route, Routes } from "react-router-dom";
import Featuress from "../Pages/Features";
import Premium from "../Pages/Premium";

export default function AllRoutes( ){
    return (
        <Routes>
            <Route path="/" element={<Featuress/>}/>
            <Route path="/premium" element={<Premium/>}/>
            <Route path="/cookbook" element={<h1>Cookbook</h1>}/>
        </Routes>
    )
}