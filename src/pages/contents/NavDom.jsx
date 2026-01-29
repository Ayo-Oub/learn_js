import CodeContainer from "../../components/UI/CodeContainer";
import { codes_nav_dom } from "../../data/dom";

import "./styling_cours.css";

function NavDom() {
  return (
    <div className="content-container">
      <h3 className="title">Naviguer dans le DOM</h3>
      <p>
        Naviguer = se déplacer entre les éléments
        <br />
        (parent ⇄ enfants ⇄ frères)
      </p>
      <h4 className="sub-title">1. Parent (remonter)</h4>
      <p>Aller vers l'élément parent</p>
      <CodeContainer content={codes_nav_dom[0]} />
      <p>Exemple</p>
      <CodeContainer content={codes_nav_dom[1]} />
      <h4 className="sub-title">2. Enfant (descendre)</h4>
      <p>Tous les enfants</p>
      <CodeContainer content={codes_nav_dom[2]} />
      <p>Premier enfant</p>
      <CodeContainer content={codes_nav_dom[3]} />
      <p>Dernier enfant</p>
      <CodeContainer content={codes_nav_dom[4]} />
      <h4>3. Frères (siblings)</h4>
      <p>Frère suivant</p>
      <CodeContainer content={codes_nav_dom[5]} />
      <p>Frère précédent</p>
      <CodeContainer content={codes_nav_dom[6]} />
      <p>
        <span>Différence importante</span>
      </p>
      <p>childNodes → inclut espaces + commentaires</p>
      <p>children → seulement balises HTML</p>
      <p>Exemple pratique</p>
      <p>HTML</p>
      <CodeContainer content={codes_nav_dom[7]} />
      <p>JS</p>
      <CodeContainer content={codes_nav_dom[8]}/>
    </div>
  );
}

export default NavDom;
