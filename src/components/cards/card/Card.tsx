import { ReactNode } from "react";
import styles from "./card.module.css";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className={`${styles.container}`}>
      <div>
        <h3>{children}</h3>
      </div>
    </div>
  );
}
