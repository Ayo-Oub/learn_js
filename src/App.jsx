import { createBrowserRouter, RouterProvider } from "react-router";
import Home from '../src/pages/Home'
import IntroDom from './pages/contents/IntroDom'
import SelectEleDom from './pages/contents/SelectEleDom'
function App() {
  const route = createBrowserRouter([
    {
      path: "/learn_js",
      element: <Home />,
      children: [
        { path: "intro_dom", element: <IntroDom /> },
        { path: "select_element_in_the_dom", element: <SelectEleDom /> },
      ],
    },
  ]);

return <RouterProvider router={route}/>
}

export default App;
