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
        Les noms des propriétés CSS avec un tiret (-) deviennent en camelCase.
      </p>
      <p>À éviter pour gros projets (code sale).</p>
      <h4 className="sub-title">2. Modifier les classes (MEILLEURE méthode)</h4>
      <p>Ajouter une classe</p>
      <CodeContainer content={codes_modf_sty_class_dom[1]} />
      <p>Supprimer une classe</p>
      <CodeContainer content={codes_modf_sty_class_dom[2]} />
      <p>Basculer une classe (ajoute si absente, supprime si présente)</p>
      <CodeContainer content={codes_modf_sty_class_dom[3]} />
      <p>Vérifier si une classe est présente</p>
      <CodeContainer content={codes_modf_sty_class_dom[4]} />
      <p>Pourquoi classList est meilleur ?</p>
      <ul>
        <li>Code propre</li>
        <li>Séparation JS / CSS</li>
        <li>Facile à maintenir</li>
        <li>Utilisé dans React, Vue, etc.</li>
      </ul>
      <p>Exemple pratique : Dark Mode</p>
      <p>CSS</p>
      <CodeContainer language="CSS" content={codes_modf_sty_class_dom[5]} />
      <p>JS</p>
      <CodeContainer content={codes_modf_sty_class_dom[6]} />
    </div>
  );
}

export default ModfStyClassDom
