import React, { useState } from "react";
import { dataImage } from "../../plugin/plugin";
import Modal from "react-modal";
import {
  SVG_Custom1,
  SVG_Custom2,
  SVG_Custom3,
  SVG_Custom4,
  SVG_Custom5,
  SVG_Custom6,
} from "../../plugin/svg";
export default function Service({ ActiveIndex }) {
  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }
  const service = [
    {
      img: "img/news/1.jpg",
      svg: <SVG_Custom1 />,
      text: "Creación de videos para moda, arte, música y estilo de vida. Impulsa tu marca con autenticidad y creatividad en el competitivo mundo de la moda y la publicidad a través del fashion film.",
      date: "August 9, 2021",
      title: "FASHION FILMS",
      text1:
        "Un fashion film es una poderosa herramienta para promocionar y proyectar tu marca, llegando al público de manera creativa y activa. En Snob Solutions, mi productora especializada, creamos films que capturan y transmiten el auténtico espíritu de tu marca, desarrollando el mejor concepto y narrativa para mostrar tu proyecto al mundo.",
      text2:
        "Ofrecemos un servicio completo de desarrollo y gestión para llevar a cabo tu video, desde la concepción de la idea/historia hasta el producto final. Contamos con una sólida red de contactos y colaboradores en la industria, que incluye maquillistas, estilistas, dirección de fotografía, locaciones y distribución, lo que nos permite garantizar el mejor resultado en la producción de tu fashion film o comercial.",
      text3: "",
    },
    {
      img: "img/news/2.jpg",
      svg: <SVG_Custom2 />,
      text: "Como directora audiovisual, estoy abierta a participar en proyectos diversos, comerciales e independientes. Disfruto explorar el lenguaje audiovisual y buscar nuevas narrativas que conecten profundamente con la audiencia.",
      date: "August 9, 2021",
      title: "DIRECCIÓN AUDIOVISUAL",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "img/news/3.jpg",
      svg: <SVG_Custom3 />,
      text: "Edición / montaje de video para todo tipo de proyectos audiovisuales. No importa si es un proyecto independiente o comercial estaré encantada de trabajar contigo. Desde 80€",
      date: "August 9, 2021",
      title: "EDICIÓN / MONTAJE DE VIDEO",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    },
    {
      img: "img/news/4.jpg",
      svg: <SVG_Custom4 />,
      text: "Asesoramiento en desarrollo de proyectos creativos y marca personal Apoyo personalizado en el proceso para emprendedores, artistas y creativos. Logra el éxito de tu proyecto con orientación en conceptualización y comunicación estratégica. Desde 30€",
      date: "August 9, 2021",
      title: "ASESORIA CREATIVA",
      text1:
        "Cavani is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      text2:
        "In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.",
      text3:
        "That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
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
                    <div className="list_inner" onClick={toggleModalFour}>
                      {item.svg}
                      <h3 className="title" onClick={toggleModalFour}>
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
                      <div className="service_hidden_details">
                        <div className="service_popup_informations">
                          <div className="descriptions">
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                            <p>{item.text3}</p>
                          </div>
                        </div>
                      </div>
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
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close" onClick={toggleModalFour}>
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
                    <p>{modalContent.text1}</p>
                    <p>{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
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
