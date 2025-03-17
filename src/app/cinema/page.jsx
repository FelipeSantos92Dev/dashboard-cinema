// pages/cinemas.js
import styles from "./cinemas.module.css";
import CinemaList from "@/components/cinemaList";
import FilmShowcase from "@/components/filmShowcase";
import UpcomingReleases from "@/components/upcomingReleases";
import TicketPricing from "@/components/ticketPricing";

export default function Cinemas() {
  const cinemas = [
    {
      id: 1,
      name: "CineMax Centro",
      address: "Av. Paulista, 1500",
      rooms: 6,
      rating: 4.7,
      highlights: "Salas VIP, IMAX, 4DX",
    },
    {
      id: 2,
      name: "MultiCine Shopping",
      address: "Shopping Vila Olímpia, Piso 3",
      rooms: 8,
      rating: 4.5,
      highlights: "Salas 3D, Assentos Reclináveis",
    },
    {
      id: 3,
      name: "Cinema Jardins",
      address: "Rua Oscar Freire, 750",
      rooms: 4,
      rating: 4.8,
      highlights: "Filmes de Arte, Cafeteria",
    },
    {
      id: 4,
      name: "CineVille Plaza",
      address: "Av. Brigadeiro Faria Lima, 2200",
      rooms: 5,
      rating: 4.6,
      highlights: "Projeção Digital, Dolby Atmos",
    },
  ];

  const filmsInTheaters = [
    {
      id: 1,
      title: "Aventuras Intergaláticas",
      genre: "Ficção Científica",
      duration: "2h 25min",
      rating: "14 anos",
      poster: "/images/aventuras.jpg",
      synopsis:
        "Uma jornada épica pelos confins do espaço em busca de um novo lar para a humanidade.",
      sessions: ["14:30", "17:15", "20:00", "22:45"],
    },
    {
      id: 2,
      title: "O Mistério do Vale",
      genre: "Suspense",
      duration: "1h 58min",
      rating: "16 anos",
      poster: "/images/misterio.jpg",
      synopsis:
        "Um detetive aposentado é chamado para investigar uma série de desaparecimentos em um pequeno vilarejo.",
      sessions: ["15:00", "18:00", "21:00"],
    },
    {
      id: 3,
      title: "Amor em Paris",
      genre: "Romance",
      duration: "1h 45min",
      rating: "12 anos",
      poster: "/images/amor.jpg",
      synopsis:
        "Dois estranhos se encontram por acaso na cidade luz e vivem uma história de amor inesquecível.",
      sessions: ["16:45", "19:30", "22:00"],
    },
    {
      id: 4,
      title: "Velocidade Máxima 5",
      genre: "Ação",
      duration: "2h 10min",
      rating: "16 anos",
      poster: "/images/velocidade.jpg",
      synopsis:
        "O lendário piloto retorna para uma última corrida que definirá seu legado.",
      sessions: ["14:00", "16:30", "19:00", "21:30"],
    },
  ];

  const upcomingMovies = [
    {
      id: 1,
      title: "O Guardião da Floresta",
      releaseDate: "27/03/2025",
      genre: "Aventura/Fantasia",
      synopsis:
        "Uma criatura mística desperta para proteger a última floresta encantada do mundo.",
    },
    {
      id: 2,
      title: "Confronto Final",
      releaseDate: "03/04/2025",
      genre: "Ação/Drama",
      synopsis:
        "Dois rivais de longa data se encontram para um último confronto que decidirá o destino da cidade.",
    },
    {
      id: 3,
      title: "Sonhos de Verão",
      releaseDate: "10/04/2025",
      genre: "Comédia/Romance",
      synopsis:
        "Um grupo de amigos se reúne para passar o último verão juntos antes da faculdade.",
    },
  ];

  const pricingOptions = [
    {
      day: "Segunda a Quinta",
      options: [
        { type: "Inteira", price: "R$ 32,00" },
        { type: "Meia-entrada", price: "R$ 16,00" },
        { type: "Sessão da Tarde (até 18h)", price: "R$ 24,00" },
      ],
    },
    {
      day: "Sexta a Domingo",
      options: [
        { type: "Inteira", price: "R$ 38,00" },
        { type: "Meia-entrada", price: "R$ 19,00" },
        { type: "Matinê (até 14h)", price: "R$ 28,00" },
      ],
    },
    {
      day: "Salas Especiais",
      options: [
        { type: "IMAX", price: "R$ 45,00" },
        { type: "4DX", price: "R$ 52,00" },
        { type: "VIP", price: "R$ 60,00" },
      ],
    },
  ];

  return (
    <main className={styles.cinemasContainer}>
      <div className={styles.pageHeader}>
        <h1>Cinemas em Cartaz</h1>
        <p>Atualizado em: 17/03/2025</p>
      </div>

      <section className={styles.mainContent}>
        <FilmShowcase films={filmsInTheaters} />

        <div className={styles.secondaryContent}>
          <CinemaList cinemas={cinemas} />
          <UpcomingReleases upcomingMovies={upcomingMovies} />
          <TicketPricing pricingOptions={pricingOptions} />
        </div>
      </section>
    </main>
  );
}
