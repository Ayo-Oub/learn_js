import CodeContainer from "../../components/UI/CodeContainer";
import { codes_modf_conte_dom } from "../../data/dom";

import "./styling_cours.css";

function ModfConteDom() {
  return (
    <div className="content-container">
      <h3 className="title">Modifier le contenu du DOM</h3>
      <p>
        Après avoir sélectionné un élément, la première chose qu’on fait
        généralement c'est changer son contenu.
      </p>
      <h4 className="sub-title">1. textContent</h4>
      <p>Change uniquement le texte à l'intérieur d'un élément.</p>
      <p>Exemple:</p>
      <CodeContainer
        content={codes_modf_conte_dom[0]}
        language="html"
      />
      <CodeContainer content={codes_modf_conte_dom[1]} />
      <ul>
        <li>Le HTML est ignoré.</li>
        <li>Sécurisé (pas de code injecté).</li>
      </ul>
      <h4 className="sub-title">2. innerText</h4>
      <p>Change le texte visible seulement.</p>
      <p>
        Différence avec <span>textContent</span> :
      </p>
      <ul>
        <li>innerText respecte le CSS (display: none)</li>
        <li>textContent lit tout, même caché.</li>
      </ul>
      <CodeContainer content={codes_modf_conte_dom[2]} />
      <p>En pratique : utilise textContent la majorité du temps.</p>
      <h4 className="sub-title">3. innerHTML (puissant mais dangereux)</h4>
      <p>Change le HTML complet à l’intérieur d’un élément.</p>
      <p>Exemple:</p>
      <CodeContainer
        content={codes_modf_conte_dom[3]}
        language="html"
      />
      <CodeContainer content={codes_modf_conte_dom[4]} />
      <p>Danger : injection de code si contenu vient de l’utilisateur.</p>
      <p>Utile pour générer des blocs HTML rapidement.</p>
      <h4 className="sub-title">4. Modifier la valeur des inputs</h4>
    </div>
  );
}

export default ModfConteDom;
