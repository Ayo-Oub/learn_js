import CodeContainer from "../../components/UI/CodeContainer";
import { codes_modf_attr_dom } from "../../data/dom";

import "./styling_cours.css";

function ModfAttrDom() {
  return (
    <div className="content-container">
      <h3 className="title">Modifier les attributs des éléments</h3>
      <p>
        Les attributs ce sont les infos dans la balise HTML : src, href, id,
        class, value, type, placeholder …
      </p>
      <h4 className="sub-title">1. getAttribute()</h4>
      <p>Lire la valeur d’un attribut.</p>
      <p>Exemple:</p>
      <CodeContainer
        content={codes_modf_attr_dom[0]}
        language="html"
      />
      <CodeContainer content={codes_modf_attr_dom[1]} />
      <h4 className="sub-title">2. setAttribute()</h4>
      <p>Modifier ou ajouter un attribut.</p>
      <p>Exemple:</p>
      <CodeContainer content={codes_modf_attr_dom[2]} />
      <p>S'il n'existe pas → il est créé.</p>
      <h4 className="sub-title">3. removeAttribute()</h4>
      <p>Supprimer un attribut.</p>
      <p>Exemple:</p>
      <CodeContainer content={codes_modf_attr_dom[3]} />
      <h4 className="sub-title">4. Accès direct aux attributs (recommandé)</h4>
      <p>
        Pour les attributs courants, on utilise directement la propriété JS
        (plus simple).
      </p>
      <p>Exemple:</p>
      <CodeContainer content={codes_modf_attr_dom[4]} />
      <p>Plus lisible et plus utilisé que setAttribute.</p>
      <h4 className="sub-title">5. Attributs spéciaux importants</h4>
      <p>
        <span>id</span>
      </p>
      <CodeContainer content={codes_modf_attr_dom[5]} />
      <p>
        <span>class</span>
      </p>
      <p>On ne modifie pas class directement</p>
      <p>On utilise classList (chapitre suivant).</p>
      <h4 className="sub-title">6. Vérifier si un attribut existe</h4>
      <CodeContainer content={codes_modf_attr_dom[6]} />
      <p>Exemple pratique (bouton ON / OFF)</p>
      <p>HTML</p>
      <CodeContainer
        language="html"
        content={codes_modf_attr_dom[7]}
      />
      <p>JS</p>
      <CodeContainer
        content={codes_modf_attr_dom[8]}
      />
    </div>
  );
}

export default ModfAttrDom;
