import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import IntroDom from "./pages/contents/IntroDom";
import SelectEleDom from "./pages/contents/SelectEleDom";
import ModfConteDom from "./pages/contents/ModfConteDom";
import ModfAttrDom from "./pages/contents/ModfAttrDom";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        children: [
          { path: "intro_dom", index: true, element: <IntroDom /> },
          { path: "select_element_in_the_dom", element: <SelectEleDom /> },
          { path: "modf_conte_dom", element: <ModfConteDom /> },
          { path: "modf_attr_dom", element: <ModfAttrDom /> },
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
