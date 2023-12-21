import { lazy } from 'react';

const Index = lazy(() => import('../pages/admin/dashboard/Index'));

const routes = [
    {
        path: '/',
        element: <Index />
    }
];

export { routes };
