import { ReactNode, useEffect, useMemo } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { Main } from './Main';
import React from 'react';
import { DropdownPage } from 'pages/DropdownPage';
import { Path } from 'enums/path.enum';
import { NotesEditorPage } from 'pages/NotesEditorPage';
import { PhotoGalleryPage } from 'pages/PhotoGalleryPage';
import { PhotoViewPage } from 'pages/PhotoViewPage';
import { PrivateRoute } from 'components/PrivateRoute';
import { SignInPage } from 'pages/SignInPage';
import { ApplicationsPage } from 'pages/ApplicationsPage';
import { ArchivePage } from 'pages/ArchivePage';

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
            path: Path.PhotoGallery,
            component: <Outlet key={Path.PhotoGallery} />,
            children: [
              {
                path: '',
                component: <PhotoGalleryPage />,
              },
            ],
          },
          {
            path: Path.Photo,
            component: <Outlet key={Path.Photo} />,
            children: [
              {
                path: ':id',
                component: <PhotoViewPage />,
              },
            ],
          },
          {
            path: Path.NotesEditor,
            component: <Outlet key={Path.NotesEditor} />,
            children: [
              {
                path: '',
                component: <NotesEditorPage />,
              },
            ],
          },
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
          {
            path: Path.Applications,
            component: <Outlet key={Path.Applications} />,
            children: [
              {
                path: '',
                component: <ApplicationsPage />,
              },
            ],
          },
          {
            path: Path.Archive,
            component: <Outlet key={Path.Archive} />,
            children: [
              {
                path: '',
                component: <ArchivePage />,
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
