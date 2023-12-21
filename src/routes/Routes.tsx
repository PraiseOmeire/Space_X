import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/home";
import Technology from "../pages/technology";
import Crew from "../pages/crew";
import Destination from "../pages/destination";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

export default function Routes(): React.ReactElement {
  return <RouterProvider router={router} />;
}
