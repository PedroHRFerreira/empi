import { FormEvent } from "react";
import styles from "./styles.module.scss";

const PHONE = "5533987351922";

const services = [
  "Troca de óleo e filtros",
  "Troca de freios",
  "Diagnóstico elétrico",
  "Amortecedores",
  "Queda de tensão",
  "Mecânica geral",
];

export default function AppointmentForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const car = String(formData.get("car") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const text = [
      "Olá, EMPI Autocenter. Quero agendar um serviço.",
      name && `Nome: ${name}`,
      phone && `Telefone: ${phone}`,
      car && `Veículo: ${car}`,
      service && `Serviço: ${service}`,
      message && `Observações: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label>
          Nome
          <input name="name" type="text" placeholder="Seu nome" required />
        </label>
        <label>
          Telefone
          <input name="phone" type="tel" placeholder="(33) 9 0000-0000" required />
        </label>
      </div>

      <label>
        Veículo
        <input name="car" type="text" placeholder="Modelo e ano do veículo" />
      </label>

      <label>
        Serviço
        <select name="service" defaultValue={services[0]}>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label>
        Observações
        <textarea
          name="message"
          placeholder="Conte o que está acontecendo ou o melhor horário para atendimento"
          rows={4}
        />
      </label>

      <button type="submit">Enviar pelo WhatsApp</button>
    </form>
  );
}
