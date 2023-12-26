import { PropsWithChildren } from "react";
import React from "react";
import { useAppSelector } from "store";
import { Navigate } from "react-router-dom";
import { Path } from "enums";
import { getCurrentAuth } from "store/auth.slice";

export const PrivateRoute = ({ children }: PropsWithChildren<any>) => {
    const { token } = useAppSelector(getCurrentAuth); 

    return !!token ? children : <Navigate to={Path.SignIn} />;
}