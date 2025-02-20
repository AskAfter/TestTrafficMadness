import s from './Footer.module.css';
import tradeBladeIcon from '../../assets/tradeBlade.svg';

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.innerContainer}>
        <div className={s.topWrapper}>
          <div className={s.navHeaderWrapper}>
            <h3 className={s.navHeader}>Быстрая навигация</h3>
          </div>
          <div>
            <nav className={s.nav}>
              <ul className={s.list}>
                <li className={s.liLink}>
                  <a href="#numbers" className={s.link}>
                    Цифры
                  </a>
                </li>
                <li className={s.liLink}>
                  <a href="#deals" className={s.link}>
                    Сделки онлайн
                  </a>
                </li>
                <li className={s.liLink}>
                  <a href="#about" className={s.link}>
                    О компании
                  </a>
                </li>
                <li className={s.liLink}>
                  <a href="#tradeblad" className={s.link}>
                    TradeBlade это
                  </a>
                </li>
                <li>
                  <a href="#how-to-start" className={`${s.link} ${s.hidden}`}>
                    Как начать
                  </a>
                </li>
                <li className={s.liLink}>
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
          <a href="#">
            <img className={s.tradeBladeIcon} src={tradeBladeIcon} alt="Меню" />
          </a>
          <p className={s.allRights}>
            &#xa9; 2022 TradeBlade. All rights reserved
          </p>
        </div>
      </div>
      <div className={s.box}></div>
    </div>
  );
};
export default Footer;
