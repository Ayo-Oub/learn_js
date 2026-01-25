import CodeContainer from '../../components/UI/CodeContainer';
import { codes_select_Ele_dom } from '../../data/dom';
import './styling_cours.css'


export default function SelectEleDom() {
  return (
    <div className="content-container">
      <h3 className="title">Sélectionner des éléments dans le DOM</h3>
      <p>
        Ce chapitre est le plus important parce que si tu ne sais pas
        sélectionner un élément, tu ne pourra pas jamais le modifier ou le
        supprimer.
      </p>
      <p>
        Il existe cinq grandes méthodes pour sélectionner des éléments dans le
        DOM.
      </p>
      <h4 className="sub-title">1. getElementById()</h4>
      <p>
        Sélectionne un seul élément par son <span>id</span>
      </p>
      <p>Exemple:</p>
      <CodeContainer
        content={codes_select_Ele_dom[0]}
        language="html"
      />
      <CodeContainer content={codes_select_Ele_dom[1]} />
      <p>Toujours retourne un seul élément, car in id doit être unique.</p>
      <h4 className="sub-title">2. getElementsByClassName()</h4>
      <p>Sélectionne plusieurs éléments ayant la même classe.</p>
      <p>
        Retourne une HTMLCollection (Semblable à un tableau, pas exactement un
        tableau).
      </p>
      <p>Exemple:</p>
      <CodeContainer
        content={codes_select_Ele_dom[2]}
        language="html"
      />
      <CodeContainer content={codes_select_Ele_dom[3]} />
      <p>Pour parcourir</p>
      <CodeContainer content={codes_select_Ele_dom[4]} />
      <h4 className="sub-title">3. getElementsByTagName()</h4>
      <p>Sélectionne tous les éléments d'un même type de balise.</p>
      <p>Exemple:</p>
      <CodeContainer content={codes_select_Ele_dom[5]} />
      <p>Même chose : ça retourne une HTMLCollection.</p>
      <h4 className="sub-title">4. querySelector() (Méthode moderne)</h4>
      <p>Sélectionne le premier élément qui correspond à un sélecteur CSS.</p>
      <p>C'est la méthode la plus flexible.</p>
      <p>Tu peut sélectionner: </p>
      <ul>
        <li>id → #id</li>
        <li>class → .class</li>
        <li>balise → p</li>
        <li>combinaisons → .card p</li>
        <li>attributs → input[type="text"]</li>
      </ul>
      <CodeContainer content={codes_select_Ele_dom[6]} />
      <p>Retourne un seul élément.</p>
      <h4 className="sub-title">4. querySelectorAll() (Méthode moderne)</h4>
      <p>Sélectionne tous les éléments qui correspondent au sélecteur CSS</p>
      <p>Retourne une NodeList (proche d'un tableau).</p>
      <CodeContainer content={codes_select_Ele_dom[7]} />
      <p>Note important : <span>HTMLCollection ≠ NodeList</span> </p>
      <ul>
        <li>HTMLCollection est une collection dynamique (mise à jour automatique)</li>
        <li>NodeList est une collection statique (ne se met pas à jour)</li>
      </ul>
    </div>
  );
}
