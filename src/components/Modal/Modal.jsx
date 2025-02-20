import { useEffect } from 'react';
import s from './Modal.module.css';
import closeIcon from './closeIcon.svg';

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Заборона скролу сторінки
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className={`${s.overlay} ${isOpen ? s.open : ''}`}>
      <div className={s.container}>
        <button className={s.closeBtn} onClick={onClose}>
          <img className={s.closeIcon} src={closeIcon} alt="" />
        </button>
        <nav className={s.nav}>
          <ul className={s.list}>
            {[
              { href: '#numbers', text: 'Цифры' },
              { href: '#deals', text: 'Сделки онлайн' },
              { href: '#about', text: 'О компании' },
              { href: '#tradeblad', text: 'TradeBlade это' },
              { href: '#how-to-start', text: 'Как начать' },
              { href: '#tariffs', text: 'Тарифы' },
              { href: '#faq', text: 'FAQ' },
            ].map(({ href, text }) => (
              <li key={href}>
                <a href={href} className={s.link} onClick={onClose}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={s.btnsWrapper}>
          <button className={s.btn}>регистрация</button>
          <button className={s.btn}>Войти</button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
