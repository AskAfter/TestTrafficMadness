import s from './CaseCard.module.css';
import Card from './card.svg';
import Logo from './logo.svg';
import ArrowIcon from './ArrowIcon';
const CaseCard = ({ name, time, profit, goal, date }) => {
  return (
    <div className={s.cardContainer}>
      <div className={s.text}>
        <div className={s.headerTimeBox}>
          <h4 className={s.cardHeader}>{name}</h4>
          <p className={`${s.textTime} ${s.sameStyleText}`}>{time}</p>
        </div>
        <div className={s.profitText}>
          <p className={`${s.sameStyleText} ${s.profitText}`}> Прибыль </p>
          <div className={s.profitThumb}>
            <p className={s.profit}>{profit}</p>
            <ArrowIcon className={s.arrowSVG} />
          </div>
        </div>
        <div className={s.goalDateThumb}>
          <p className={`${s.sameStyleText} ${s.goalText}`}> {goal} </p>
          <p className={`${s.sameStyleText} ${s.dateText}`}> {date} </p>
        </div>
      </div>
      <img src={Card} alt="card shape" className={s.cardSVG} />
      <img src={Logo} alt="logo image" className={s.logoSVG} />
    </div>
  );
};
export default CaseCard;
