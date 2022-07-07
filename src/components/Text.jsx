import { Link } from "react-router-dom";
import instagram from '../assets/icono_instagram.png'
import vimeo from '../assets/icono_vimeo.png'

export const Text = () =>{
    return(
        <div className="container-text">
            <div className="container-text__intro">
                <h1>MAZDEY</h1>
                <p>Directora audiovisual y creativa, especializada en <span>#FASHIONFILMS</span></p>
                <p>Creacion de videos para moda, musica, arte y estilo de vida.</p>
                <Link className="link" to="/sobre-mi">Leer más</Link>
            </div>
            <hr/>

            <div className="container-text__portafolio">
                <h3>PORTAFOLIO</h3>
                <ul>
                    <li><a className="vimeo-icon" href="https://vimeo.com/snobsolutions" target="_blank" rel="noopener noreferrer"><img src={vimeo} alt="vimeo icon"/></a></li>
                    <li><a className="instagram-icon" href="https://instagram.com/snobsolutions" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="instagram icon"/></a></li>
                </ul>
                <div className="email">
                    <a href="mailto:the@snobsolutions.com">the@snobsolutions.com</a>
                    <p>CORREO</p>
                </div>
            </div>
            <hr/>
            <div className="container-text__servicios">
                <p>Servicios audiovisuales y creativos para todes quienes necesiten realizar una idea en video.</p>
                <p>Desarrollo y gestion de todo lo necesario para la realizacion de tu video, desde pensar la idea/historia/concepto, hasta el producto final.</p>
                <h3>SERVICIOS</h3>
                <p>direccion creativa/ direccion de arte / coordinacion de moda / edicion de video</p>
                <p>consultoria para proyectos audiovisuales e industrias creativas</p>
            </div>
        </div>)
}