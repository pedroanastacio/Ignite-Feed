import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Posts } from "./pages/Posts";

export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/posts" element={<Posts />}/>
        </Routes>
    );
}