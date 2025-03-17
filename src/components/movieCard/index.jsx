import styles from "./movieCard.module.css";

export default function MovieCard({ movie }) {
  return (
    <div className={styles.movieCard}>
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className={styles.movieImage}
      />
      <div className={styles.movieCardContent}>
        <h3 className={styles.movieCardTitle}>{movie.title}</h3>
        <div className={styles.movieCardInfo}>
          <span className={styles.movieCardRating}>{movie.rating}</span>
          <span className={styles.movieCardGenre}>{movie.genre}</span>
        </div>
      </div>

      {/* Overlay com descrição e ações */}
      <div className={styles.movieCardOverlay}>
        <p className={styles.movieCardDescription}>{movie.description}</p>
        <div className={styles.movieCardButtons}>
          <button className={styles.movieCardButton} title="Assistir">
            ▶
          </button>
          <button className={styles.movieCardButton} title="Adicionar à Lista">
            +
          </button>
          <button className={styles.movieCardButton} title="Mais Informações">
            ℹ
          </button>
        </div>
      </div>
    </div>
  );
}
