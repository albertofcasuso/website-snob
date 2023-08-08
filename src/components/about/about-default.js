import React from "react";
import Image from "next/image";
import ProgressBar from "../progressBar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const circleProgressData = [
  { language: "English", progress: 95 },
  { language: "Russian", progress: 80 },
  { language: "Arabic", progress: 90 },
];

const progressBarData = [
  { bgcolor: "#7d7789", completed: 60, title: "HTML & CSS" },
  { bgcolor: "#7d7789", completed: 85, title: "Javascript" },
  { bgcolor: "#7d7789", completed: 90, title: "WordPress" },
];

const services = [
  {
    desc: "Mazdey is a fantastic talent with a clear vision of how fashion should be tackled and with unique creativity. She has the capacity to listen to the main message that needs to be delivered and add her essence that will exceed your expectations.",
    img: "img/testimonials/1.jpg",
    info1: "Veronica Madrigal",
    info2:
      "SEO | Content Creator | Brand Designer | Founder at Mekishico | Co-Founder at GeekGirlsMX",
  },
  {
    desc: "La sensibilidad de Mazdey le ha convertido en un referente del Fashion Film, una herramienta sumamente importante para la industria de la moda que -en los últimos años- se ha convertido en algo obligado para cualquier marca. ¡Felicidades Mazdey!",
    img: "img/testimonials/2.jpg",
    info1: "Saúl Rubio Alzaga",
    info2: "Comunicación enfocada al sector moda",
  },
  {
    desc: `Mazdey definitivamente tiene un gran conocimiento sobre la producción audiovisual.
    Tuve la oportunidad de trabajar con ella en la conferencia: "Fashion Film como Estrategia de Marca", impartida a través de la iniciativa AMMeducación del Abierto Mexicano de la Moda, y es una persona sumamente profesional, creativa y amable.
    Me complace decir que ha sido muy grato coincidir con Mazdey, y evidentemente es muy buena en su área de desarrollo 😄.`,
    img: "img/testimonials/3.jpg",
    info1: "David Cerino",
    info2:
      "Empresario y promotor de arte y cultura en México. Fundador & Director General de Abierto Mexicano de la Moda.",
  },
];

export default function AboutDefault({ ActiveIndex }) {
  return (
    <>
      {/* <!-- ABOUT --> */}
      <div
        className={
          ActiveIndex === 1
            ? "cavani_tm_section active animated fadeInUp"
            : "cavani_tm_section active hidden animated"
        }
        id="about_"
      >
        <div className="section_inner">
          <div className="cavani_tm_about">
            <div className="biography">
              <div className="cavani_tm_title">
                <span>About Me</span>
              </div>
              <div className="wrapper">
                <div className="left">
                  <p>
                    Soy Mazdey, directora de cine y publicidad especializada en
                    fashion film. Cuento con más de 9 años de experiencia
                    creando vídeos para artistas, diseñadores y marcas de moda
                    en mi productora Snob Solutions. Mis films han sido
                    seleccionados y premiados en múltiples festivales
                    internacionales de cine. Gracias a mi trayectoria, diversas
                    universidades y plataformas han confiado en mí como
                    conferencista y tallerista en el género del fashion film.
                    Además, he tenido el honor de ser invitada como curadora y
                    jurado en prestigiosos festivales internacionales,
                    incluyendo GRRL HAUS CINEMA en Berlín, Luna de Cortos en
                    León, España, y el MADRID Indie Film Festival en España.
                  </p>
                  <p>
                    Mi experiencia y pasión por lo que hago garantizan que cada
                    proyecto se convierta en una pieza audiovisual única,
                    mostrando tu marca de manera atractiva y artística.
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Show your brand, show your passion.
                    </span>
                  </p>
                </div>
                <div className="right">
                  <ul>
                    <li>
                      <span className="first">Name:</span>
                      <span className="second">Mazdey</span>
                    </li>
                    <li>
                      <span className="first">Address:</span>
                      <span className="second">Madrid, Spain</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="services">
              <div className="wrapper">
                <div className="service_list">
                  <div className="cavani_tm_title">
                    <span>Services</span>
                  </div>
                  <div className="list">
                    <ul>
                      <li>Dirección audiovisual</li>
                      <li>Fashion Film</li>
                      <li>Edición de video</li>
                      <li>Dirección de arte </li>
                      <li>Asesorías para proyectos creativos</li>
                    </ul>
                  </div>
                </div>
                <div className="service_list">
                  <div className="cavani_tm_title">
                    <span>Interests</span>
                  </div>
                  <div className="list">
                    <ul>
                      <li>Cine y Moda</li>
                      <li>Colectivos de arte y cultura</li>
                      <li>
                        Activismo Antirracista, interseccionalidad y LGBTQ
                      </li>
                      <li>Anime, Gatos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume">
              <div className="wrapper">
                <div className="education">
                  <div className="cavani_tm_title">
                    <span>Education</span>
                  </div>
                  <div className="list">
                    <div className="univ">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2014 - 2016</span>
                            </div>
                            <div className="place">
                              <h3>Mastered HQ, UK</h3>
                              <span>Online Talent program by Nick Knight</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2010 - 2014</span>
                            </div>
                            <div className="place">
                              <h3>Secretaria de cultura Jalisco, MX</h3>
                              <span>
                                Formación en el sector empresarial e industrias
                                creativas
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2008 - 2010</span>
                            </div>
                            <div className="place">
                              <h3>
                                Universidad de arte, arquitectura y diseño UDG,
                                México{" "}
                              </h3>
                              <span>
                                Lic. en Diseño para la comunicación gráfica{" "}
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="experience">
                  <div className="cavani_tm_title">
                    <span>Experience</span>
                  </div>
                  <div className="list">
                    <div className="univ">
                      <ul>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2018 - running</span>
                            </div>
                            <div className="place">
                              <h3>Envato Elements</h3>
                              <span>Exclusive Author</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2015 - 2018</span>
                            </div>
                            <div className="place">
                              <h3>Avo Corporation</h3>
                              <span>Content Manager</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2012 - 2015</span>
                            </div>
                            <div className="place">
                              <h3>FC Barcelona</h3>
                              <span>Football Player</span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="partners">
              <div className="cavani_tm_title">
                <span>Key Awards</span>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/1.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/2.jpg" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/3.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/4.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/5.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/6.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/7.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/8.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/9.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/10.tif" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/11.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/12.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/13.jpeg" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/14.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/15.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/16.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/17.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="testimonials">
              <div className="cavani_tm_title">
                <span>Testimonials</span>
              </div>
              <div className="list">
                <ul className="">
                  <li>
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      // navigation={{
                      //     prevEl: ".custom_prev",
                      //     nextEl: ".custom_next",
                      // }}
                      className="custom-class"
                      breakpoints={{
                        768: {
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {services.map((item, i) => (
                        <SwiperSlide key={i}>
                          <div className="list_inner">
                            <div className="text">
                              <i className="icon-quote-left" />
                              <p>{item.desc}</p>
                            </div>
                            <div className="details">
                              <div className="image">
                                <div className="main" data-img-url={item.img} />
                              </div>
                              <div className="info">
                                <h3>{item.info1}</h3>
                                <span>{item.info2}</span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT --> */}
    </>
  );
}
