import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/digital-marketing", 
    element: <Home />,
  },
  {
    path: "*",
    element: (
      <div className="text-center mt-40 text-2xl font-bold">
        404 - Page Not Found
      </div>
    ),
  },
]);


export default router;
