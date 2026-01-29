
import '../contents/styling_cours.css'
import CodeContainer from "../../components/UI/CodeContainer";
import { numbers_codes } from "../../data/js_data";
import { numbers_codes_exo } from "../../data/js_data";
export default function Numbers() {
  return (
    <div className="content-container">
      <h3 className="title">Les nombres</h3>
      <p>
        En JavaScript, les nombres sont utilisés pour représenter à la fois les
        entiers et les nombres à virgule flottante. Il n'y a pas de type
        distinct pour les entiers.
      </p>
      <h4 className="sub-title">1. Déclaration des nombres</h4>
      <CodeContainer content={numbers_codes[0]} />
      <p>Tous ces nombres sont de type number.</p>
      <CodeContainer content={numbers_codes[1]} />
      <h4 className="sub-title">2. NaN et Infinity</h4>
      <p>
        En JavaScript, NaN (Not-a-Number) est une valeur spéciale qui indique
        qu'une opération mathématique n'a pas abouti à un nombre valide. Par
        exemple, diviser 0 par 0 ou tenter de convertir une chaîne non numérique
        en nombre renverra NaN.
      </p>

      <CodeContainer content={numbers_codes[2]} />
      <p>
        Notez que NaN n'est pas égal à lui-même, donc pour vérifier si une
        valeur est NaN, il est recommandé d'utiliser la fonction Number.isNaN().
      </p>
      <p>
        Infinity est une autre valeur spéciale qui représente l'infini. Par
        exemple, diviser un nombre positif par 0 renverra Infinity, tandis que
        diviser un nombre négatif par 0 renverra -Infinity.
      </p>
      <CodeContainer content={numbers_codes[3]} />
      <h4 className="sub-title">5. Conversion vers les nombres</h4>
      <p>
        JavaScript fournit plusieurs méthodes pour convertir des valeurs en
        nombres, telles que Number(), parseInt(), et parseFloat().
      </p>
      <CodeContainer content={numbers_codes[4]} />
      <CodeContainer content={numbers_codes[5]} />
      <CodeContainer content={numbers_codes[6]} />
      <h4 className="sub-title">6. Opérations de base</h4>
      <p>JavaScript prend en charge les opérations arithmétiques de base :</p>
      <ul>
        <li>
          Addition : <code>+</code>
        </li>
        <li>
          Soustraction : <code>-</code>
        </li>
        <li>
          Multiplication : <code>*</code>
        </li>
        <li>
          Division : <code>/</code>
        </li>
        <li>
          Modulo (reste de la division) : <code>%</code>
        </li>
      </ul>
      <CodeContainer content={numbers_codes[7]} />
      <h4 className="sub-title">7. Incrémentation / décrémentation</h4>
      <p>
        Incrémentation et décrémentation sont des opérations courantes en
        programmation pour augmenter ou diminuer la valeur d'une variable
        numérique de 1.
      </p>
      <p>
        En JavaScript, vous pouvez utiliser les opérateurs d'incrémentation (++)
        et de décrémentation (--) pour effectuer ces opérations de manière
        concise.
      </p>
      <CodeContainer content={numbers_codes[8]} />

      <CodeContainer content={numbers_codes[9]} />
      <h4 className="sub-title">8. L'objet Math</h4>
      <p> JavaScript fournit un objet intégré appelé Math qui offre</p>
      <ul>
        <li>
          Fonctions mathématiques : telles que Math.sqrt() pour la racine
          carrée, Math.pow() pour la puissance, Math.abs() pour la valeur
          absolue, etc.
        </li>
        <li>
          Constantes mathématiques : telles que Math.PI pour la valeur de π,
          Math.E pour la base du logarithme naturel, etc.
        </li>
        <li>
          Génération de nombres aléatoires : avec Math.random(), qui renvoie un
          nombre flottant pseudo-aléatoire compris entre 0 (inclus) et 1
          (exclus).
        </li>
      </ul>
      <p>Voici quelques exemples d'utilisation de l'objet Math :</p>
      <p>Arrondis</p>
      <CodeContainer content={numbers_codes[10]} />
      <p>Puissances et racines</p>
      <CodeContainer content={numbers_codes[11]} />
      <p>Min, Max, aléatoire</p>
      <CodeContainer content={numbers_codes[12]} />
      <p>Nombre aléatoire entre 1 et 10 :</p>
      <CodeContainer content={numbers_codes[13]} />
      <h4 className="sub-title">9. Formatage des nombres</h4>
      <p>
        JavaScript fournit des méthodes pour formater les nombres, telles que
        toFixed() pour définir le nombre de décimales et toPrecision() pour
        définir le nombre de chiffres significatifs.
      </p>
      <CodeContainer content={numbers_codes[14]} />
      <p>Retourne une chaîne.</p>
      <h4 className="sub-title">10. Comparaisons et pièges</h4>

      <CodeContainer content={numbers_codes[15]} />
      <p>L'opérateur + peut faire une concaténation.</p>
      <CodeContainer content={numbers_codes[16]} />
      <h4 className="sub-title">11. Exercices corrigés</h4>
      <p>
        <span>Exercice 1 : Type des valeurs</span>
      </p>
      <p>Donner le type et la valeur du résultat.</p>
      <CodeContainer content={numbers_codes_exo[0]} />
      <p>
        <span>Correction </span>
      </p>
    </div>
  );
}
