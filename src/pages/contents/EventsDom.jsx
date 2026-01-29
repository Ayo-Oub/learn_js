import CodeContainer from "../../components/UI/CodeContainer";
import { codes_events_dom } from "../../data/dom";

import "./styling_cours.css";

function EventsDom() {
  return (
    <div className="content-container">
      <h3 className="title">Les évènements</h3>
      <h4 className="sub-title">1. Qu'est-ce qu'un évènement ?</h4>
      <p>
        Un évènement est une action ou une occurrence qui se produit dans le
        système que vous programmez, souvent en réponse à une interaction de
        l'utilisateur. Par exemple, un clic de souris, une pression sur une
        touche du clavier, ou le chargement d'une page sont tous des évènements.
      </p>
      <h4 className="sub-title">2. Types d'évènements courants</h4>
      <ul>
        <li>Clics de souris (click, dblclick)</li>
        <li>Évènements clavier (keydown, keyup)</li>
        <li>Évènements de formulaire (submit, change)</li>
        <li>Évènements de chargement (load, unload)</li>
        <li>Évènements de la souris (mouseover, mouseout)</li>
      </ul>
      <h4 className="sub-title">3. Gestion des évènements</h4>
      <p>
        {" "}
        Pour gérer les évènements en JavaScript, vous pouvez utiliser des
        écouteurs d'évènements (event listeners) qui sont des fonctions appelées
        lorsque l'évènement se produit. Vous pouvez attacher un écouteur à un
        élément HTML en utilisant la méthode <code>addEventListener</code>.
      </p>
      <h4 className="sub-title">4. Exemple de gestion d'un évènement</h4>
      <p>HTML</p>
      <CodeContainer
        content={codes_events_dom[0]}
        language="html"
      />
      <p>JS</p>
      <CodeContainer content={codes_events_dom[1]} />
      <p>
        Dans cet exemple, lorsque l'utilisateur clique sur le bouton, une alerte
        s'affiche avec le message "Bouton cliqué !".
      </p>
      <h4 className="sub-title">5. Autres exemples d'évènements</h4>
      <p>Survoler un bouton :</p>
      <CodeContainer content={codes_events_dom[2]} />
      <CodeContainer content={codes_events_dom[3]} />
      <p>
        Dans cet exemple, des messages sont affichés dans la console lorsque la
        souris survole ou quitte le bouton.
      </p>
      <p>Écouter les frappes clavier dans un champ de texte :</p>
      <CodeContainer
        content={codes_events_dom[4]}
        language="html"
      />
      <CodeContainer content={codes_events_dom[5]} />
      <p>
        Dans cet exemple, chaque fois qu'une touche est enfoncée dans le champ
        de texte, le code de la touche est affiché dans la console.
      </p>
      <p>Les évènements sont essentiels pour créer des applications web</p>
      <h4 className="sub-title">6. L'objet event</h4>
      <CodeContainer content={codes_events_dom[6]} />
      <ul>
        <li>event.target → élément cliqué</li>
        <li>event.type → type d'évènement</li>
      </ul>
      <h4 className="sub-title">7. preventDefault()</h4>
      <p>Empêche le comportement normal.</p>
      <CodeContainer content={codes_events_dom[7]} />
      <p>Très utilisé dans les formulaires.</p>
            <h4 className="sub-title">8. Propagation (notion importante)</h4>
          <p>Un événement remonte vers les parents.</p>
          <CodeContainer content={codes_events_dom[8]} />
    </div>
  );
}

export default EventsDom
