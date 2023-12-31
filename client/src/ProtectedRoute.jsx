import { useAuth} from "./context/AuthContextt"
import { Navigate, Outlet  } from "react-router-dom"

const ProtectedRoute = () => {
    const {user, isAuthenticated, loading} = useAuth()

    if(loading) return <h1>Loading...</h1>

    if (!loading && !isAuthenticated) return <Navigate to="login" replace/>
  return <Outlet/>
}

export default ProtectedRoute