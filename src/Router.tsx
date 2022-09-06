import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Posts } from "./pages/Posts";
import { Splash } from "./pages/Splash";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Splash />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/posts" element={<Posts />}/>
        </Routes>
    );
}