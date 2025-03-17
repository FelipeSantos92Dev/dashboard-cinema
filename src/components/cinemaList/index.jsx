// components/cinemaList.js
import styles from "./cinemaList.module.css";

const CinemaList = ({ cinemas }) => {
  return (
    <div className={styles.cinemaListContainer}>
      <h2>Cinemas Disponíveis</h2>
      <div className={styles.cinemaList}>
        {cinemas.map((cinema) => (
          <div key={cinema.id} className={styles.cinemaCard}>
            <h3>{cinema.name}</h3>
            <p className={styles.cinemaAddress}>{cinema.address}</p>
            <div className={styles.cinemaDetails}>
              <span className={styles.cinemaRooms}>{cinema.rooms} Salas</span>
              <span className={styles.cinemaRating}>
                {cinema.rating} <span className={styles.starIcon}>★</span>
              </span>
            </div>
            <p className={styles.cinemaHighlights}>{cinema.highlights}</p>
            <button className={styles.cinemaButton}>Ver Sessões</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CinemaList;
