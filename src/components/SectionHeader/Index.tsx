import styles from "./styles.module.scss";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className={styles.header}>
      <span className="text-p5 text-p5-semi-bold">{eyebrow}</span>
      <h2 className="title-h2 title-h2-medium">{title}</h2>
      <p className="text-p4 text-p4-regular">{description}</p>
    </div>
  );
}
