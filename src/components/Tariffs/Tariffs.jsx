import { useEffect, useRef, useState } from 'react';
import s from './Tariffs.module.css';
import icon from './birdIcon.svg';
import line from './line.svg';

const Tariffs = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);
  const [selectedOption, setSelectedOption] = useState('12 месяцев');
  const [selectedOptionVIP, setSelectedOptionVIP] = useState('12 месяцев');
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
  const [vipPrice, setVipPrice] = useState(585);
  const [vipDiscount, setVipDiscount] = useState(-35);

  const handleSelectVipChange = e => {
    const selected = e.target.value;
    setSelectedOptionVIP(selected);
    if (selected === '12 месяцев') {
      setVipPrice(585);
      setVipDiscount(-35);
    } else if (selected === '6 месяцев') {
      setVipPrice(650);
      setVipDiscount(-20);
    } else if (selected === '1 месяц') {
      setVipPrice(785);
      setVipDiscount(-5);
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
    <div className="sectionDark">
      <div className={s.container} id="tariffs">
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
        <div className={s.cardsWrapper}>
          <div className={`${s.standardCard} ${s.card}`}>
            <h3 className={s.cardHeader}>STANDART</h3>
            <ul className={s.cardTextThumb}>
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>Ручной трейдинг</p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>
                  Автоматическое или полуавтоматическое копирование сделок
                </p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>Личный кабинет со статистикой</p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>
                  Среднесрочные сделки с уровнями набора портфеля
                </p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
            </ul>
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
          <div className={`${s.standardCard} ${s.vip}`}>
            <h3 className={s.cardHeader}>VIP</h3>
            <ul className={s.cardTextThumb}>
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>Ручной трейдинг</p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>
                  Автоматическое или полуавтоматическое копирование сделок
                </p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>Личный кабинет со статистикой</p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>
                  Краткосрочные, среднесрочные и инвест сделки
                </p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>Доступ в Vip чат с командой</p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
              <li className={s.benefitsThumb}>
                <img className={s.icon} src={icon} alt="Иконка наличия" />
                <p className={s.text}>Наш авторский курс по трейдингу</p>
              </li>
              <img className={s.line} src={line} alt="Подчеркивание" />
            </ul>
            <div className={s.priceTimeBox}>
              <p className={s.price}>${vipPrice}</p>
              <p className={s.discount}>{vipDiscount}%</p>
              <select
                className={s.select}
                value={selectedOptionVIP}
                onChange={handleSelectVipChange}
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
      </div>
    </div>
  );
};
export default Tariffs;
