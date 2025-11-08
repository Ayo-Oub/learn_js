import '../styles/pages/home.css'
import { Link } from 'react-router'
export default function HomePage() {
     return (
          <div className='home-container'>
               <Link to='/essaie' className='home-link' style={{width:"fit-content", alignSelf:"flex-end"}}>Page d'essaie</Link>
               <div className='js-container'>
                    <h2>JS</h2>
                    <div className='home-links'>
                         <Link to='/map' className='home-link'>La méthode map() en JavaScript</Link>
                    </div>

               </div>
               <div className='dom-container'>
                    <h2>DOM</h2>
                    <div className='home-links'>
                         <Link className='home-link'>Event : onClick</Link>
                    </div>

               </div>
               <div className='dom-container'>
                    <h2>BOM</h2>
                    <div className='home-links'>
                         <Link className='home-link'>Copier un texte, quand clique un bouton ou image.</Link>
                    </div>

               </div>
          </div>
     )
}
