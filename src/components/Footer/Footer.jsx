import s from './Footer.module.css';
import tradeBladeIcon from '../../assets/tradeBlade.svg';

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.topWrapper}>
        <div className={s.navHeaderWrapper}>
          <h3 className={s.navHeader}>Быстрая навигация</h3>
        </div>
        <div>
          <nav className={s.nav}>
            <ul className={s.list}>
              <li>
                <a href="#numbers" className={s.link}>
                  Цифры
                </a>
              </li>
              <li>
                <a href="#deals" className={s.link}>
                  Сделки онлайн
                </a>
              </li>
              <li>
                <a href="#about" className={s.link}>
                  О компании
                </a>
              </li>
              <li>
                <a href="#tradeblad" className={s.link}>
                  TradeBlade это
                </a>
              </li>
              <li>
                <a href="#how-to-start" className={s.link}>
                  Как начать
                </a>
              </li>
              <li>
                <a href="#tariffs" className={s.link}>
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#faq" className={s.link}>
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={s.bottomWrapper}>
        <a href="/">
          <img className={s.tradeBladeIcon} src={tradeBladeIcon} alt="Меню" />
        </a>
        <p className={s.allRights}>© 2022 TradeBlade. All rights reserved</p>
      </div>
      <div className={s.box}></div>
    </div>
  );
};
export default Footer;
