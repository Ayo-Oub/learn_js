import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import IntroDom from "./pages/contents/IntroDom";
import SelectEleDom from "./pages/contents/SelectEleDom";
import ModfConteDom from "./pages/contents/ModfConteDom";
import ModfAttrDom from "./pages/contents/ModfAttrDom";
import ModfStyClassDom from "./pages/contents/ModfStyClassDom";
import CreateDeleteEleDom from "./pages/contents/CreateDeleteEleDom";
import NavDom from "./pages/contents/NavDom";
import EventsDom from "./pages/contents/EventsDom";
import Numbers from "./pages/js_contents/Numbers";

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
          { path: "modf_sty_class_dom", element: <ModfStyClassDom /> },
          { path: "create_delete_ele_dom", element: <CreateDeleteEleDom /> },
          { path: "nav_dom", element: <NavDom /> },
          { path: "events_dom", element: <EventsDom /> },
          // Le contenue de JS peut être ajouté ici plus tard
          { path: "numbers", element: <Numbers /> },
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
