/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/", isAllowed, ...rest }) => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace={true} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;