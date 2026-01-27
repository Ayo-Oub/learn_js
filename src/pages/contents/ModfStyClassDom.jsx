import CodeContainer from "../../components/UI/CodeContainer";
import { codes_modf_sty_class_dom } from "../../data/dom";
import "./styling_cours.css";

function ModfStyClassDom() {
  return (
    <div className="content-container">
      <h3 className="title">Modifier le style et les classes</h3>
      <p>Il y a 2 façons principales de changer le style :</p>
      <ul>
        <li>Modifier les propriétés CSS directement</li>
        <li>Ajouter / supprimer des classes CSS</li>
      </ul>
      <h4 className="sub-title">1. Modifier le style directement</h4>
      <CodeContainer content={codes_modf_sty_class_dom[0]} />
      <p>
        Les noms des propriétés CSS avec un tiret (-) deviennent en
        camelCase.
      </p>
      <p>À éviter pour gros projets (code sale).</p>
      <h4 className="sub-title">2. Modifier les classes (MEILLEURE méthode)</h4>
      <p>Avec element.classList</p>
    </div>
  );
}

export default ModfStyClassDom
