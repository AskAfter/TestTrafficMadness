import CaseCardList from '../CaseCardList/CaseCardList';
import cases from './cases.json';
const ClosedDeals = () => {
  return (
    <div>
      <CaseCardList cases={cases} />
    </div>
  );
};
export default ClosedDeals;
