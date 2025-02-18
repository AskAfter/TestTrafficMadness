import styles from './TradingCard.module.css';
// {
//   email, onEmailChange, onSubmit;
// }
const TradingCard = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7TFeqWN819FoZnz/group-41.png"
          alt="Logo"
          className={styles.logo}
        />
        <img
          src="https://dashboard.codeparrot.ai/api/image/Z7TFeqWN819FoZnz/frame-48.png"
          alt="Menu"
          className={styles.menuIcon}
        />
      </div>

      {/* Trading Cards Section */}
      <div className={styles.tradingCardsSection}>
        <div className={styles.tradingCards}>
          {/* First Card */}
          <div className={styles.firstCard}>
            <div className={styles.cardTitle}>ETH/USDT</div>
            <div className={styles.cardSubtitle}>Short</div>
            <div className={styles.cardPercentage}>+141%</div>
          </div>

          {/* Second Card */}
          <div className={styles.secondCard}>
            <div className={styles.cardTitle}>ETH/USDT</div>
            <div className={styles.cardSubtitle}>Short</div>
            <div className={styles.cardPercentage}>+116%</div>
          </div>
        </div>

        {/* Text Content */}
        <div className={styles.textContent}>
          <h1 className={styles.mainTitle}>
            моментально Копируй сделки профи трейдеров
          </h1>
          <p className={styles.subTitle}>
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
        </div>

        {/* Email Form */}
        <div className={styles.emailForm}>
          <div className={styles.emailInputContainer}>
            <input
              type="email"
              placeholder="ВАШ E-MAIL"
              //   value={email}
              //   onChange={onEmailChange}
              className={styles.emailInput}
            />
            <button
              //   onClick={onSubmit}
              className={styles.submitButton}
            >
              начать
            </button>
          </div>
          <p className={styles.freeTrialText}>5 дней бесплатного пользования</p>
        </div>
      </div>
    </div>
  );
};

TradingCard.defaultProps = {
  email: '',
  onEmailChange: () => {},
  onSubmit: () => {},
};

export default TradingCard;
