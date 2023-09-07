import React, { useState } from "react";
import { dataImage } from "../../plugin/plugin";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
import servicio1Content from "./content/servicio1.md";
import servicio2Content from "./content/servicio2.md";
import servicio3Content from "./content/servicio3.md";
import servicio4Content from "./content/servicio4.md";

import {
  SVG_Custom1,
  SVG_Custom2,
  SVG_Custom3,
  SVG_Custom4,
  SVG_Custom5,
  SVG_Custom6,
} from "../../plugin/svg";
export default function Service({ ActiveIndex }) {
  const [isOpen, setisOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModal() {
    setisOpen(!isOpen);
  }
  const service = [
    {
      img: "img/news/1.jpg",
      svg: <SVG_Custom1 />,
      text: "Creación de videos para moda, arte, música y estilo de vida. Impulsa tu marca con autenticidad y creatividad en el competitivo mundo de la moda y la publicidad a través del fashion film.",
      date: "August 9, 2021",
      title: "FASHION FILMS",
      content: servicio1Content,
    },
    {
      img: "img/news/2.jpg",
      svg: <SVG_Custom2 />,
      text: "Como directora audiovisual, estoy abierta a participar en proyectos diversos, comerciales e independientes. Disfruto explorar el lenguaje audiovisual y buscar nuevas narrativas que conecten profundamente con la audiencia.",
      date: "August 9, 2021",
      title: "DIRECCIÓN AUDIOVISUAL",
      content: servicio2Content,
    },
    {
      img: "img/news/3.jpg",
      svg: <SVG_Custom3 />,
      text: "Edición / montaje de video para todo tipo de proyectos audiovisuales. No importa si es un proyecto independiente o comercial estaré encantada de trabajar contigo. Desde 80€",
      date: "August 9, 2021",
      title: "EDICIÓN / MONTAJE DE VIDEO",
      content: servicio3Content,
    },
    {
      img: "img/news/4.jpg",
      svg: <SVG_Custom4 />,
      text: "Asesoramiento en desarrollo de proyectos creativos y marca personal Apoyo personalizado en el proceso para emprendedores, artistas y creativos. Logra el éxito de tu proyecto con orientación en conceptualización y comunicación estratégica. Desde 30€",
      date: "August 9, 2021",
      title: "ASESORIA CREATIVA",
      content: servicio4Content,
    },
  ];
  return (
    <>
      {/* <!-- NEWS --> */}
      <div
        className={
          ActiveIndex === 7
            ? "cavani_tm_section active animated fadeInUp"
            : "cavani_tm_section hidden animated"
        }
        id="news_"
      >
        <div className="section_inner">
          <div className="cavani_tm_service">
            <div className="cavani_tm_title">
              <span>Services</span>
            </div>
            <div className="service_list">
              <ul>
                {service.map((item, i) => (
                  <li key={i}>
                    <div className="list_inner" onClick={toggleModal}>
                      {item.svg}
                      <h3 className="title" onClick={toggleModal}>
                        {item.title}
                      </h3>
                      <p className="text">{item.text}</p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => setModalContent(item)}
                      />
                      <img
                        className="popup_service_image"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- NEWS --> */}

      {modalContent && (
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close" onClick={toggleModal}>
                <a href="#">
                  <i className="icon-cancel"></i>
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations">
                  <div className="image">
                    <img src="img/thumbs/4-2.jpg" alt="" />
                    <div
                      className="main"
                      data-img-url="img/news/1.jpg"
                      style={{ backgroundImage: `url(${modalContent.img})` }}
                    />
                  </div>
                  <div className="details">
                    <span>{modalContent.tag}</span>
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions">
                    <ReactMarkdown children={modalContent.content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
