import React from "react";
import styles from "./books.module.css";

const BookstorePage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Livros & Cia</h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Lançamentos</a>
            </li>
            <li>
              <a href="#">Promoções</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section className={styles.featured}>
          <h2>Destaques da Semana</h2>
          <div className={styles.featuredBooks}>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="https://cdn.culturagenial.com/imagens/1984-capa.jpg"
                  alt="Capa do livro 1984"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>1984</h3>
                <p className={styles.author}>George Orwell</p>
                <p className={styles.price}>R$ 45,90</p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="https://www.moderna.com.br/data/files/D9/02/CA/FC/ABF29310DABB929338A8A8A8/Capa_Dom%20Quixote_FINAL2-1.jpg"
                  alt="Capa do livro Dom Quixote"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>Dom Quixote</h3>
                <p className={styles.author}>Miguel de Cervantes</p>
                <p className={styles.price}>R$ 62,50</p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="/api/placeholder/180/280"
                  alt="Capa do livro O Pequeno Príncipe"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>O Pequeno Príncipe</h3>
                <p className={styles.author}>Antoine de Saint-Exupéry</p>
                <p className={styles.price}>R$ 29,90</p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.newReleases}>
          <h2>Lançamentos</h2>
          <div className={styles.booksGrid}>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="/api/placeholder/180/280"
                  alt="Capa do livro A Revolução dos Bichos"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>A Revolução dos Bichos</h3>
                <p className={styles.author}>George Orwell</p>
                <p className={styles.price}>R$ 35,90</p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="/api/placeholder/180/280"
                  alt="Capa do livro Cem Anos de Solidão"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>Cem Anos de Solidão</h3>
                <p className={styles.author}>Gabriel García Márquez</p>
                <p className={styles.price}>R$ 58,90</p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="/api/placeholder/180/280"
                  alt="Capa do livro O Senhor dos Anéis"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>O Senhor dos Anéis</h3>
                <p className={styles.author}>J.R.R. Tolkien</p>
                <p className={styles.price}>R$ 89,90</p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.promo}>
          <h2>Promoções</h2>
          <div className={styles.booksGrid}>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="/api/placeholder/180/280"
                  alt="Capa do livro O Alquimista"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>O Alquimista</h3>
                <p className={styles.author}>Paulo Coelho</p>
                <p className={styles.price}>
                  <span className={styles.oldPrice}>R$ 45,90</span> R$ 32,90
                </p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="/api/placeholder/180/280"
                  alt="Capa do livro Orgulho e Preconceito"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>Orgulho e Preconceito</h3>
                <p className={styles.author}>Jane Austen</p>
                <p className={styles.price}>
                  <span className={styles.oldPrice}>R$ 42,90</span> R$ 29,90
                </p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
            <div className={styles.book}>
              <div className={styles.bookCover}>
                <img
                  src="/api/placeholder/180/280"
                  alt="Capa do livro Crime e Castigo"
                />
              </div>
              <div className={styles.bookInfo}>
                <h3>Crime e Castigo</h3>
                <p className={styles.author}>Fiódor Dostoiévski</p>
                <p className={styles.price}>
                  <span className={styles.oldPrice}>R$ 59,90</span> R$ 42,90
                </p>
                <button className={styles.buyButton}>Comprar</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Sobre a Livros & Cia</h3>
            <p>
              Somos uma livraria especializada em livros físicos de qualidade,
              com mais de 10 anos de experiência no mercado literário.
            </p>
          </div>
          <div className={styles.footerSection}>
            <h3>Contato</h3>
            <p>Email: contato@livrosciaedu.com.br</p>
            <p>Telefone: (11) 1234-5678</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Siga-nos</h3>
            <div className={styles.socialLinks}>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; 2025 Livros & Cia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default BookstorePage;
