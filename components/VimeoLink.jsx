import Image from "next/image";
import vimeo from "../assets/icono_vimeo.png";

function VimeoLink() {
  return (
    <>
      <a
        className="instagram-icon"
        href="https://vimeo.com/snobsolutions"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={vimeo} alt="instagram icon" />
      </a>
    </>
  );
}

export default VimeoLink;
