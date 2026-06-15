import AppointmentForm from "@/components/AppointmentForm/Index";
import ContactFooter from "@/components/ContactFooter/Index";
import GalleryMosaic from "@/components/GalleryMosaic/Index";
import HeroSection from "@/components/HeroSection/Index";
import ScrollReveal from "@/components/ScrollReveal/Index";
import SectionHeader from "@/components/SectionHeader/Index";
import ServiceCard, { ServiceCardProps } from "@/components/ServiceCard/Index";
import SiteHeader from "@/components/SiteHeader/Index";
import styles from "./styles.module.scss";

const services: ServiceCardProps[] = [
  {
    title: "Troca de óleo e filtros",
    description:
      "Verificação do nível, prazo de troca e filtros para manter lubrificação e proteção do motor.",
    image: "/images/image-1.jpeg",
    tag: "Manutenção preventiva",
  },
  {
    title: "Freios e amortecedores",
    description:
      "Análise de itens que impactam segurança, estabilidade e conforto na direção.",
    image: "/images/image-2.jpeg",
    tag: "Segurança",
  },
  {
    title: "Diagnóstico elétrico",
    description:
      "Testes para identificar queda de tensão, falhas em sensores, módulos, partida e iluminação.",
    image: "/images/image-5.jpeg",
    tag: "Elétrica automotiva",
  },
];

export default function HomeTemplate() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <ScrollReveal>
          <HeroSection />
        </ScrollReveal>

        <ScrollReveal>
          <section id="servicos" className={styles.section}>
            <SectionHeader
              eyebrow="Serviços"
              title="Manutenção com análise antes da troca."
              description="A EMPI combina mecânica e elétrica automotiva para encontrar a causa do problema e indicar o serviço correto."
            />

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 90}>
                  <ServiceCard {...service} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <section id="estrutura" className={styles.splitSection}>
          <ScrollReveal className={styles.splitContent}>
            <div>
              <SectionHeader
                eyebrow="Diagnóstico"
                title="Queda de tensão não é chute: precisa medir."
                description="Falhas em partida, luzes, desempenho, sensores e módulos podem estar ligadas à instabilidade elétrica. O diagnóstico correto evita troca desnecessária de peças."
              />

              <ul className={styles.checkList}>
                <li>Teste de bateria, alternador e aterramentos</li>
                <li>Leitura de sinais que afetam módulos eletrônicos</li>
                <li>Orientação objetiva antes de executar o reparo</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <GalleryMosaic />
          </ScrollReveal>
        </section>

        <section id="agendar" className={styles.appointment}>
          <ScrollReveal className={styles.appointmentContent}>
            <div>
              <SectionHeader
                eyebrow="Agendamento"
                title="Conte o que seu carro precisa."
                description="Preencha os dados e envie direto para o WhatsApp da oficina. A conversa já chega organizada para agilizar o atendimento."
              />

              <div className={styles.contactCards}>
                <a href="https://wa.me/5533987351922" target="_blank">
                  WhatsApp: (33) 9 8735-1922
                </a>
                <a href="https://www.instagram.com/empi.autocenter_/" target="_blank">
                  Instagram: @empi.autocenter_
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.%20Tup%C3%A3%2C%20587%20-%20Nossa%20Sra.%20das%20Gra%C3%A7as%2C%20Governador%20Valadares%2C%20Minas%20Gerais%2035060520"
                  target="_blank"
                >
                  R. Tupã, 587 - Governador Valadares
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120}>
            <AppointmentForm />
          </ScrollReveal>
        </section>
      </main>
      <ContactFooter />
    </div>
  );
}
