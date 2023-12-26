import { PropsWithChildren, useState, useCallback, useEffect } from "react";
import React from "react";
import { SignInPage } from "pages/SignInPage";
import { setAuthorizationHeaders } from "services";

export const JwtAuth = ({ children }: PropsWithChildren<any>) => {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const onReceiveToken = useCallback(() => {
        localStorage.setItem('token', token!);
        setAuthorizationHeaders(token!);
      }, [token]);
    
      useEffect(() => {
        if (!!token) {
          onReceiveToken();
        }
      }, [token, onReceiveToken]);

    return token ? children : null;
}