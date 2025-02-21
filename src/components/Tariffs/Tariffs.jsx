import { useEffect, useRef, useState } from 'react';
import s from './Tariffs.module.css';
import icon from './birdIcon.svg';
import line from './line.svg';

const Tariffs = () => {
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

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const options = {
      root: null, // спостерігаємо відносно вікна браузера
      rootMargin: '0px', // без відступів
      threshold: 0.1, // коли 10% елемента буде в межах екрану
    };

    const observer = new IntersectionObserver(([entry]) => {
      // entry.isIntersecting - true, коли кнопка в межах екрану
      setIsInView(entry.isIntersecting);
    }, options);

    // Спостерігаємо за першою кнопкою
    if (button1Ref.current) {
      observer.observe(button1Ref.current);
    }

    // Спостерігаємо за другою кнопкою
    if (button2Ref.current) {
      observer.observe(button2Ref.current);
    }

    // Очищення після використання
    return () => {
      if (button1Ref.current) observer.unobserve(button1Ref.current);
      if (button2Ref.current) observer.unobserve(button2Ref.current);
    };
  }, []);

  // Фокусування на кнопці після того, як вона потрапила в область видимості
  useEffect(() => {
    if (isInView) {
      if (activeButton === 1 && button1Ref.current) {
        button1Ref.current.focus();
      } else if (activeButton === 2 && button2Ref.current) {
        button2Ref.current.focus();
      }
    }
  }, [isInView, activeButton]);

  return (
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
      {/* Інші компоненти залишаються без змін */}
    </div>
  );
};

export default Tariffs;
