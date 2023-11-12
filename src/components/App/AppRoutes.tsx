import { ReactNode, useEffect, useMemo } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { Main } from './Main';
import React from 'react';
import { DropdownPage } from 'pages/DropdownPage';
import { Path } from 'enums/path.enum';

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
          <Main>
            <Outlet />
          </Main>
        ),
        children: [
          {
            path: Path.Dropdown,
            component: <Outlet key={Path.Dropdown} />,
            children: [
              {
                path: '',
                component: <DropdownPage />,
              },
            ],
          },
        ],
      },
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
