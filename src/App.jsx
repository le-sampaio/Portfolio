import './App.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Perfil from  './Components/Perfil.jsx';
import Projetos from './Components/Projetos.jsx';
import PaginaSkills from './Components/PaginaSkills.jsx';

function App() {
  return (
  
    <Router>
      <Routes>
        <Route path = '/' element = {<Perfil/>}></Route>
        <Route path = '/Projetos' element={<Projetos/>}></Route>
        <Route path='/Skills' element={<PaginaSkills/>}></Route>
      </Routes>
    </Router>

  )
}

export default App
