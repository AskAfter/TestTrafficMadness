import TryNowForm from '../TryNowForm/TryNowForm';
import s from './AboutCompany.module.css';

const AboutCompany = () => {
  return (
    <div className={`${s.main} sectionWhite`}>
      <div className={s.container} id="about">
        <div className={s.rectangular}></div>
        <div className={s.textContainer}>
          <h2 className={s.header}>О компании</h2>
          <p className={s.text}>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance. <br />
            <br /> Он представляет пользователям множество преимуществ, таких
            как более високая скорость синхронизации API и возможность создать
            учетную запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
        <TryNowForm className={s.tryForm} />
        <div className={s.whiteWrap}></div>
      </div>
      <div className={s.bottomBackGround}></div>
    </div>
  );
};
export default AboutCompany;
