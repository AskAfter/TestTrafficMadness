import CaseCard from '../CaseCard/CaseCard';
import s from './CaseCardList.module.css';

const CaseCardList = ({ cases }) => {
  const markup = cases.map(({ name, time, id, profit, goal, date }) => {
    return (
      <li key={id}>
        <CaseCard
          name={name}
          time={time}
          profit={profit}
          goal={goal}
          date={date}
        />
      </li>
    );
  });
  return <ul className={s.cardList}>{markup}</ul>;
};
export default CaseCardList;
