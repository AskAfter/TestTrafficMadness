import { useEffect, useRef, useState } from 'react';
import s from './Tariffs.module.css';
import icon from './birdIcon.svg';
import line from './line.svg';

const Tariffs = () => {
  const [selectedOption, setSelectedOption] = useState('12 месяцев');
  const [price, setPrice] = useState(234);
  const [discount, setDiscount] = useState(-35);
  const handleSelectChange = e => {
    const selected = e.target.value;
    setSelectedOption(selected);
    if (selected === '12 месяцев') {
      setPrice(234);
      setDiscount(-35);
    } else if (selected === '6 месяцев') {
      setPrice(280);
      setDiscount(-20);
    } else if (selected === '1 месяц') {
      setPrice(320);
      setDiscount(-5);
    }
  };
  const [activeButton, setActiveButton] = useState(1);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);

  const handleButtonClick = buttonNumber => {
    setActiveButton(buttonNumber);
  };

  useEffect(() => {
    if (activeButton === 1 && button1Ref.current) {
      button1Ref.current.focus();
    } else if (activeButton === 2 && button2Ref.current) {
      button2Ref.current.focus();
    }
  }, [activeButton]);
  return (
    <div className={s.container}>
      <h2 className={s.header}>Тарифы</h2>
      <div className={s.buttonsThumb}>
        <button
          ref={button1Ref}
          onClick={() => handleButtonClick(1)}
          onMouseEnter={() => setActiveButton(1)}
          className={`${s.optionBtn} ${activeButton === 1 ? s.active : ''} ${
            s.btnOne
          }`}
          tabIndex={0}
          type="button"
        >
          СПОТ
        </button>
        <button
          ref={button2Ref}
          onClick={() => handleButtonClick(2)}
          onMouseEnter={() => setActiveButton(2)}
          className={`${s.optionBtn} ${activeButton === 2 ? s.active : ''} ${
            s.btnTwo
          }`}
          tabIndex={0}
          type="button"
        >
          фьючерс
        </button>
      </div>
      <div className={`${s.standardCard} ${s.card}`}>
        <h3 className={s.cardHeader}>STANDART</h3>
        <div className={s.cardTextThumb}>
          <div className={s.benefitsThumb}>
            <img className={s.icon} src={icon} alt="Иконка наличия" />
            <p className={s.text}>Ручной трейдинг</p>
          </div>
          <img className={s.line} src={line} alt="Подчеркивание" />
          <div className={s.benefitsThumb}>
            <img className={s.icon} src={icon} alt="Иконка наличия" />
            <p className={s.text}>
              Автоматическое или полуавтоматическое копирование сделок
            </p>
          </div>
          <img className={s.line} src={line} alt="Подчеркивание" />
          <div className={s.benefitsThumb}>
            <img className={s.icon} src={icon} alt="Иконка наличия" />
            <p className={s.text}>Личный кабинет со статистикой</p>
          </div>
          <img className={s.line} src={line} alt="Подчеркивание" />
          <div className={s.benefitsThumb}>
            <img className={s.icon} src={icon} alt="Иконка наличия" />
            <p className={s.text}>
              Среднесрочные сделки с уровнями набора портфеля
            </p>
          </div>
          <img className={s.line} src={line} alt="Подчеркивание" />
        </div>
        <div className={s.priceTimeBox}>
          <p className={s.price}>${price}</p>
          <p className={s.discount}>{discount}%</p>
          <select
            className={s.select}
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option className={s.option} value="12 месяцев">
              12 месяцев
            </option>
            <option className={s.option} value="6 месяцев">
              6 месяцев
            </option>
            <option className={s.option} value="1 месяц">
              1 месяц
            </option>
          </select>
        </div>
        <button className={s.tryBtn}>
          <span className={s.lineOne}>Попробовать</span>
          <span className={s.lineTwo}>5 дней бесплатно</span>
        </button>
      </div>
    </div>
  );
};
export default Tariffs;
