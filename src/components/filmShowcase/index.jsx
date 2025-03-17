// components/filmShowcase.js
import styles from "./filmShowcase.module.css";

const FilmShowcase = ({ films }) => {
  return (
    <div className={styles.filmShowcaseContainer}>
      <h2>Filmes em Cartaz</h2>
      <div className={styles.filmGrid}>
        {films.map((film) => (
          <div key={film.id} className={styles.filmCard}>
            <div className={styles.filmPoster}>
              <div className={styles.posterPlaceholder}>{film.title}</div>
            </div>
            <div className={styles.filmInfo}>
              <h3>{film.title}</h3>
              <div className={styles.filmMeta}>
                <span>{film.genre}</span>
                <span>{film.duration}</span>
                <span className={styles.filmRating}>{film.rating}</span>
              </div>
              <p className={styles.filmSynopsis}>{film.synopsis}</p>
              <div className={styles.filmSessions}>
                <h4>Sessões:</h4>
                <div className={styles.sessionTimes}>
                  {film.sessions.map((session, index) => (
                    <span key={index} className={styles.sessionTime}>
                      {session}
                    </span>
                  ))}
                </div>
              </div>
              <button className={styles.filmButton}>Comprar Ingresso</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmShowcase;
