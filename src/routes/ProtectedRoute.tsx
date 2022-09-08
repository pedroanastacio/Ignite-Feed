import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps extends PropsWithChildren {
    redirectPath: string
    isAllowed: boolean
}

export function ProtectedRoute({ redirectPath, isAllowed, children }: ProtectedRouteProps) {

    if(!isAllowed) return <Navigate to={redirectPath} replace={true} />;

	return <>{children}</>;
}