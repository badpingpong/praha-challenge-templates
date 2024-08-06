import styles from "./square.module.css"
type SquareProps = {value: string, onSquareClick: () => void};
export function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className={styles.square} onClick={onSquareClick}>
      {value}
    </button>
  );
}