import cover from '../assets/portadaordenador.webp'
import Image from 'next/image'

function Cover () {
    return(
    <div className="container-image">
        <Image src={cover} alt="snob solutions cover image"/>
    </div>
    )
}

export default Cover