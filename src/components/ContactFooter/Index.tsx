import styles from "./styles.module.scss";

const address =
  "R. Tupã, 587 - Nossa Sra. das Graças, Governador Valadares - MG, 35060-520";

export default function ContactFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>EMPI Autocenter</strong>
        <p>{address}</p>
      </div>

      <div className={styles.links}>
        <a href="https://wa.me/5533987351922" target="_blank">
          (33) 9 8735-1922
        </a>
        <a href="https://www.instagram.com/empi.autocenter_/" target="_blank">
          @empi.autocenter_
        </a>
      </div>
    </footer>
  );
}
