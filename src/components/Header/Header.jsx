import burgerIcon from './burger.svg';
import tradeBladeIcon from './tradeBlade.svg';
import s from './Header.module.css';
const Header = () => {
  return (
    <div className={s.container}>
      <a href="/">
        <img className={s.tradeBladeIcon} src={tradeBladeIcon} alt="Меню" />
      </a>
      <a href="/" className={s.burgerLink}>
        <img className={s.burgerIcon} src={burgerIcon} alt="Меню" />
      </a>
    </div>
  );
};
export default Header;
