import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';

import { paths } from '@/config/paths';

import {
    default as AppRoot,
    ErrorBoundary as AppRootErrorBoundary,
} from './routes/app/root';

const convert = (queryClient: QueryClient) => (m: any) => {
    const { clientLoader, clientAction, default: Component, ...rest } = m;
    return {
        ...rest,
        loader: clientLoader?.(queryClient),
        action: clientAction?.(queryClient),
        Component,
    };
};

export const createAppRouter = (queryClient: QueryClient) =>
    createBrowserRouter([
        {
            path: paths.home.path,
            element: <AppRoot />,
            ErrorBoundary: AppRootErrorBoundary,
            children: [
                {
                    path: paths.root.path,
                    lazy: () =>
                        import('./routes/landing-route').then(
                            convert(queryClient),
                        ),
                },
                {
                    path: paths.services.path,
                    lazy: () =>
                        import('./routes/app/services-route').then(
                            convert(queryClient),
                        ),
                },
                {
                    path: paths.ourWork.path,
                    lazy: () =>
                        import('./routes/app/our-work-route').then(
                            convert(queryClient),
                        ),
                },
                {
                    path: paths.aboutUs.path,
                    lazy: () =>
                        import('./routes/app/about-us-route').then(
                            convert(queryClient),
                        ),
                },
                {
                    path: paths.enquire.path,
                    lazy: () =>
                        import('./routes/app/enquire-route').then(
                            convert(queryClient),
                        ),
                },
            ],
        },
        {
            path: '*',
            lazy: () => import('./routes/not-found').then(convert(queryClient)),
        },
    ]);

export const AppRouter = () => {
    const queryClient = useQueryClient();

    const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

    return <RouterProvider router={router} />;
};
