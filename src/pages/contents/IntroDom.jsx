import CodeContainer from '../../components/UI/CodeContainer';
import { codes } from '../../data/dom';

import './styling_cours.css'

export default function IntroDom() {
  return (
    <div className="content-container">
      <h3 className="title">Introduction au DOM</h3>
      <h4 className="sub-title">1. Le DOM c'est quoi ?</h4>
      <ul>
        <li>DOM = Document Object Modal</li>
        <li>C'est la représentation en forme d'arbre de ta page HTML.</li>
        <li>Chaque balise devient un objet que JavaScript peut contrôler.</li>
      </ul>
      <h4 className="sub-title">2. Pourquoi le DOM existe ?</h4>
      <p>
        Pour permettre à JavaScript de modifier la page après son chargement,
        par exemple :{" "}
      </p>
      <ul>
        <li>Changer du text</li>
        <li>Changer une image</li>
        <li>Afficher/Cacher un élément</li>
        <li>Réagir à un clic</li>
      </ul>
      <h4 className="sub-title">3. Comment le DOM est construit ?</h4>
      <p>Le navigateur : </p>
      <ol>
        <li>Lire ton HTML</li>
        <li>Créer une structure en arbre</li>
        <li>
          Exposer des objets accessibles via <span>document</span>
        </li>
      </ol>
      <p>Exemple d'arbre :</p>
      <CodeContainer
        content={codes[0]}
        language="css"
      />
      <h4 className="sub-title">4. Les types de nœuds (Nodes)</h4>
      <ul>
        <li>Élément ( balise {"<div>"} )</li>
        <li>Texte ( contenu de la balise )</li>
        <li>Commentaire ( {"<!-- -->"} ) </li>
      </ul>
      <h4 className="sub-title">5. Comment on accède au DOM ?</h4>
      <p>
        Toujours via l'objet <span>document</span> :
      </p>
      <p>Exemples : </p>
      <CodeContainer content={codes[1]} />
      <h4 className="sub-title">6. Le DOM est dynamique </h4>
      <p>Tu peux créer, modifier, supprimer des éléments pendant que la page est affiché.</p>
    </div>
  );
}
