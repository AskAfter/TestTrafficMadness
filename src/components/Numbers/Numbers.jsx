import s from './Numbers.module.css';
// import rectangular from '../../assets/rectangleMobile.svg';

const Numbers = () => {
  return (
    <div className={s.container} id="numbers">
      <div className={s.rectangular}></div>
      <div className={s.mainContent}>
        <div className={s.headerWrap}>
          <h2 className={s.header}>Цифры</h2>
          <p className={`${s.text} ${s.dateText}`}>Cентябрь 2022</p>
        </div>
        <div className={s.statsContainer}>
          <div className={s.statColumn}>
            <h3 className={`${s.text} ${s.numbersHeader}`}>
              Торговой <span className={s.lineBreak}>прибыли</span>
            </h3>
            <p className={s.numbers}>2756%</p>
          </div>
          <div className={s.statColumn}>
            <h3 className={`${s.text} ${s.numbersHeader}`}>
              фьючерсных <span className={s.lineBreak}>и спотовых сделок</span>
            </h3>
            <p className={s.numbers}>67</p>
          </div>
        </div>
        <div className={`${s.statColumn} ${s.lastStatColumn}`}>
          <h3 className={`${s.text} ${s.numbersHeader}`}>
            прибыль <span className={s.lineBreak}>подписчиков</span>
          </h3>
          <p className={s.numbers}>375000</p>
        </div>
      </div>
    </div>
  );
};
export default Numbers;
