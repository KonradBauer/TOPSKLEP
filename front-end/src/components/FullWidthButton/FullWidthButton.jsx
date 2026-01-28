import styles from "./FullWidthButton.module.css";

export const FullWidthButton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
