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
    desc: "Beautiful minimalist design and great, fast response with support. Highly recommend. Thanks Marketify!.",
    img: "img/testimonials/1.jpg",
    info1: "Alexander Walker",
    info2: "Graphics Designer",
  },
  {
    desc: "I had a little problem and the support was just awesome to quickly solve the situation. And keep going on.",
    img: "img/testimonials/2.jpg",
    info1: "Baraka Clinton",
    info2: "Construction Engineering",
  },
  {
    desc: "These people really know what they are doing! Great customer support availability and supperb kindness.",
    img: "img/testimonials/3.jpg",
    info1: "Armin Van Buuren",
    info2: "Content Manager",
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
                              <h3>Oxford Univercity</h3>
                              <span>Master Degree</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2010 - 2014</span>
                            </div>
                            <div className="place">
                              <h3>Texas Univercity</h3>
                              <span>Bachelor Degree</span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list_inner">
                            <div className="time">
                              <span>2008 - 2010</span>
                            </div>
                            <div className="place">
                              <h3>Simone College</h3>
                              <span>Associate Degree</span>
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
                <span>Awards</span>
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
                      <img src="img/partners/2.png" alt="" />
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
                      <img src="img/partners/1.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/2.png" alt="" />
                      <a className="cavani_tm_full_link" href="#"></a>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <img src="img/partners/3.png" alt="" />
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
