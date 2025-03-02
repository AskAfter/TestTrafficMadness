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

  // Функція для закриття модалки при кліку поза нею
  const handleOverlayClick = event => {
    if (event.target.classList.contains(s.overlay)) {
      onClose();
    }
  };

  return (
    <div
      className={`${s.overlay} ${isOpen ? s.open : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={s.container}>
        <button className={s.closeBtn} onClick={onClose}>
          <img className={s.closeIcon} src={closeIcon} alt="Закрити" />
        </button>
        <nav className={s.nav}>
          <ul className={s.list}>
            {[
              { href: '#numbers', text: 'Цифры' },
              { href: '#deals', text: 'Сделки онлайн' },
              { href: '#about', text: 'О компании' },
              { href: '#how-to-start', text: 'Как начать' },
              { href: '#tariffs', text: 'Тарифы' },
              { href: '#tradeblade', text: 'отзывы' },
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
          <button className={s.btn}>Регистрация</button>
          <button className={s.btn}>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
