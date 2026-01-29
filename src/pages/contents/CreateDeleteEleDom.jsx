import CodeContainer from "../../components/UI/CodeContainer";
import { codes_create_delete_ele_dom } from "../../data/dom";
import "./styling_cours.css";

function CreateDeleteEleDom() {
  return (
    <div className="content-container">
      <h3 className="title">Créer et supprimer des éléments</h3>
      <p>Ici tu vas apprendre comment JS crée du HTML tout seul.</p>
      <h4 className="sub-title">1. Créer un élément</h4>
      <p>
        Utilise la méthode <span>document.createElement()</span> pour créer un
        élément.
      </p>
      <CodeContainer content={codes_create_delete_ele_dom[0]} />
      <p>L'élément existe en mémoire seulement, pas encore dans la page.</p>
      <h4 className="sub-title">2. Ajouter du contenu</h4>
      <CodeContainer content={codes_create_delete_ele_dom[1]} />
      <p>ou</p>
      <CodeContainer content={codes_create_delete_ele_dom[2]} />
      <h4 className="sub-title">3. Ajouter classe / attribut</h4>
      <CodeContainer content={codes_create_delete_ele_dom[3]} />
      <h4 className="sub-title">4. Insérer l'élément dans la page</h4>
      <p>
        Utilise la méthode <span>append()</span>
      </p>
      <CodeContainer content={codes_create_delete_ele_dom[4]} />
      <p>
        Utilise la méthode <span>appendChild()</span>
      </p>
      <CodeContainer content={codes_create_delete_ele_dom[5]} />
      <p>
        Utilise la méthode <span>prepend()</span>
      </p>
      <CodeContainer content={codes_create_delete_ele_dom[6]} />
      <h4 className="sub-title">5. Supprimer un élément</h4>
      <p>
        Utilise la méthode <span>remove()</span>
      </p>
      <CodeContainer content={codes_create_delete_ele_dom[7]} />
      <p>
        ou depuis le parent : <span>removeChild()</span>
      </p>
      <CodeContainer content={codes_create_delete_ele_dom[8]} />
      <p>Exemple pratique : Ajouter une carte</p>
      <p>HTML :</p>
      <CodeContainer content={codes_create_delete_ele_dom[9]} />
      <p>JavaScript :</p>
      <CodeContainer content={codes_create_delete_ele_dom[10]} />
      <h4 className="sub-title">6. Cloner un élément </h4>
      <CodeContainer content={codes_create_delete_ele_dom[11]} />
      <ul>
        <li>true = avec contenu</li>
        <li>false = sans contenu</li>
      </ul>
    </div>
  );
}

export default CreateDeleteEleDom;
