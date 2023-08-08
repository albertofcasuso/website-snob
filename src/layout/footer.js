import React from "react";

export default function Footer() {
  return (
    <>
      <footer>
        {/* <!-- FOOTER --> */}
        <div className="cavani_tm_footer">
          <div className="copyright">
            <p>Copyright &copy; 2022</p>
          </div>
          <div className="social">
            <ul>
              {/* <li>
                <a href="#">
                  <img
                    className="svg"
                    src="img/svg/social/facebook.svg"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="svg"
                    src="img/svg/social/twitter.svg"
                    alt=""
                  />
                </a>
              </li> */}
              <li>
                <a
                  href="https://instagram.com/mazdeysnob"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="svg"
                    src="img/svg/social/instagram.svg"
                    alt="Mazdey Snob Instagram profile link"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.vimeo.com/snobsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="svg"
                    src="img/svg/social/vimeo.svg"
                    alt="Mazdey Snob Vimeo profile link"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mazdey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="svg"
                    src="img/svg/social/linkedin.svg"
                    alt="Mazdey Snob Linkedin profile link"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /FOOTER --> */}
      </footer>
    </>
  );
}
