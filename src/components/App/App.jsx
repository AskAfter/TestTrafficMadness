import AboutCompany from '../AboutCompany/AboutCompany';
import ClosedDeals from '../ClosedDeals/ClosedDeals';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Numbers from '../Numbers/Numbers';
import Tariffs from '../Tariffs/Tariffs';
import s from './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <Header />
      <Hero />
      <Numbers />
      <ClosedDeals />
      <AboutCompany />
      <Tariffs />
    </div>
  );
}

export default App;
