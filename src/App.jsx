import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'
import MapPage from './pages/MApPAge';
import EssaiePage from './pages/EssaiePage';

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/essaie' element={<EssaiePage />} />
      <Route path='/map' element={<MapPage/>}/>
    </Routes>
  );
}

export default App
