import { Routes, Route } from 'react-router-dom'

 import  Home from './pages/Home'
 import AcercaDe from './pages/AcercaDe'
 import Politica from './pages/Politica'
 import Actualizaciones from './pages/Actualizaciones'
 import DescargaApp from './pages/DescargaApp'
 import ScripturePlus from './pages/Home'
 import Soporte from './pages/Soporte'

//  import Navbar from './componentes/Navbar'
import './app.css'

function App() {

  return (
    <>
    
    {/* <Navbar /> */}
    <div className='nav'>   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AcercaDe' element={<AcercaDe/>} />
        <Route path='/Politica' element={<Politica/>} />
        <Route path='/Actualizaciones' element={<Actualizaciones/>} />   
        <Route path='/DescargaApp' element={<DescargaApp/>} />
        <Route path='/ScripturePlus' element={<Home/>} />
        <Route path='/Soporte' element={<Soporte/>} />
        <Route path='/Volver al menu' element={<home/>} />
         
       
      </Routes>

      
      
      </div>





    </>
  )
}

export default App
