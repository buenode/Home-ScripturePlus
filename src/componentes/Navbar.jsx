import { Link } from "react-router-dom"
import logo from '../assets/imagenes/logo.png'
import'./Navbar.css'

const Navbar = () => {
  return (

    <> 


    <div className="lin1">
      
    <div className="lin2"> 
      <img src={logo} alt="simbolo de escrituras" height='30px'/>
      <Link to='/ScripturePlus' className="lin4-1">ScripturePlus</Link>
    </div>
    <div className="lin3"> 

      {/* <Link to='/DescargaApp' className="lin4">Descarga la App</Link> */}
      <a href="#imagenDescargar" className="lin4">Descarga la App</a>


      <Link to='/Acercade' className="lin4">Acerca de</Link>
      <Link to='/Politica' className="lin4">Politica</Link>
      <Link to='/Soporte' className="lin4">Soporte</Link>
      <Link to='/Actualizaciones' className="lin4">Actualizaciones</Link>
      <Link to='/' className="lin4">Volver al menu</Link>
    </div>
   
    </div>

    
            
    </>

  )
}

export default Navbar