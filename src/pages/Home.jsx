import React from 'react'
// import imagen from '../assets/imagenes/proyecto1.jpg'
import './Home.css'
// import Navbar from '../componentes/Navbar'
import img2 from '../assets/imagenes/img 2.jpg'
import img3 from '../assets/imagenes/img3.png'
import img4 from '../assets/imagenes/img4.png'
import img5 from '../assets/imagenes/png 5.png'
import img6 from '../assets/imagenes/img 6.jpg'
import img7 from '../assets/imagenes/ultima.png'
import img8 from '../assets/imagenes/penultima.png'

import Navbar from '../componentes/Navbar'
 

const Home = () => {
  return (
    <div>

    
      
       <div className='foton'>

       
       <Navbar />

        <div className='foton1'> 
         <h1 className='experimenta'>Experimenta las escrituras como nuna antes</h1> 
         <p className='parrafo1'>ScripturePlus traída hasta tí por Book of Mormon Central</p>  
         <button className='btn'>descargar para !OS</button>
         <button  className='btn'>Descargar para Android</button>
        </div>
      </div>


      <br />

      <div className='framen'> 
         <iframe  width="1000" height="580" src="https://www.youtube.com/embed/j4beNcEcj_E?si=-0xKFk8kM11j9Q1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         <p>El video se encuentra en el idioma original (inglés), si lo desea y para mayor comodidad, puede activar la opción de subtítulos desde el reproductor de video.</p>
      </div>

      <div className='tercera-imagen'>   

        <img src={img2} alt="imagen del celular" className='imagen-cel' height='300px'/>

      <div className='primer_parrafo'>  
        <p>ScripturePlus de Book of Mormon Central (BMC) ofrece la más amplia gama de recursos de la Escrituras de los Santos de los
             Últimos Días al alcance de sus dedos para sacar el máximo provecho de su precioso tiempo de estudio de las Escrituras. <br />
              <br />
             Los miembros de la Iglesia de Jesucristo de los Santos de los Últimos Días están usando cada vez más dispositivos móviles 
          para interactuar con el mundo que les rodea, pero no están aumentando de igual manera su compromiso con las Escrituras. Creemos que el
         estudio profundo y consistente de las Escrituras es la clave para una vida plena y llena de fe. Podemos aumentar el compromiso con las 
         Escrituras entre los Santos de los Últimos Días creando una atractiva e inmersiva aplicación para el estudio de las Escrituras.</p>
      </div>   
     </div>

    {/* las tres imagens */}

<div className='contenedorTresimagenes'>  
   <div className='las-tres-imagenes'>

    <div className='imagenes-1'>
      <img src={img3} alt="imagen libro con celular" width="160px"/>
          <h2>Read</h2>
          <span>Disfrute de una experiencia de lectura fluida y receptiva para estudiar las Escrituras.</span>
    </div>
    <div className='imagenes-1'>
      <img src={img4} alt="imagen de una brujula" width="160px"/>
      <h2>Visualizar</h2>
      <span>Sumérjase en las escrituras con material impresionante.</span>
    </div>
    <div className='imagenes-1'>
      <img src={img5}alt="imagen de tres libros y uno parado" width="160px"/>
      <h2>Estudiar</h2>
      <span>Profundice en su estudio explorando el contexto, el contenido y aplicación.</span>
    </div>

   </div> 
      
      <div className='iframe1'> 
        <iframe width="1000" height="580" src="https://www.youtube.com/embed/aSRFFMkNuXc?si=tbi-_RGcCCS5OKiI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <p>El video se encuentra en el idioma original (inglés), si lo desea y para mayor comodidad, puede activar la opción de subtítulos desde el reproductor de video.</p>
     </div>

   </div>

   <div className='celuConLetras'>
    <p className='h2'>Carateristicas de ScripturePlus</p>
    <img src={img6} alt="imagen de celular con referencias" width="900px"/>
   </div>

      {/* fueter */}
   <div className='contenedor1'>

    <div className='contenedor2'>

      {/* <div className='contenedor3'> */}
        <h2 className='contenedor3'>Descargar la aplicacion</h2>
      {/* </div> */}
      {/* <div className='contenedor4'> */}
        <h2 className='contenedor4'>Empieza a mejorar tu estudio de las Escrituras ahora mismo descargando ScripturePlus para iOS o Android</h2>
      {/* </div> */}

    </div>

       <div className='penultimoContenedor2'>   
        <a href='https://play.google.com/store/apps/details?id=com.nuvek.scriptureplus'> <img src={img7} alt="foto de googlePlay" width="200px" id='imagenDescargar'/> </a>
<a href='https://apps.apple.com/us/app/scriptureplus/id1459546023'> <img src={img8} alt="foto de app store" width="150px"/> </a>
      </div>

    {/* </div> */}

   </div>




    </div>
  )
}

export default Home