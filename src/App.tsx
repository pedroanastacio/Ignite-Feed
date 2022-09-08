import { useContext, useEffect } from "react"
import { BrowserRouter } from "react-router-dom"

import { Router } from "./routes/Router"
import { Splash } from "./pages/Splash"
import { AuthActions, AuthContext } from "./contexts/AuthContext"

import "./global.css"

export function App() {
  
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    dispatch({ type: AuthActions.AUTH_START })
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({ type: AuthActions.AUTH_FAILURE })
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if(state.authenticating) {
    return <Splash />
  }

  return (
    <BrowserRouter>
      <Router isAuthenticated={state.isAuthenticated} />
    </BrowserRouter>
  )
}


