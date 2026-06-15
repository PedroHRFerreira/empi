import Image from "next/image";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.content}>
        <span className={`${styles.eyebrow} text-p5 text-p5-semi-bold`}>
          Mecânica e elétrica automotiva
        </span>
        <h1 className="title-h1 title-h1-extra-bold">
          O motor do seu carro merece diagnóstico preciso e cuidado de verdade.
        </h1>
        <p className="text-p3 text-p3-regular">
          Troca de óleo, freios, amortecedores e análise elétrica com atendimento
          direto em Governador Valadares.
        </p>

        <div className={styles.actions}>
          <a href="#agendar" className={styles.primary}>
            Agendar serviço
          </a>
          <a href="#servicos" className={styles.secondary}>
            Ver serviços
          </a>
        </div>

        <dl className={styles.metrics}>
          <div>
            <dt>4+</dt>
            <dd>frentes de serviço</dd>
          </div>
          <div>
            <dt>33</dt>
            <dd>atendimento local</dd>
          </div>
          <div>
            <dt>1:1</dt>
            <dd>análise antes da troca</dd>
          </div>
        </dl>
      </div>

      <div className={styles.media} aria-label="Imagem institucional EMPI Autocenter">
        <Image
          src="/images/image-5.jpeg"
          alt="Multímetro em diagnóstico elétrico automotivo"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 44vw"
        />
      </div>
    </section>
  );
}
