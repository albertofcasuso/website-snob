import InstagramLink from './InstagramLink'
import VimeoLink from './VimeoLink'
import Link from 'next/link'

function Text(){
    return(
        <div className="container-text">
            <div className="container-text__intro">
                <h1>MAZDEY</h1>
                <p>Directora audiovisual y creativa especializada en <span>FASHION FILMS</span>.</p>
                <p>Creación de vídeos para moda, música, arte y estilo de vida.</p>
                <Link href="/sobre-mi">
                    <a className="link">Leer Más</a>
                </Link>
            </div>
            <hr/>

            <div className="container-text__portafolio">
                <h3>PORTAFOLIO</h3>
                <ul>
                    <li><VimeoLink/></li>
                    <li><InstagramLink/></li>
                </ul>
                <div className="email">
                    <a href="mailto:the@snobsolutions.com">the@snobsolutions.com</a>
                    <p>CORREO</p>
                </div>
            </div>
            <hr/>
            <div className="container-text__servicios">
                <p>Servicios audiovisuales y creativos para quienes necesiten realizar una idea en vídeo.</p>
                <p>Desarrollo y gestión de todo lo necesario para la realización de tu vídeo, desde pensar la idea / historia / concepto, hasta el producto final.</p>
                <h3>+ SERVICIOS</h3>
                <p className="masservicios">dirección creativa / dirección de arte / coordinación de moda / edición de vídeo</p>
                <p className="masservicios">consultoría para proyectos audiovisuales e industrias creativas</p>
            </div>
        </div>)
}

export default Text