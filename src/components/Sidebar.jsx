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
      </ul>
    </div>
  );
}
