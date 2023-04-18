import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "components/Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import TweetsPage from "pages/TweetsPage/TweetsPage";

export const ROUTES = {
  HOME: "/",
  TWEETS: "/tweets",
};

const routes = [
  {
    path: ROUTES.HOME,
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.TWEETS,
        element: <TweetsPage />,
      },
      {
        path: "*",
        element: <Navigate to={ROUTES.HOME} replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
