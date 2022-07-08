import InstagramLink from '../../components/InstagramLink'

function SobreMi (){
    return (
        <div className="container-sobremi">
            <div className="container-sobremi__title">
                <h3>PREMIOS / CONFERENCIAS / PRENSA</h3>
            </div>
            <hr/>
            <div className="container-sobremi__personal">
            <div className="container-sobremi__personal-texto">
                <h3>MAZDEY SNOB</h3>
                <InstagramLink/>
            </div>
                <div className="container-sobremi__personal-texto">
                    <p>Nacida en México y actualmente viviendo en España. Mazdey estudio la Licenciatura en
Diseño Gráfico en la Universidad de Guadalajara, aunque siempre ha tenido interés por el cine
y la realización cinematográfica. A través del fashion film, ha explorado el lenguaje audiovisual
creando historias que reflejan su propia visión del mundo.</p>
                    <p>Mazdey también es la fundadora de
Snob Solutions, una productora audiovisual independiente que se enfoca en proyectos de
moda, arte, música y estilo de vida.</p>
                    <p>Con más de siete años de experiencia en la producción de
video para artistas, diseñadores y marcas de moda, varias universidades y plataformas la han
contratado para hablar sobre el fashion film como género a través de su experiencia como
directora y este año fue invitada</p>
                </div>
            </div>
            <hr/>
            <div className="container-sobremi__premios">
                
            </div>
        </div>
    )
}

export default SobreMi