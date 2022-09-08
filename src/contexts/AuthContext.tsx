import { createContext, Dispatch, PropsWithChildren, useMemo, useReducer } from "react"

interface AuthState {
    isAuthenticated: boolean
    authenticating: boolean
    error: boolean
}

export enum AuthActions {
    AUTH_START = "AUTH_START",
    AUTH_SUCCESS = "AUTH_SUCCESS",
    AUTH_FAILURE = "AUTH_FAILURE",
    AUTH_ERROR = "AUTH_ERROR"
}

interface AuthAction {
    type: AuthActions
}

const initialState: AuthState = {
    isAuthenticated: false,
    authenticating: true,
    error: false
}

const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case "AUTH_START":
            return {
                isAuthenticated: false,
                authenticating: true,
                error: false
            }
        case "AUTH_SUCCESS":
            return {
                isAuthenticated: true,
                authenticating: false,
                error: false
            }
        case "AUTH_FAILURE":
            return {
                isAuthenticated: false,
                authenticating: false,
                error: false
            }
        case "AUTH_ERROR":
            return {
                isAuthenticated: false,
                authenticating: false,
                error: true
            }
        default:
            return state;
    }
}

interface AuthContextProps {
    state: AuthState,
    dispatch: Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthContextProps>({
    state: initialState,
    dispatch: () => {}
});

export function AuthProvider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer(authReducer, initialState)

    const contextValue = useMemo(() => ({
        state,
        dispatch
    }), [state, dispatch])
    
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

