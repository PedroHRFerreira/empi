import { ChangeEvent, FormEvent, useState } from "react";
import styles from "./styles.module.scss";

const PHONE = "5533987351922";
const MESSAGE_MIN_LENGTH = 5;
const MESSAGE_MAX_LENGTH = 255;
const PHONE_MIN_LENGTH = 10;
const PHONE_MAX_LENGTH = 11;

const services = [
  "Troca de óleo e filtros",
  "Troca de freios",
  "Diagnóstico elétrico",
  "Amortecedores",
  "Queda de tensão",
  "Mecânica geral",
];

export default function AppointmentForm() {
  const [phoneValue, setPhoneValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setPhoneValue(event.target.value.replace(/\D/g, "").slice(0, PHONE_MAX_LENGTH));
  }

  function handleMessageChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setMessageValue(event.target.value.slice(0, MESSAGE_MAX_LENGTH));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const car = String(formData.get("car") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const phoneInput = event.currentTarget.elements.namedItem("phone") as HTMLInputElement;
    const messageInput = event.currentTarget.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement;

    phoneInput.setCustomValidity("");
    messageInput.setCustomValidity("");

    if (!/^\d{10,11}$/.test(phone)) {
      phoneInput.setCustomValidity("Informe apenas números com DDD.");
    }

    if (message.length < MESSAGE_MIN_LENGTH) {
      messageInput.setCustomValidity("Digite pelo menos 5 caracteres nas observações.");
    }

    if (!event.currentTarget.reportValidity()) {
      return;
    }

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
          <input
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10,11}"
            placeholder="33900000000"
            value={phoneValue}
            onChange={handlePhoneChange}
            minLength={PHONE_MIN_LENGTH}
            maxLength={PHONE_MAX_LENGTH}
            title="Informe apenas números com DDD."
            required
          />
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
          value={messageValue}
          onChange={handleMessageChange}
          minLength={MESSAGE_MIN_LENGTH}
          maxLength={MESSAGE_MAX_LENGTH}
          rows={4}
          required
        />
        <span className={styles.counter}>
          {messageValue.length}/{MESSAGE_MAX_LENGTH} caracteres
        </span>
      </label>

      <button type="submit">Enviar pelo WhatsApp</button>
    </form>
  );
}
