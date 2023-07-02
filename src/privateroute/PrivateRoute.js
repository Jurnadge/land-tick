import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const PrivateRoute = () => {
    const [state, dispatch] = useContext(UserContext);

    return state.isLogin  ? <Outlet/> : <Navigate to="/" />
}

export default PrivateRoute;