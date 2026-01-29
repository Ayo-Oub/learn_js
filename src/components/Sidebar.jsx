import "./sidebar.css";
import { Link } from "react-router";
export default function Sidebar() {
  return (
    <div className="sideBar-container">
      <h4>JavaScript</h4>
      <ul>
        <li>
          <Link
            to="numbers"
            className="link"
          >
            Les nombres
          </Link>
        </li>
      </ul>
      <h4>DOM</h4>
      <ul>
        <li>
          <Link
            to="intro_dom"
            className="link"
          >
            Introduction au DOM
          </Link>
        </li>
        <li>
          <Link
            to="select_element_in_the_dom"
            className="link"
          >
            Sélectionner des éléments dans le DOM
          </Link>
        </li>
        <li>
          <Link
            to="modf_conte_dom"
            className="link"
          >
            Modifier le contenu du DOM
          </Link>
        </li>
        <li>
          <Link
            to="modf_attr_dom"
            className="link"
          >
            Modifier les attributs des éléments
          </Link>
        </li>
        <li>
          <Link
            to="modf_sty_class_dom"
            className="link"
          >
            Modifier le style et les classes
          </Link>
        </li>
        <li>
          <Link
            to="create_delete_ele_dom"
            className="link"
          >
            Créer et supprimer des éléments
          </Link>
        </li>
        <li>
          <Link
            to="nav_dom"
            className="link"
          >
            Naviguer dans le DOM
          </Link>
        </li>
        <li>
          <Link
            to="events_dom"
            className="link"
          >
            Les évènements
          </Link>
        </li>
      </ul>
    </div>
  );
}
