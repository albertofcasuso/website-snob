import { useState, useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import Image from "next/image";
import { dataImage } from "../../plugin/plugin";
import { LightgalleryProvider } from "react-lightgallery";
import { PhotoItem } from "../../plugin/lightGalleryOptions";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import { CloseButton } from "../../plugin/svg";

export default function PortfolioDefault({ ActiveIndex, Animation }) {
  // const [activeTab, setActiveTab] = useState(1);

  // const handleOnClick = (index) => {
  //     setActiveTab(index); // remove the curly braces
  // };

  // for popup video
  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  const [isOpenMijo, setIsOpenMijo] = useState(false);
  const [isOpenSacrifice, setIsOpenSacrifice] = useState(false);
  const [isOpenRosa, setIsOpenRosa] = useState(false);
  const [isOpenNot, setIsOpenNot] = useState(false);
  const [isOpenWarhol, setIsOpenWarhol] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  // image modal popup
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }

  const imagesCollection = [["img/portfolio/4.jpg"], ["img/portfolio/5.jpg"]];

  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("vimeo");

  // initialize an Isotope object with configs
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
        // percentPosition: true,
        // masonry: {
        //     columnWidth: ".filter-item",
        // },
        // animationOptions: {
        //     duration: 750,
        //     easing: "linear",
        //     queue: false,
        // },
      });
    }, 500);
    return () => isotope.current.destroy();
  }, []);

  // handling filter key change
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: "*" })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      {/* <!-- PORTFOLIO --> */}

      <div
        className={
          ActiveIndex === 2
            ? `cavani_tm_section active animated ${
                Animation ? Animation : "fadeInUp"
              }`
            : "cavani_tm_section hidden animated"
        }
        id="portfolio_"
      >
        <div className="section_inner">
          <div className="cavani_tm_portfolio">
            <div className="cavani_tm_title">
              <span>Creative Portfolio</span>
            </div>

            <div className="portfolio_filter">
              <ul>
                <li>
                  <a
                    href="#"
                    onClick={handleFilterKeyChange("*")}
                    className="current"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleFilterKeyChange("vimeo")}
                    data-filter=".vimeo"
                  >
                    Vimeo
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio_list">
              <div className="filter-container">
                <div className="filter-item vimeo fadeInUp">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/mijo_portfolio.png"
                        onClick={() => setIsOpenMijo(true)}
                      ></div>
                      <span className="icon">
                        <i className="icon-vimeo-1"></i>
                      </span>
                      <div className="details">
                        <h3>Mijo</h3>
                        <span>Vimeo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-item vimeo fadeInUp">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/sacrifice_portfolio.png"
                        onClick={() => setIsOpenSacrifice(true)}
                      ></div>
                      <span className="icon">
                        <i className="icon-vimeo-1"></i>
                      </span>
                      <div className="details">
                        <h3>The Sacrifice of the rose</h3>
                        <span>Vimeo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-item vimeo fadeInUp">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/rosa_portfolio.png"
                        onClick={() => setIsOpenRosa(true)}
                      ></div>
                      <span className="icon">
                        <i className="icon-vimeo-1"></i>
                      </span>
                      <div className="details">
                        <h3>Rosa Mexicano</h3>
                        <span>Vimeo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-item vimeo fadeInUp">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/notgoing_portfolio.png"
                        onClick={() => setIsOpenNot(true)}
                      ></div>
                      <span className="icon">
                        <i className="icon-vimeo-1"></i>
                      </span>
                      <div className="details">
                        <h3>Not Going Out</h3>
                        <span>Vimeo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-item vimeo fadeInUp">
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/1-1.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/warhol_portfolio.png"
                        onClick={() => setIsOpenWarhol(true)}
                      ></div>
                      <span className="icon">
                        <i className="icon-vimeo-1"></i>
                      </span>
                      <div className="details">
                        <h3>Warhol Warhol</h3>
                        <span>Vimeo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /PORTFOLIO --> */}

      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenMijo}
        videoId="532054877"
        animationSpeed={300}
        onClose={() => setIsOpenMijo(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenSacrifice}
        videoId="313077141"
        animationSpeed={300}
        onClose={() => setIsOpenSacrifice(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenRosa}
        videoId="429707037"
        animationSpeed={300}
        onClose={() => setIsOpenRosa(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenNot}
        videoId="224514466"
        animationSpeed={300}
        onClose={() => setIsOpenNot(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenWarhol}
        videoId="199099743"
        animationSpeed={300}
        onClose={() => setIsOpenWarhol(false)}
        modalVideoClose="mfp-close"
      />

      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={300}
        openTimeoutMS={300}
      >
        <div
          onClick={toggleModalThree}
          className="modal-video mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-ready"
          tabIndex={-1}
          style={{ overflow: "hidden auto" }}
        >
          <div className="mfp-container mfp-s-ready mfp-iframe-holder">
            <div className="mfp-content">
              <div className="mfp-iframe-scaler">
                <button
                  onClick={toggleModalThree}
                  title="Close (Esc)"
                  type="button"
                  className="mfp-close"
                >
                  ×
                </button>
                <iframe
                  className="mfp-iframe"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
            </div>
            <div className="mfp-preloader">Loading...</div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpen4}
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
                <i className="icon-cancel" />
              </a>
            </div>
            <div className="description_wrap">
              <div className="popup_details">
                <div className="top_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div
                    className="main"
                    data-img-url="img/portfolio/6.jpg"
                    style={{ backgroundImage: "url(./img/portfolio/6.jpg" }}
                  />
                </div>
                <div className="portfolio_main_title">
                  <h3>Alice Moon</h3>
                  <span>Detail</span>
                  <div></div>
                </div>
                <div className="main_details">
                  <div className="textbox">
                    <p>
                      We live in a world where we need to move quickly and
                      iterate on our ideas as flexibly as possible. Building
                      mockups strikes the ideal balance ease of modification.
                      Building mockups strikes the ideal balance ease of
                      modification.
                    </p>
                    <p>
                      Mockups are useful both for the creative phase of the
                      project - for instance when you&#39;re trying to figure
                      out your user flows or the proper visual hierarchy - and
                      the production phase when they phase when they will
                      represent the target product. Building mockups strikes the
                      ideal balance ease of modification.
                    </p>
                  </div>
                  <div className="detailbox">
                    <ul>
                      <li>
                        <span className="first">Client</span>
                        <span>Alvaro Morata</span>
                      </li>
                      <li>
                        <span className="first">Category</span>
                        <span>
                          <a href="#">Detail</a>
                        </span>
                      </li>
                      <li>
                        <span className="first">Date</span>
                        <span>March 07, 2021</span>
                      </li>
                      <li>
                        <span className="first">Share</span>
                        <ul className="share">
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/facebook.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/twitter.svg"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img
                                className="svg"
                                src="./img/svg/social/instagram.svg"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="additional_images">
                  <ul>
                    <li>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src="./img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(./img/portfolio/1.jpg",
                            }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src="./img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(./img/portfolio/2.jpg",
                            }}
                          ></div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="list_inner">
                        <div className="my_image">
                          <img src="./img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            style={{
                              backgroundImage: "url(./img/portfolio/3.jpg",
                            }}
                          ></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
