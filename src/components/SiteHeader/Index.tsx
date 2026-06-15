import styles from "./styles.module.scss";

const WHATSAPP_URL = "https://wa.me/5533987351922";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#inicio" aria-label="Ir para o início">
        <span className={styles.brandMark}>EA</span>
        <span>
          <strong>EMPI</strong>
          <small>Autocenter</small>
        </span>
      </a>

      <nav className={styles.nav} aria-label="Menu principal">
        <a href="#servicos">Serviços</a>
        <a href="#estrutura">Estrutura</a>
        <a href="#agendar">Agendar</a>
      </nav>

      <a className={styles.action} href={WHATSAPP_URL} target="_blank">
        WhatsApp
      </a>
    </header>
  );
}
