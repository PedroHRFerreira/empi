import Image from "next/image";
import styles from "./styles.module.scss";

export interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export default function ServiceCard({
  title,
  description,
  image,
  tag,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image src={image} alt={title} fill sizes="(max-width: 760px) 100vw, 33vw" />
      </div>
      <div className={styles.content}>
        <span>{tag}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
