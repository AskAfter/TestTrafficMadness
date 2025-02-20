import statistic from './statistic.svg';
import s from './Hero.module.css';
const Hero = () => {
  return (
    <div className={s.container}>
      <img src={statistic} alt="Цена акций" className={s.pricePicture} />
      <h1 className={s.header}>моментально Копируй сделки профи трейдеров</h1>
      <p className={s.text}>
        Начни копировать сделки с успешной командой профессиональных трейдеров в
        автоматическом режиме.
      </p>

      <div className={s.emailForm}>
        <form className={s.emailInputContainer}>
          <input
            type="email"
            placeholder="ВАШ E-MAIL"
            //   value={email}
            //   onChange={onEmailChange}
            className={`${s.emailInput} buttonText`}
          />
          <button
            //   onClick={onSubmit}
            className={`${s.submitButton} buttonText`}
          >
            начать
          </button>
        </form>
        <p className={s.freeTrialText}>5 дней бесплатного пользования</p>
      </div>
    </div>
  );
};
export default Hero;
