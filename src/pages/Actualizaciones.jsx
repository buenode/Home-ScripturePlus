import React from 'react'
import Navbar from '../componentes/Navbar'
import '../estilos.css/Actual.css'
import imgL from '../assets/imagenes/search.png'

const Actualizaciones = () => {
  return (
    <div>
      <Navbar />
        <h1 className='actualizaciones5'>Actualizaciones</h1>

  <div className='contenedorrPrincipal'> 
        <div className='cont'>  
           <p className='parrafoDeactual'>El orden de prioridad de las nuevas actualizaciones se basa en una serie de factores, incluidos los requisitos legales, el impacto de la solicitud propuesta y el número de solicitudes similares recibidas. En esta página, usted puede encontrar información sobre futuras características y actualizaciones, así como las solicitudes que ya hemos recibido.
           Si tiene un error, problema o sugerencia que no se encuentre en esta lista, no dude en enviar un ticket a nuestro sistema de soporte.</p>
            <div className='bbuussccaaddoorr'>
                <input type="text" placeholder='Buscar' />
                <img src={imgL} alt="imagenBuscador" height='23px'/>
            </div>
        </div>

       <div className='ticket'>
           <p className='ticketParrafo'>Abrir un ticket</p>
       </div>
      <br/>
       <p className='carateristica'>Carateristicas de vesiones futuras</p>
      <p className='titulos4'>Android</p>
      <p className='titulos3'>En los próximos meses, ScripturePlus será lanzada para los usuarios de Android en todos los dispositivos.</p>
      <p className='titulos4'>Orientación horizontal</p>
      <p className='titulos3'>En próximas versiones, los usuarios podrán interactuar con la aplicación tanto en modo vertical como horizontal. En este momento, la aplicación está programada para funcionar verticalmente.</p>
      <p className='titulos4'>Más contenido para cada volumen de Escritura</p>
      <p className='titulos3'>El equipo trabajará continuamente para crear y conservar más contenido de estudio suplementario para hacer que las Escrituras sean aún más atractivas. Esperamos añadir más imágenes a medida que obtengamos más permisos de artistas religiosos de todo el mundo. También añadiremos continuamente más videos, citas, KnoWhys, preguntas y respuestas así como discursos de Conferencias Generales.</p>
      <p className='titulos4'>Comentarios</p>
      <p className='titulos3'>Book of Mormon Central está desarrollando la integración de comentarios versículo por versículo que serán accesibles en el Panel de Estudio. Comentarios futuros para el Libro de Mormón y el Nuevo Testamento están actualmente en desarrollo.</p>
      <p className='titulos4'>Resaltado de texto</p>
      <p className='titulos3'>Esto le dará al usuario la habilidad de seleccionar sus versículos favoritos de las Escrituras para recordar, resaltando en varios colores.</p>
      <p className='titulos4'>Marcadores</p>
      <p className='titulos3'>Esto le dará al usuario la habilidad de mantener un registro de ciertos lugares en las escrituras para uso futuro.</p> 
      <p className='titulos4'>Notas</p>
      <p className='tuitulos3'>El usuario podrá tomar notas y escribir ideas sobre impresiones y pensamientos en pasajes de las Escrituras.</p>
      <p className='titulos4'>Planes de Lectura</p>
      <p className='titulos3'>Los usuarios pueden realizar rápido y de manera fácil su estudio diario de las Escrituras a través de planes de lectura opcionales, que asignarán a los usuarios pasajes particulares de las Escrituras o contenido que seguirán un tema o patrón de estudio.</p>
      <p className='titulos4'>Referencias cruzadas</p>
      <p className='titulos3'>Similar a las notas al pie de página en la publicación oficial de la Iglesia de las Escrituras, proporcionaremos referencias cruzadas a escrituras relacionadas para facilitar el pensamiento crítico.</p>
      <p className='titulos4'>Configuración de texto</p>
      <p className='titulos3'>El usuario puede ajustar el tamaño, la fuente y el espaciado de las líneas del texto de las Escrituras.</p>
      <p className='titulos4'>Versículo del día</p>
      <p className='titulos3'>Reciba notificaciones acerca del Versículo del Día, como recordatorio del estudio diario de las Escrituras.</p>
      <p className='titulos4'>Capacidad social</p>
      <p className='titulos3'>Tener la habilidad de reaccionar, compartir y comentar sobre varias escrituras o piezas de contenido de estudio.</p>
      <p className='tituos4'>Accesibilidad</p>
      <p className='titulos3'>Nos esforzaremos continuamente para asegurar que ScripturePlus sea accesible para varios tipos de discapacidad.</p>
      <p className='titulos4'>Herramientas de estudio adicionales</p>
      <p className='titulos3'>En el futuro se desarrollarán más herramientas de estudio, como mapas, cronogramas y etimologías.</p>
      <p className='titulos4'>Más resaltado en rojo para palabras</p>
      <p className='titulos3'>Ahora mismo solo el Libro de Mormón resalta las palabras y los nombres de Dios en rojo. Sin embargo, esperamos pronto expandirnos a otros volúmenes de la Escritura como el Antiguo Testamento y el Nuevo Testamento.</p>
      

   </div>

   


    </div>
  )
}

export default Actualizaciones