import Image from "next/image";
import instagram from "../assets/icono_instagram.png";

function InstagramLink() {
  return (
    <>
      <a
        className="instagram-icon"
        href="https://instagram.com/snobsolutions"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={instagram} width="45px" height="45px" alt="instagram icon" />
      </a>
    </>
  );
}

export default InstagramLink;
