import burgerIcon from './burger.svg';
import tradeBladeIcon from '../../assets/tradeBlade.svg';
import s from './Header.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={s.container}>
      <a href="#">
        <img className={s.tradeBladeIcon} src={tradeBladeIcon} alt="Меню" />
      </a>
      <a
        href="#"
        className={s.burgerLink}
        onClick={e => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
      >
        <img className={s.burgerIcon} src={burgerIcon} alt="Меню" />
      </a>
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
              <a href={href} className={s.link}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className={s.btnsWrapper}>
        <button className={`${s.btn} ${s.btn1}`}>Вход</button>
        <button className={`${s.btn} ${s.btn2}`}>Реестрация</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Header;
