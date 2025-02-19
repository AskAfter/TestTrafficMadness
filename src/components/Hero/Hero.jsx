import image1xWebP from './statistic.webp';
import image2xWebP from './statistic@2x.webp';
import image1xPng from './statistic.png';
import image2xPng from './statistic@2x.png';
import s from './Hero.module.css';
const Hero = () => {
  return (
    <div className={s.container}>
      <picture className={s.pricePicture}>
        <source
          srcSet={image2xWebP}
          type="image/webp"
          media="(min-resolution: 192dpi)"
        />
        <source srcSet={image1xWebP} type="image/webp" />
        <source
          srcSet={image2xPng}
          type="image/png"
          media="(min-resolution: 192dpi)"
        />
        <img src={image1xPng} alt="Цена акций" />
      </picture>
      <h1 className={s.header}>моментально Копируй сделки профи трейдеров</h1>
      <p className={s.text}>
        Начни копировать сделки с успешной командой профессиональных трейдеров в
        автоматическом режиме.
      </p>

      <div className={s.emailForm}>
        <div className={s.emailInputContainer}>
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
        </div>
        <p className={s.freeTrialText}>5 дней бесплатного пользования</p>
      </div>
    </div>
  );
};
export default Hero;
