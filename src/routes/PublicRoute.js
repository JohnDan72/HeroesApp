import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { GeneralContext } from "../GeneralContext"


export const PublicRoute = ({ children }) => {

    const { user } = useContext(GeneralContext);
    const lastPath = localStorage.getItem('lastPath');

    return (!user.logged)? children : <Navigate to={lastPath} />;
}