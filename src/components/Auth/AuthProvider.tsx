import { PropsWithChildren } from 'react';
import { JwtAuth } from './JwtAuth';
import React from 'react';

export const AuthProvider = ({ children }: PropsWithChildren<{}>) => {
    return (
        <JwtAuth>{children}</JwtAuth>
    );
}
