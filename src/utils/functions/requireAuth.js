import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {_getMe} from "../../redux";

function RequireAuth({children}) {
    let location = useLocation();

    const access = useSelector(_getMe)

    if (!access) {
        return <Navigate to="/login" state={{from: location}}/>;
    }
    return children;
}

export default RequireAuth