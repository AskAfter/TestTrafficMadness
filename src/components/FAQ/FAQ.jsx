import { useState } from 'react';
import s from './FAQ.module.css';
import downIcon from './downIcon.svg'; // Іконка для згорнутого стану
import upIcon from './upIcon.svg'; // Іконка для розгорнутого стану

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const toggleOpen = index => {
    setOpen(prevOpen => (prevOpen === index ? null : index));
  };

  const faqItems = [
    { title: 'Что такое TradeBlade' },
    { title: 'Что TradeBlade предлагает инвесторам' },
    { title: 'Должен ли я перевести свои средства на TradeBlade' },
  ];

  return (
    <div className={s.container} id="faq">
      <h2 className={s.header}>Часто задаваемые вопросы</h2>

      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`${s.faqItem} ${open === index ? s.open : ''}`}
          onClick={() => toggleOpen(index)}
        >
          <div className={s.faqHeader}>
            <h3 className={s.faqTitle}>{item.title}</h3>
            <img
              src={open === index ? upIcon : downIcon}
              alt="Toggle"
              className={s.icon}
            />
          </div>
          <div className={`${s.faqContent} ${open === index ? s.visible : ''}`}>
            <p>
              Мы опытная команда, для которой трейдинг – профессия. TradeBlade
              является авторизованным официальным брокером биржи Binance. <br />
              <br /> Он представляет пользователям множество преимуществ, таких
              как более высокая скорость синхронизации API и возможность создать
              учетную запись Binance через платформу TradeBlade всего в 1 клик.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
