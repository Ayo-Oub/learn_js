import CodeContainer from "../../components/UI/CodeContainer";
import { codes_modf_conte_dom } from "../../data/dom";

import "./styling_cours.css";

function ModfConteDom() {
  return <div className="content-container">
       <h3 className="title">Modifier le contenu du DOM</h3>
       <p>
            Après avoir sélectionné un élément, la première chose qu’on fait généralement c'est changer son contenu.
       </p>
       <h4 className="sub-title">1. textContent</h4>
           <p>
                Change uniquement le texte à l'intérieur d'un élément.
       </p>
           <p>Exemple:</p>
       <CodeContainer content={codes_modf_conte_dom[0]} language="html"/>
       <CodeContainer content={codes_modf_conte_dom[1]}/>
  </div>;
}

export default ModfConteDom;
