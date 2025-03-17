import styles from "./movies.module.css";
import MovieSlider from "@/components/movieSlider";
import MovieCard from "@/components/movieCard";

export default function MoviesPage() {
  // Dados de filmes em cartaz
  const featuredMovie = {
    id: 1,
    title: "Duna: Parte 2",
    imageUrl: "https://via.placeholder.com/1200x600",
    rating: 4.8,
    genre: "Ficção Científica",
    description:
      "Paul Atreides se une aos Fremen e embarca em uma jornada de vingança contra os conspiradores que destruíram sua família.",
    duration: "166 min",
  };

  const actionMovies = [
    {
      id: 2,
      title: "Gladiador 2",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.5,
      genre: "Ação/Drama",
      description: "A continuação épica da história de Maximus.",
    },
    {
      id: 3,
      title: "Missão Impossível 8",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.3,
      genre: "Ação/Espionagem",
      description: "Ethan Hunt retorna para mais uma missão impossível.",
    },
    {
      id: 4,
      title: "Velozes e Furiosos 11",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.0,
      genre: "Ação",
      description: "Dom Toretto e sua família enfrentam novos desafios.",
    },
  ];

  const comedyMovies = [
    {
      id: 5,
      title: "Divertida Mente 2",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.7,
      genre: "Animação/Comédia",
      description: "Novas emoções surgem na mente de Riley.",
    },
    {
      id: 6,
      title: "Deadpool 3",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.6,
      genre: "Comédia/Ação",
      description: "O mercenário tagarela está de volta com mais piadas.",
    },
    {
      id: 7,
      title: "Meu Malvado Favorito 4",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.2,
      genre: "Animação/Comédia",
      description: "Gru e os Minions em novas aventuras.",
    },
  ];

  const dramaMovies = [
    {
      id: 8,
      title: "O Poder do Amanhã",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.9,
      genre: "Drama",
      description: "Uma história emocionante sobre superação.",
    },
    {
      id: 9,
      title: "Memórias de Outono",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.4,
      genre: "Drama/Romance",
      description: "Um romance que transcende o tempo.",
    },
    {
      id: 10,
      title: "A Última Carta",
      imageUrl: "https://via.placeholder.com/300x450",
      rating: 4.7,
      genre: "Drama/Mistério",
      description: "Um mistério que muda vidas para sempre.",
    },
  ];

  return (
    <div className={styles.moviesContainer}>
      <section className={styles.featuredMovie}>
        <div className={styles.featuredContent}>
          <h1>{featuredMovie.title}</h1>
          <div className={styles.movieInfo}>
            <span className={styles.rating}>{featuredMovie.rating}/5</span>
            <span className={styles.genre}>{featuredMovie.genre}</span>
            <span className={styles.duration}>{featuredMovie.duration}</span>
          </div>
          <p className={styles.description}>{featuredMovie.description}</p>
          <div className={styles.buttons}>
            <button className={styles.playButton}>Assistir</button>
            <button className={styles.infoButton}>Mais Informações</button>
          </div>
        </div>
        <div
          className={styles.featuredImage}
          style={{ backgroundImage: `url(${featuredMovie.imageUrl})` }}
        />
      </section>

      <section className={styles.movieSection}>
        <h2>Ação</h2>
        <MovieSlider>
          <MovieCard movie={actionMovies[0]} />
          <MovieCard movie={actionMovies[1]} />
          <MovieCard movie={actionMovies[2]} />
        </MovieSlider>
      </section>

      <section className={styles.movieSection}>
        <h2>Comédia</h2>
        <MovieSlider>
          <MovieCard movie={comedyMovies[0]} />
          <MovieCard movie={comedyMovies[1]} />
          <MovieCard movie={comedyMovies[2]} />
        </MovieSlider>
      </section>

      <section className={styles.movieSection}>
        <h2>Drama</h2>
        <MovieSlider>
          <MovieCard movie={dramaMovies[0]} />
          <MovieCard movie={dramaMovies[1]} />
          <MovieCard movie={dramaMovies[2]} />
        </MovieSlider>
      </section>
    </div>
  );
}
