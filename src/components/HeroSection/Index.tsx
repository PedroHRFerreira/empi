import Image from "next/image";
import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

const digitStack = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

interface RollingMetricValueProps {
  value: string;
}

function RollingMetricValue({ value }: RollingMetricValueProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = valueRef.current;

    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.7 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={valueRef}
      className={`${styles.metricValue} ${isVisible ? styles.metricValueVisible : ""}`}
    >
      <span className={styles.metricAccessible}>{value}</span>
      {value.split("").map((character, index) => {
        if (!/\d/.test(character)) {
          return (
            <span
              className={styles.metricSymbol}
              aria-hidden="true"
              key={`${character}-${index}`}
            >
              {character}
            </span>
          );
        }

        return (
          <span
            className={styles.digitViewport}
            aria-hidden="true"
            key={`${character}-${index}`}
          >
            <span
              className={styles.digitTrack}
              style={{ "--digit-delay": `${index * 70}ms` } as CSSProperties}
            >
              {digitStack.map((digit) => (
                <span key={digit}>{digit}</span>
              ))}
              <span>{character}</span>
            </span>
          </span>
        );
      })}
    </span>
  );
}

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
          Troca de óleo, freios, amortecedores e análise elétrica com
          atendimento direto em Governador Valadares.
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
            <dt>
              <RollingMetricValue value="10+" />
            </dt>
            <dd>serviços automotivos</dd>
          </div>
          <div>
            <dt>
              <RollingMetricValue value="100+" />
            </dt>
            <dd>clientes atendidos</dd>
          </div>
          <div>
            <dt>
              <RollingMetricValue value="100%" />
            </dt>
            <dd>avaliação de clientes</dd>
          </div>
        </dl>
      </div>

      <div
        className={styles.media}
        aria-label="Imagem institucional EMPI Autocenter"
      >
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
