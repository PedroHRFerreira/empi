import Image from "next/image";
import styles from "./styles.module.scss";

const images = [
  {
    src: "/images/image-3.jpeg",
    alt: "Diagnóstico de queda de tensão em veículo",
  },
  {
    src: "/images/image-5.jpeg",
    alt: "Diagnóstico elétrico com multímetro automotivo",
  },
  {
    src: "/images/image-6.jpeg",
    alt: "Sinais elétricos que afetam luzes e partida",
  },
  {
    src: "/images/image-7.jpeg",
    alt: "Queda de tensão afetando sensores e módulos",
  },
];

export default function GalleryMosaic() {
  const featuredImage = images[3];

  return (
    <div className={styles.gallery}>
      <div className={styles.sideImages}>
        {images.slice(0, 3).map((image) => (
          <figure className={styles.thumb} key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 760px) 33vw, 18vw"
            />
          </figure>
        ))}
      </div>

      <figure className={styles.featured}>
        <Image
          src={featuredImage.src}
          alt={featuredImage.alt}
          fill
          sizes="(max-width: 760px) 100vw, 36vw"
        />
      </figure>
    </div>
  );
}
