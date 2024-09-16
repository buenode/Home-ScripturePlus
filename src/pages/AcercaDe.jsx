import React from 'react'
import Navbar from '../componentes/Navbar'
import '../estilos.css/AcercaDe.css'
import imgL from '../assets/imagenes/search.png'


const AcercaDe = () => {
  return (
    <>
      <Navbar />
      <div className='titulo'>  
        <h1 className='bobo'>Acerca de</h1>    
      
       </div>

      <div className='contenedorParrafo'>  
      <p className='primer-p'>ScripturePlus es una aplicación de estudio de las Escrituras completamente interactiva desarrollada para ayudar a los usuarios a comprometerse con la palabra de Dios.

Esperamos que encuentre esta aplicación gratificante y espiritualmente estimulante, ya que está diseñada para facilitar la reflexión de la palabra de Dios en un rico entorno digital. Desarrollada por Book of Mormon Central, cuya misión es edificar una fe perdurable en Jesucristo al hacer el Libro de Mormón accesible, comprensible y defendible para todo el mundo, esta aplicación contiene la edición 2013 de las Escrituras de la Iglesia de Jesucristo de los Santos de los Últimos Días con atractivo material enriquecedor.

En el 2016, La Iglesia de Jesucristo de los Santos de los Últimos Días otorgó una licencia a Book of Mormon Central para crear esta aplicación móvil y ha proporcionado un estímulo continuo a nuestros esfuerzos desde la concesión de la licencia.

Incluye varias versiones del texto, formato con subtítulos, letra roja para resaltar las palabras y nombres de la deidad, identificador de autor/relator, preguntas y respuestas, citas de autoridades Generales, eruditos confiables, gráficos e imágenes, así como los KnoWhys de Book of Mormon Central. La aplicación también incluye cientos de vídeos de algunos de los canales más confiables de YouTube en línea. Aunque hemos tratado de organizar estos videos para incluir solo el mejor contenido, reconocemos las diferencias de creencias e interpretaciones dentro de estos videos. En futuras versiones se contemplan muchas más características técnicas y tipos de contenido.


Las escrituras son inigualables y eternas. Este material de enriquecimiento está organizado para ayudarle a buscar el aprendizaje de los mejores libros tanto por el estudio como por la fe.</p>
  <div className="input">  
    <input type="text" placeholder='Buscar'/>
    <img src={imgL} alt="imegen de buscador" className='imgBuscador' height='23px' />

  </div> 
</div>

<div className='contento'>   
<p className='creditos'>Créditos de ScripturePlus</p>
 
<p className='parrafos'>Book of Mormon Central ha tenido éxito gracias al increíble apoyo de muchas personas, que se enumeran a continuación.</p>
<p className='creditos'>Donantes principales</p>
<p className='parrafos'>Acahand Foundation, vía Steven Harris, Salt Lake City, UT </p>

<p className='parrafos'> American Foundation, vía Bruce Babcock, Phoenix, AZ </p>

<p className='parrafos'> Anonymous </p>

<p className='parrafos'>Alan y Karen Ashton, Orem, UT </p>

<p className='parrafos'>Ashton Family Foundation, Lindon, UT </p>

<p className='parrafos'>Bellevue Family Trust vía Marilyn Victor, Scottsdale, AZ </p>

<p className='parrafos'>Tad R. y Kathryn Callister, Bountiful, UT </p>

<p className='parrafos'>Church of Jesus Christ of Latter-day Saints Foundation, Salt Lake City, UT </p>

<p className='parrafos'>Bryson y Jan Garbett, Salt Lake City, UT </p>

<p className='parrafos'>David y Lynette Jenkins, Logan, UT </p>

<p className='parrafos'>Johnny y Verlanne Johnson, Lewisville, TX </p>

<p className='parrafos'>KSM Family LLC, American Fork, UT </p>

<p className='parrafos'>Arlo y Jackie Luke, Pocatello, ID </p>

<p className='parrafos'>Kirk y Shannon Magleby, American Fork, UT </p>

<p className='parrafos'>Gail Miller y Kim Wilson, Salt Lake City, UT </p>

<p className='parrafos'>Alan C. Miner, Springville, UT </p>

<p className='parrafos'>More Good Foundation, Orem, UT </p>

<p className='parrafos'>Nuvek, LLC, American Fork, UT </p>

<p className='parrafos'>Bill y Linda Perry, Sandy, UT </p>

<p className='parrafos'>Howard y Marianne Reichman, Provo, UT </p>

<p className='parrafos'>Tom Sederberg in honor of Brenda C. Sederberg, Provo, UT </p>

<p className='parrafos'>Duane y Marci Shaw Foundation, Draper, UT </p>

<p className='parrafos'>Stephanie Sorensen Charitable Fund, Laguna Niguel, CA </p>

<p className='parrafos'>Sorenson Legacy Foundation, Midvale, UT </p>

<p className='parrafos'>Welch Family Trust, Salt Lake City, UT </p>

<p className='parrafos'>John S. y the late Unita Welch, Salt Lake City, UT </p>

<p className='parrafos'>John W. y Jeannie Welch, Provo, UT </p>

<p className='parrafos'>John A. Widtsoe Foundation, Los Angeles, CA </p>

<p className='parrafos'>Dow y Lynne Wilson, Palo Alto, CA</p>

<p className='creditos'>Book of Mormon Central</p>


<p className='parrafos'>Bob Babcock, Board</p>

<p className='parrafos'>Tyler Perry, Board</p>

<p className='parrafos'>Scott Petersen, Board</p>

<p className='parrafos'>Ruth Schmidt, Board</p>

<p className='parrafos'>John W. Welch, Chairman</p>

<p className='parrafos'>Lynne Wilson, Board</p>

<p className='creditos'>Comité Directivo</p>

<p className='parrafos'>Taylor Halverson</p>

<p className='parrafos'>Kirk Magleby</p>

<p className='creditos'>Desarrollo Tecnológico</p>
 
<p className='parrafos'> Israel Gonzalez</p>


<p className='parrafos'>KC Kern</p>


<p className='parrafos'>Victor Llanten</p>


<p className='parrafos'>Roberto Solis</p>


<p className='parrafos'>Patricio Soto</p>

<p className='creditos'>Diseño y Control de Calidad</p>

<p className='parrafos'>Nathan Bryant</p>

<p className='parrafos'>Andy Griffin</p>

<p className='parrafos'>Jasmin Gimenez Rappleye</p>

<p className='parrafos'>Nicole Shepard</p>

<p className='parrafos'>Daniel Smith</p>

<p className='creditos'>Desarrollo de Contenido</p>

<p className='parrafos'> Matthew Cutler</p>

<p className='parrafos'>Ryan Dahle</p>

<p className='parrafos'>Brant Gardner</p>

<p className='parrafos'>David Larsen</p>

<p className='parrafos'>Katie Payne</p>

<p className='parrafos'>Neal Rappleye</p>

<p className='parrafos'>Jared Riddick</p>

<p className='parrafos'>Jonathan Riley</p>

<p className='parrafos'>Matthew Roper</p>

<p className='parrafos'>Stephen Smoot</p>

<p className='parrafos'>Zander Sturgill</p>

<p className='creditos'>Traducción al español</p>

<p className='parrafos'>Noé Correa</p>

<p className='parrafos'>Cinthia Gamboa</p>

<p className='parrafos'>Cecy Gastelum</p>

<p className='parrafos'>Jesús Inda</p>

<p className='parrafos'>Alejandro Martinez</p>

<p className='parrafos'>Benjamin Monroy</p>

<p className='parrafos'>Benji Monroy</p>

<p className='parrafos'>Melody Monroy</p>

<p className='parrafos'>Lily Montesinos</p>

<p className='parrafos'>Javier Tovar</p>

<p className='parrafos'>Fernando Vasquez</p>

<p className='creditos'>Digitalización</p>

<p className='parrafos'>Megan Searles</p>

<p className='parrafos'>Elena Welch</p>

<p className='creditos'>Consultores</p>

<p>Anthony Celaya</p>

<p>Nathan Crowther</p>

<p>Tyler Griffin</p>

<p>Derek Hansen</p>

<p>Todd Rowe</p>

<p>Bryan Sebesta</p>

</div>




    </>
  )
}

export default AcercaDe       