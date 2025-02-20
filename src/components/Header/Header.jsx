import burgerIcon from './burger.svg';
import tradeBladeIcon from '../../assets/tradeBlade.svg';
import s from './Header.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={s.container}>
      <a href="/">
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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
export default Header;
