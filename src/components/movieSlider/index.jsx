import styles from "./movieSlider.module.css";

export default function MovieSlider({ children }) {
  return <div className={styles.movieSlider}>{children}</div>;
}
