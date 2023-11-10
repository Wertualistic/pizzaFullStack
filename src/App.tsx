import Admin from "./Admin/Admin";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home/components/Home";

const App = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Admin />
    },
    {
      path: '/home',
      element: <Home />
    },
  ])

  return <RouterProvider router={routes} />
};

export default App;
