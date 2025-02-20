import rectangular from '../../assets/rectangleMobile.svg';
import TryNowForm from '../TryNowForm/TryNowForm';
import s from './AboutCompany.module.css';

const AboutCompany = () => {
  return (
    <div className={s.container}>
      <img className={s.rectangular} src={rectangular} alt="rectangular" />
      <div className={s.textContainer}>
        <h2 className={s.header}>О компании</h2>
        <p className={s.text}>
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance. <br />
          <br /> Он представляет пользователям множество преимуществ, таких как
          более високая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </p>
      </div>
      <TryNowForm />
    </div>
  );
};
export default AboutCompany;
