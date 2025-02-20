import s from './Modal.module.css';
import closeIcon from './closeIcon.svg';

const Modal = () => {
  return (
    <div className={s.container}>
      <button className={s.closeBtn}>
        <img className={s.closeIcon} src={closeIcon} alt="" />
      </button>
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
      <div className={s.btnsWrapper}>
        <button className={s.btn}>регистрация</button>
        <button className={s.btn}>Войти</button>
      </div>
    </div>
  );
};
export default Modal;
