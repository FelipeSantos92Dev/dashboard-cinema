// components/upcomingReleases.js
import styles from "./upcomingReleases.module.css";

const UpcomingReleases = ({ upcomingMovies }) => {
  return (
    <div className={styles.upcomingContainer}>
      <h2>Próximos Lançamentos</h2>
      <div className={styles.upcomingList}>
        {upcomingMovies.map((movie) => (
          <div key={movie.id} className={styles.upcomingCard}>
            <h3>{movie.title}</h3>
            <div className={styles.upcomingMeta}>
              <span className={styles.releaseDate}>
                <strong>Estreia:</strong> {movie.releaseDate}
              </span>
              <span className={styles.genre}>{movie.genre}</span>
            </div>
            <p className={styles.upcomingSynopsis}>{movie.synopsis}</p>
            <button className={styles.upcomingButton}>Lembrar-me</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingReleases;
