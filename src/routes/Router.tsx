import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Posts } from "../pages/Posts";
import { ProtectedRoute } from "./ProtectedRoute";

interface RouterProps {
    isAuthenticated: boolean
}

export function Router({ isAuthenticated }: RouterProps) {
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/posts" element={
                <ProtectedRoute redirectPath="/login" isAllowed={isAuthenticated}>
                    <Posts />
                </ProtectedRoute>
            } />
        </Routes>
    );
}