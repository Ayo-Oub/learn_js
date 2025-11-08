import JsxCode from '../components/JsxCode'
import mapCods from '../Data/mapData'
import '../styles/pages/pages.css'

export default function MapPage() {
  return (
    <div className='cours-container'>
            <h2 className='cours-title'>La méthode map() en JavaScript</h2>
            <h4 className='cours-section'>Objectif</h4>
            <p>La méthode map() permet de parcourir un tableau et créer un nouveau tableau en transformant chaque élément selon une fonction donnée. <br /> Elle ne modifie pas le tableau d’origine, mais retourne un nouveau tableau.</p>
            <h4 className='cours-section'>Syntaxe</h4>
            <JsxCode content={mapCods[0]} language='js' />
            <ul>
                 <li> element → représente l’élément actuel du tableau lors du parcours.</li>
                 <li>index (optionnel) → c’est la position de l’élément dans le tableau.
                      Par exemple, pour [1, 2, 3], l’index prendra les valeurs 0, 1, puis 2.</li>
                 <li>array (optionnel) → correspond au tableau complet d’origine sur lequel map() est appelée.
                      Tu peux l’utiliser si tu veux comparer ou accéder à d’autres éléments du même tableau pendant l’itération.</li>
            </ul>
            <h4 className='cours-section'>Exemple simple</h4>
            <JsxCode content={mapCods[1]} language='js' />
            <p>Ici :</p>
            <ul>
                 <li>On parcourt chaque nombre du tableau nombres.</li>
                 <li>On retourne n * 2.</li>
                 <li>Le tableau original reste inchangé, et map() crée un nouveau tableau [2, 4, 6, 8].</li>
            </ul>
            <h4 className='cours-section'>Exemple avec index</h4>
            <JsxCode content={mapCods[2]}/>
       </div>
       
  )
}
