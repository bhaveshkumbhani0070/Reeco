import { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
// layouts
import ClientLayout from '../layout/clientLayout';

// Loadable component for code splitting
import Loadable from "./Loadable";

// Component to check if user is authenticated or not
function RequireAuth({ children }) {
    // Check if user is logged in or not   
    const isTokenValid = true; // Token will be checked here
    if (isTokenValid) {
        return children;
    }
    return <Navigate to="/" replace />;
}

// Function that handles public routes
export default function PublicRouter() {
    return useRoutes([
        {
            path: '/',
            element: <RequireAuth><ClientLayout /></RequireAuth>, // Wrap ClientLayout with RequireAuth for authentication check
            children: [
                {
                    path: '',
                    element: <Order /> // Render Order component for path '/'
                },
                {
                    path: 'store',
                    element: <Store /> // Render Store component for path '/store'
                }
            ]
        },
        {
            path: "*", // Catch-all route for any other undefined routes
            children: [
                { path: "*", element: <Navigate to={'/'} replace /> }, // Redirect any undefined route to '/'
            ],
        },
    ]);
}

// Lazy-loaded Order component
const Order = Loadable(lazy(() => import("../components/Order")));

// Lazy-loaded Store component
const Store = Loadable(lazy(() => import("../components/Store")));
