// components/ticketPricing.js
import styles from "./ticketPricing.module.css";

const TicketPricing = ({ pricingOptions }) => {
  return (
    <div className={styles.pricingContainer}>
      <h2>Preços de Ingressos</h2>
      <div className={styles.pricingList}>
        {pricingOptions.map((option, index) => (
          <div key={index} className={styles.pricingCard}>
            <h3>{option.day}</h3>
            <div className={styles.pricingOptions}>
              {option.options.map((item, idx) => (
                <div key={idx} className={styles.pricingItem}>
                  <span className={styles.ticketType}>{item.type}</span>
                  <span className={styles.ticketPrice}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketPricing;
