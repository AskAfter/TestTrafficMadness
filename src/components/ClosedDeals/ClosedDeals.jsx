import CaseCardList from '../CaseCardList/CaseCardList';
import cases from './cases.json';
import s from './ClosedDeals.module.css';

const ClosedDeals = () => {
  return (
    <div className="sectionDark">
      <div className={s.container} id="deals">
        <h2 className={s.header}>Прошедшие сделки</h2>
        <div className={s.onlineContainer}>
          <div className={s.circle}></div>
          <p className={s.onlineText}>Онлайн</p>
        </div>
        <CaseCardList cases={cases} />
      </div>
    </div>
  );
};

export default ClosedDeals;
