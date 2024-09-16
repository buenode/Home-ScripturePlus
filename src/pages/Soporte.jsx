import React from 'react'
import Navbar from '../componentes/Navbar'
import'../estilos.css/Soporte.css'



const Soporte = () => {
  return (
    <div>
      <Navbar />
        <h1 className='soporte'>Soporte</h1>

<div>  
  
   <p className='tituloo'>Enviar Retroalimentación</p>
   <p className='subtitulo'>Seleccione lo que necesite</p>
    <select className='select'>   
       <option>—Seleccionar—</option>
       <option>Seleccionar</option>
       <option>Apreciacion</option>
       <option>Sugerrencia</option>
       <option>Crash</option>
       <option>Problema de Contenido</option>
       <option>Problemas de Diseno</option>
       <option>Problema de Sotfware</option>
       <option>Traduccion al Epanol</option>
     </select>
</div>




    </div>
  )
}

export default Soporte