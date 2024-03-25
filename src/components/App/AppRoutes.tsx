import { ReactNode, useEffect, useMemo } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { Main } from './Main';
import React from 'react';
import { Path } from 'enums/path.enum';
import { PrivateRoute } from 'components/PrivateRoute';
import { SignInPage } from 'pages/SignInPage';
import { BeersPage } from 'pages/BeersPage';

interface IAppRoute {
  path: Path | string;
  component: ReactNode;
  canActivate?: boolean;
  children?: IAppRoute[];
}

export const AppRoutes = () => {
  const routes = useMemo<IAppRoute[]>(
    () => [
      {
        path: '',
        component: (
          <PrivateRoute>
            <Main>
              <Outlet />
            </Main>
          </PrivateRoute>
        ),
        children: [
          {
            path: Path.BeersList,
            component: <Outlet key={Path.BeersList} />,
            children: [
              {
                path: '',
                component: <BeersPage />,
              },
            ],
          },
        ],
      },
      {
        path: Path.SignIn,
        component: <Outlet key={Path.SignIn} />,
        children: [
          {
            path: '',
            component: <SignInPage />,
          }
        ]
      }
    ],
    [],
  );

  const renderRoutes = (routeElements: IAppRoute[]) =>
    routeElements.map(({ path, component, children }) => {
      return (
        <Route key={path} path={path} element={component}>
          {children && renderRoutes(children)}
        </Route>
      );
    });

  return <Routes>{renderRoutes(routes)}</Routes>;
};
