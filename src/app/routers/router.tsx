import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./../../pages/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
