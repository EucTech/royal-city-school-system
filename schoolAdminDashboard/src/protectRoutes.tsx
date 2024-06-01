import { Navigate } from "react-router";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

interface ProtectedRouteProps {
    component: React.ComponentType;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({component: Component}) =>{
    const location = useLocation();

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    return isAuthenticated ? (<Component/>) : (<Navigate to={`/login?redirect=${location.pathname}${location.search}`} />);

}

export default ProtectedRoute;
