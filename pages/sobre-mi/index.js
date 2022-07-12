import InstagramLink from "../../components/InstagramLink";
import Image from "next/image";
import Link from 'next/link'
import headshot from '../../assets/headshot_mazdey.png'

function SobreMi() {
  return (
    <div className="container-sobremi">
      <div className="container-sobremi__title">
        <h1 className="home"><Link href="/"><a>&lt; HOME</a></Link></h1>
        <h1><a href="#premios">PREMIOS</a> / <a href="#charlas">CONFERENCIAS</a> / <a href="#prensa">PRENSA</a></h1>
      </div>

      <hr />

      <div className="container-sobremi__personal">

        <div className="container-sobremi__personal-titulo">
          <h1>MAZDEY SNOB</h1>
          <InstagramLink />
          {/* <Image src={headshot} alt="headshot mazdey" width={'150px'} height={'150px'}/> */}
        </div>

        <div className="container-sobremi__personal-texto">
          <p>
            Nacida en México y actualmente viviendo en España. Mazdey estudio la
            Licenciatura en Diseño Gráfico en la Universidad de Guadalajara,
            aunque siempre ha tenido interés por el cine y la realización
            cinematográfica. A través del fashion film, ha explorado el lenguaje
            audiovisual creando historias que reflejan su propia visión del
            mundo.

          </p>

          <p>
            Mazdey también es la fundadora de Snob Solutions, una productora
            audiovisual independiente que se enfoca en proyectos de moda, arte,
            música y estilo de vida.
          </p>
          <p>
            Con más de siete años de experiencia en la producción de video para
            artistas, diseñadores y marcas de moda, varias universidades y
            plataformas la han contratado para hablar sobre el fashion film como
            género a través de su experiencia como directora y este año fue
            invitada invitada como curadora especializada para el festival GRRL
            HAUS CINEMA de Berlín. Durante su trayectora su trabajo ha sido
            premiado y seleccionado, en varios festivales internacionales de
            fashion film.
          </p>
        </div>
      </div>

      <hr />
      <div className="container-sobremi__premios">
        <h1 id="premios">PREMIOS</h1>
        <p>
          <span className="negritas"> Best Experimental Short Winner </span> -
          NOVA Frontier Film Festival (Brooklyn, New York, 2022)
        </p>
        <p>
          <span className="negritas">1 First place People&apos;s Choice Winner </span>
          ASVOFF 13 (París, Francia, 2021)
        </p>
        <p>
          <span className="negritas">Phenomenal Woman in Film Award</span> -
          Cinema Femme Short Film Festival (Chicago, 2022)
        </p>
        <p>
          <span className="negritas"> Best Foreign Fashion Film Winner </span> -
          Digital media Fest (Roma, Italia, 2021)
        </p>
        <p>
          <span className="negritas"> 2 Place Best Fashion Film Winner </span>-
          Fash Film Fete (Phoenix, 2021)
        </p>
        <p>
          <span className="negritas"> Best Glam Winner </span> -
          LAFashionFestival, (Los Angeles California, 2020)
        </p>
        <p>
          <span className="negritas"> Best Emerging Talent Nominee </span> -
          London Fashion Film Festival, (2021)
        </p>
        <p>
          <span className="negritas"> Top 10 Best Production Design </span> -
          Berlin Commercial (2021)
        </p>
        <p>
          <span className="negritas"> Best Accessory Design Nominee </span> -
          Sarajevo Fashion Film Festival (2020)
        </p>
        <p>
          <span className="negritas"> Best LGBTQ -short Winner </span> -
          Emberlight International Film Festival (Michigan, 2021)
        </p>
        <p>
          <span className="negritas"> Best Fashion Story Winner </span> - Panama
          Fashion Film Festival (2018)
        </p>
        <p>
          <span className="negritas"> Mejor styling Winner </span> - México
          Fashion Film Festival (2017)
        </p>
        <p>
          <span className="negritas"> Beauty prize Winner </span> - ASVOFF MX
          (2014)
        </p>
        <p>
          <span className="negritas"> GRRL HAUS Cinema </span> - Berlin (2018),
          (2021)
        </p>
        <p><span className="negritas">GRRL HAUS TELEPHONE</span> (2021)</p>
        <p>
          <span className="negritas"> Femme Frontera Filmmaker Showcase</span>
          (El Paso, Texas, 2021)
        </p>
        <p>
          <span className="negritas">
            Canadian International Fashion Film Festival
          </span>
          (2016), (2017), (2018) y (2020) (2021)
        </p>
        <p>
          <span className="negritas"> Fashion Film Festival Milano </span>
          (2017) (2021)
        </p>
        <p>
          <span className="negritas">Berlin Fashion Film Festival </span> (2017)
          (2021)
        </p>
        <p>
          <span className="negritas">Girona Film Festival </span> (2021)
        </p>
        <p>
          <span className="negritas">VAEFF</span> (New, york 2021)
        </p>
        <p>
          <span className="negritas"> Chicago Fashion Film Festival </span>
          (2016), (2017), (2020)
        </p>
        <p>
          <span className="negritas">
            Bokeh South Africa Fashion Film Festival
          </span>
          (2017) (2021)
        </p>
        <p>
          <span className="negritas">Croatia Fashion Film</span> Festival “Best
          actor” & “Best Makeup” Nominee (2021)
        </p>
        <p>
          <span className="negritas">UK FASHION FILM FESTIVAL </span>“Best actor
          winner” (2021)
        </p>
        <p>
          <span className="negritas">Fashion Film Festival Amsterdam </span>
          (2021)
        </p>
        <p>
          <span className="negritas">Buenos Aires Fashion Film Festival </span>
          (2021)
        </p>
        <p>
          <span className="negritas">Kino Short Film Festival </span>( UK, 2021)
        </p>
        <p>
          <span className="negritas">Istanbul Fashion Film Festival</span>
          (2018), (2021)
        </p>
        <p>
          <span className="negritas">Bucharest Fashion Film Festival</span>
          (Romania, 2021)
        </p>
        <p>
          <span className="negritas">Beijing Queer Film Festival</span> (2021)
        </p>
        <p>
          <span className="negritas"> Aesthetica concept </span>(Irlanda, 2020)
        </p>
        <p>
          <span className="negritas">
            Caribbean Fashion and Arts Feature Festival
          </span>
          (2017)
        </p>
        <p>
          <span className="negritas">Porto Fashion Film Festival </span> (2019)
          y (2020)
        </p>
        <p>
          <span className="negritas">
            Republica Dominicana Fashion FilmFestival
          </span>
          (2018) (2020)
        </p>
        <p>
          <span className="negritas">Copenhagen Fashion Film </span>(2016)
        </p>
        <p>
          <span className="negritas">Mexico Fashion Film Festival </span> (2016)
          y (2017)
        </p>
        <p>
          <span className="negritas"> Dulcísimo Ovario </span> - Pachucha,
          Hidalgo (2018) (2020) (2021)
        </p>
        <p>
          <span className="negritas">Cinexmujeres </span> (2020)
        </p>
        <p>
          <span className="negritas">Las Mains Gauche </span> - Francia (2021)
        </p>
        <p>
          <span className="negritas">Pigdon </span> - Australia (2021)
        </p>
        <p>
          <span className="negritas">
            Melbourne Australian Fashion Film Festival
          </span>
          (2021)
        </p>
        <p>
          <span className="negritas">Cinema Femme Short-Film Festival </span> -
          Chicago (2021)
        </p>
        <p>
          <span className="negritas">Taste Awards </span>- (2021)
        </p>
        <p>
          <span className="negritas">Fashion Film Festival Kyiv </span> (2021)
        </p>
      </div>
      <hr />
      <div className="container-sobremi__charlas">
        <h1 id="charlas">CONFERENCIAS</h1>
        <p>
          <span className="negritas">
            INTERMODA, (Guadalajara, México, 2022)
          </span>
        </p>
        <p>IM TALKS “FASHION FILM: LA NUEVA ESTRATEGIA DE MARCA” </p>
        <br />
        <p>
          <span className="negritas">
            GRRL HAUS CINEMA, (Berlín, Alemania, 2022)
          </span>
        </p>
        <p>Curaduría especializada en Fashion Film </p>
        <br />
        <p>
          <span className="negritas">
            CANIFF CHATS (2021) CANADIAN INTERNATIONAL FASHION FILM FESTIVAL
          </span>
        </p>
        <p>IG LIVE con Roger Gingerich Director del Festival</p>
        <br />
        <p>
          <span className="negritas">

            DIVERSE, Moda e industrias creativas (Bilbao, España, 2022)
          </span>
        </p>
        <p>“Fashion Film como estrategia de marca”</p>
        <p>
          <span className="negritas"> Moda punto 3 (Zacatecas, 2021)</span>
        </p>
        <p>“Fashion Film como estrategia de marca”</p>
        <br />
        <p>
          <span className="negritas">
            Universidad de Guadalajara, Centro de Arte, Arquitectura y Diseño
            Coloquio de diseño.
          </span>
        </p>
        <p>“Fashion film como herramienta de comunicación”</p>
        <br />
        <p>
          <span className="negritas">

            UNAM - FCentro de estudios en Ciencas de la Comunicación.
          </span>
        </p>
        <p>“Realización de un Fashion Film” </p>
        <br />
        <p>
          <span className="negritas">

            Universidad Anáhuac Mayab (Merida, Yucatán. 2019)
          </span>
        </p>
        <p>“Fashion Film como estrategia de marca” </p>
        <br />
        <p>
          <span className="negritas">

            UVM Campus Lomas Verdes (CDMX, 2015)
          </span>
        </p>
        <p>“Dirección y arte para un Fashion Film”</p>
        <br />
        <p>
          <span className="negritas">

            Puebla Viste Diseño (Zaragoza, Puebla. 2020)
          </span>
        </p>

        <p>“Fashion Film como estrategia de marca”</p>
        <br />
        <p>
          <span className="negritas">

            Puebla Viste Diseño (Zaragoza, Puebla. ANIVERSARIO)
          </span>
        </p>
        <p>
          “Siete pecados capitales del fashion film” (Errores y como mejorar
          para comunicar)
        </p>
        <br />
        <p>
          <span className="negritas"> Aesthetica Concept (Irlanda, 2020)</span>
        </p>

        <p>Take over </p>
        <br />

        <p>
          <span className="negritas">

            Hilario México (León, Guanajuato, 2020)
          </span>
        </p>

        <p>“Fashion Film; Show your brand, show your passion “</p>
        <br />

        <p>
          <span className="negritas">

            Ka Volta Magazine (Guadalajara, 2020)
          </span>
        </p>

        <p>“Fashion film para el futuro de la industria “</p>
        <br />

        <p>
          <span className="negritas"> LeónFF (León, Guanajuato, 2020)</span>
        </p>

        <p>
          “Masterclass: Realización Fashion Film” + Jurado del concurso LeónFF
        </p>
        <br />
      </div>
      <hr />
      <div className="container-sobremi__prensa">
        <h1 id="prensa">PRENSA</h1>
        <p>
          <a href=" https://i-d.vice.com/it/article/epxbqm/migliori-fashion-film-2021" rel='noopener noreferrer' target='_blank'>
            "Mijo" ID- Italy
            Among the 21 FASHION FILMS FAVS by the Vice team
          </a>
        </p>
        <p>
          <a href=" https://directorsnotes.com/2022/02/15/mazdey-snob-mijo/" rel='noopener noreferrer' target='_blank'>
            Director´s Notes Interview
          </a>
        </p>
        <p><a href=" https://visualaggression.com/art-design/mazdey-y-su-interesante-vision-del-fashion-film-moda-directora/" rel='noopener noreferrer' target='_blank'>
          Mazdey y su interesante visión del Fashion Film
        </a>
        </p>
        <p >
          <a href=" https://cinemafemme.com/2022/05/20/interview-mijo-director-mazdey-snob-2022-recipient-of-the-cinema-femme-short-film-fest-phenomenal-woman-in-film-award/" rel='noopener noreferrer' target='_blank'> Interview: “Mijo” director Mazdey Snob, 2022 recipient of the Cinema Femme Short Film Fest Phenomenal Woman in Film award
          </a>
        </p >
        <p>
          <a href=" https://www.kinoshortfilm.com/blog/2020/12/18/short-of-the-week-mijo" rel='noopener noreferrer' target='_blank'>
            Kino London “Mijo” Short of the week, interview
          </a>
        </p>

        <p> <a href=" https://www.pigdonfilmfest.com/mijo-mazdey-snob" rel='noopener noreferrer' target='_blank'>
          Pigdon Film Festival - Interview
        </a> </p>
        <p > <a href=" https://www.kavolta.com/2019/03/snob-solutions/ " rel='noopener noreferrer' target='_blank'>
          Snob Solutions, narrando historias a través del fashion film - Kavolta
        </a> </p >
        <p > <a href=" https://www.neo2.com/fashion-film-mijo-mazdey-snob-mexico-anos-40-pachucos/" rel='noopener noreferrer' target='_blank'>
          Neo2 Magazine - “Estreno de Mijo”
        </a> </p >
        <p > <a href=" https://bubblegumclub.co.za/fashion/mijo-a-colourful-film-inspired-by-pachucos-fashion/" rel='noopener noreferrer' target='_blank'>
          Bubblegum Club -  Johannesburg, South Africa
        </a> </p >
        <p > <a href=" https://www.kavolta.com/2020/07/mazdey-snob-solutions-fashion-film-kavoltalive/ " rel='noopener noreferrer' target='_blank'>

          Entrevista con Mazdey, El Fashion Film para el #futuromoda
        </a> </p >
        <p > <a href=" https://www.kavolta.com/2015/03/entrevista-snob-solutions/ " rel='noopener noreferrer' target='_blank'>
          Entrevista / Snob Solutions Fashion Film
        </a> </p >
        <p > <a href=" http://geekgirls.com.mx/el-storytelling-en-videos-de-moda-en-guadalajara/ " rel='noopener noreferrer' target='_blank'>
          El storytelling en videos de moda - Mazdey
        </a> </p >
      </div >
    </div >
  );
}

export default SobreMi;
