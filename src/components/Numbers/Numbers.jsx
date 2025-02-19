import s from './Numbers.module.css';

const Numbers = () => {
  return (
    <div className={s.container}>
      <h2 className={s.header}>Цифры</h2>
      <p className={`${s.text} ${s.dateText}`}>Cентябрь 2022</p>
      <div className={s.statsContainer}>
        <div className={s.statColumn}>
          <h3 className={`${s.text} ${s.numbersHeader}`}>
            Торговой <br />
            прибыли
          </h3>
          <p className={s.numbers}>2756%</p>
        </div>
        <div className={s.statColumn}>
          <h3 className={`${s.text} ${s.numbersHeader}`}>
            фьючерсных <br />и спотовых сделок
          </h3>
          <p className={s.numbers}>67</p>
        </div>
      </div>

      <div className={`${s.statColumn}`}>
        <h3 className={`${s.text} ${s.numbersHeader}`}>
          прибыль <br />
          подписчиков
        </h3>
        <p className={s.numbers}>375000</p>
      </div>
    </div>
  );
};
export default Numbers;
