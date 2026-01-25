import './sidebar.css'
import { Link } from 'react-router';
export default function Sidebar() {
  return (
    <div className="sideBar-container">
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
      </ul>
    </div>
  );
}
