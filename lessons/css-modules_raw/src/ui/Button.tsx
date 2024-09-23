import styles from "./Button.module.css";

export type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
