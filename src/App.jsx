import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import IntroDom from "./pages/contents/IntroDom";
import SelectEleDom from "./pages/contents/SelectEleDom";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "intro_dom", element: <IntroDom /> },
          { path: "select_element_in_the_dom", element: <SelectEleDom /> },
        ],
      },
    ],
    {
      basename: "/learn_js",
    },
  );

  return <RouterProvider router={router} />;
}

export default App;
